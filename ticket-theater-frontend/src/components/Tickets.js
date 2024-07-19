import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditTicket from './EditTicket';

const Tickets = () => {
    const [tickets, setTickets] = useState([]);
    const [editTicket, setEditTicket] = useState(null);

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = () => {
        axios.get('http://localhost:5106/api/tickets')
            .then(response => {
                setTickets(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the tickets!', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5106/api/tickets/${id}`)
            .then(() => {
                fetchTickets();
            })
            .catch(error => {
                console.error('There was an error deleting the ticket!', error);
            });
    };

    const handleEdit = (ticket) => {
        setEditTicket(ticket);
    };

    const handleSave = (updatedTicket) => {
        setEditTicket(null);
        fetchTickets();
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Tickets Sold
            </Typography>
            <List>
                {tickets.map(ticket => (
                    <ListItem key={ticket.id}>
                        {editTicket && editTicket.id === ticket.id ? (
                            <EditTicket ticket={editTicket} onSave={handleSave} />
                        ) : (
                            <>
                                <ListItemText primary={`${ticket.movieName} - Quantity: ${ticket.quantity}, Profit: $${ticket.profit.toFixed(2)}`} />
                                <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(ticket)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(ticket.id)}>
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

export default Tickets;
