import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FinancialStats = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5106/api/financial')
            .then(response => {
                setStats(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the financial stats!', error);
            });
    }, []);

    return (
        <div>
            <h2>Financial Statistics</h2>
            {stats ? (
                <div>
                    <p>Average Ticket Profit: ${stats.averageTicketProfit.toFixed(2)}</p>
                    <p>Average Food Item Profit: ${stats.averageFoodItemProfit.toFixed(2)}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default FinancialStats;
