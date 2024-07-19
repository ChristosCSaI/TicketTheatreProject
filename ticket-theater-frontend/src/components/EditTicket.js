import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container } from '@mui/material';

const EditTicket = ({ ticket, onSave }) => {
    const [movieName, setMovieName] = useState(ticket.movieName);
    const [salePrice, setSalePrice] = useState(ticket.salePrice);
    const [studioCutPercentage, setStudioCutPercentage] = useState(ticket.studioCutPercentage);
    const [quantity, setQuantity] = useState(ticket.quantity);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:5106/api/tickets/${ticket.id}`, {
            id: ticket.id,
            movieName,
            salePrice: parseFloat(salePrice),
            studioCutPercentage: parseFloat(studioCutPercentage),
            quantity: parseInt(quantity)
        })
        .then(response => {
            onSave(response.data);
        })
        .catch(error => {
            console.error('There was an error updating the ticket!', error);
        });
    };

    return (
        <Container>
            <h2>Edit Ticket</h2>
            <form onSubmit={handleSubmit}>
                <TextField label="Movie Name" value={movieName} onChange={(e) => setMovieName(e.target.value)} fullWidth margin="normal" />
                <TextField label="Sale Price" type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} fullWidth margin="normal" />
                <TextField label="Studio Cut Percentage" type="number" value={studioCutPercentage} onChange={(e) => setStudioCutPercentage(e.target.value)} fullWidth margin="normal" />
                <TextField label="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </form>
        </Container>
    );
}

export default EditTicket;
