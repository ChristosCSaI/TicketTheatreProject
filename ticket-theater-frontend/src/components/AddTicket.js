import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';

const AddTicket = ({ onAdd }) => {
    const [movieName, setMovieName] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [studioCutPercentage, setStudioCutPercentage] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5106/api/tickets', {
            movieName,
            salePrice: parseFloat(salePrice),
            studioCutPercentage: parseFloat(studioCutPercentage),
            quantity: parseInt(quantity)
        })
        .then(response => {
            onAdd(response.data);
            setMovieName('');
            setSalePrice('');
            setStudioCutPercentage('');
            setQuantity('');
        })
        .catch(error => {
            console.error('There was an error adding the ticket!', error);
        });
    };

    return (
        <Container>
            <h2>Add Ticket</h2>
            <form onSubmit={handleSubmit}>
                <TextField label="Movie Name" value={movieName} onChange={(e) => setMovieName(e.target.value)} fullWidth margin="normal" />
                <TextField label="Sale Price" type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} fullWidth margin="normal" />
                <TextField label="Studio Cut Percentage" type="number" value={studioCutPercentage} onChange={(e) => setStudioCutPercentage(e.target.value)} fullWidth margin="normal" />
                <TextField label="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary">Add</Button>
            </form>
        </Container>
    );
}

export default AddTicket;
