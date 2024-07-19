import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';

const AddFoodItem = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5106/api/food', {
            name,
            salePrice: parseFloat(salePrice),
            unitPrice: parseFloat(unitPrice),
            quantity: parseInt(quantity)
        })
        .then(response => {
            onAdd(response.data);
            setName('');
            setSalePrice('');
            setUnitPrice('');
            setQuantity('');
        })
        .catch(error => {
            console.error('There was an error adding the food item!', error);
        });
    };

    return (
        <Container>
            <h2>Add Food Item</h2>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
                <TextField label="Sale Price" type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} fullWidth margin="normal" />
                <TextField label="Unit Price" type="number" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} fullWidth margin="normal" />
                <TextField label="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary">Add</Button>
            </form>
        </Container>
    );
}

export default AddFoodItem;
