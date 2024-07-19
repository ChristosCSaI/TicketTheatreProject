import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';

const EditFoodItem = ({ item, onSave }) => {
    const [name, setName] = useState(item.name);
    const [salePrice, setSalePrice] = useState(item.salePrice);
    const [unitPrice, setUnitPrice] = useState(item.unitPrice);
    const [quantity, setQuantity] = useState(item.quantity);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:5106/api/food/${item.id}`, {
            id: item.id,
            name,
            salePrice: parseFloat(salePrice),
            unitPrice: parseFloat(unitPrice),
            quantity: parseInt(quantity)
        })
        .then(response => {
            onSave(response.data);
        })
        .catch(error => {
            console.error('There was an error updating the food item!', error);
        });
    };

    return (
        <Container>
            <h2>Edit Food Item</h2>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
                <TextField label="Sale Price" type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} fullWidth margin="normal" />
                <TextField label="Unit Price" type="number" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} fullWidth margin="normal" />
                <TextField label="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </form>
        </Container>
    );
}

export default EditFoodItem;
