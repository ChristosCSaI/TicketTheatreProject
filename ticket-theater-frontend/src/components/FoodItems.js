import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditFoodItem from './EditFoodItem';

const FoodItems = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        fetchFoodItems();
    }, []);

    const fetchFoodItems = () => {
        axios.get('http://localhost:5106/api/food')
            .then(response => {
                setFoodItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the food items!', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5106/api/food/${id}`)
            .then(() => {
                fetchFoodItems();
            })
            .catch(error => {
                console.error('There was an error deleting the food item!', error);
            });
    };

    const handleEdit = (item) => {
        setEditItem(item);
    };

    const handleSave = (updatedItem) => {
        setEditItem(null);
        fetchFoodItems();
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Food Items Sold
            </Typography>
            <List>
                {foodItems.map(item => (
                    <ListItem key={item.id}>
                        {editItem && editItem.id === item.id ? (
                            <EditFoodItem item={editItem} onSave={handleSave} />
                        ) : (
                            <>
                                <ListItemText primary={`${item.name} - Quantity: ${item.quantity}, Profit: $${item.profit.toFixed(2)}`} />
                                <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default FoodItems;
