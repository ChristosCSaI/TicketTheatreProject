import React from 'react';
import './App.css';
import FoodItems from './components/FoodItems';
import Tickets from './components/Tickets';
import FinancialStats from './components/FinancialStats';
import AddFoodItem from './components/AddFoodItem';
import AddTicket from './components/AddTicket';
import { Container, Typography, Paper } from '@mui/material';

function App() {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h2" align="center" gutterBottom>
                    Ticket Theater Sales and Profits
                </Typography>
                <AddFoodItem onAdd={() => {}} />
                <FoodItems />
                <AddTicket onAdd={() => {}} />
                <Tickets />
                <FinancialStats />
            </Paper>
        </Container>
    );
}

export default App;
