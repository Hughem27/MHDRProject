import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Mapping for currency codes to full names and symbols
const recognizedCurrencies = {
    USD: { name: 'United States Dollar', symbol: '$' },
    EUR: { name: 'Euro', symbol: '€' },
    GBP: { name: 'British Pound', symbol: '£' },
    JPY: { name: 'Japanese Yen', symbol: '¥' },
    // ... add more recognized currencies
};

function ExchangeRates() {
    const [rates, setRates] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://v6.exchangerate-api.com/v6/6ec6dea307f64076b6df2a56/latest/EUR')
            .then(response => {
                setRates(response.data.conversion_rates);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
            });
    }, []);

    const renderCurrencyCard = (currency, rate) => {
        const currencyInfo = recognizedCurrencies[currency];
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        <strong>{currencyInfo ? currencyInfo.name : currency}</strong>
                    </Card.Title>
                    <Card.Text>
                        {currency} - €1 = {currencyInfo ? currencyInfo.symbol : ''}{rate.toFixed(2)}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    const recognizedCurrenciesList = Object.entries(rates)
        .filter(([currency]) => recognizedCurrencies.hasOwnProperty(currency));
    const unrecognizedCurrenciesList = Object.entries(rates)
        .filter(([currency]) => !recognizedCurrencies.hasOwnProperty(currency));

    return (
        <Container>
            <h2>Top Currencies</h2>
            <Row className="justify-content-center">
                {recognizedCurrenciesList.map(([currency, rate]) => (
                    <Col key={currency} md={6} className="mb-4">
                        {renderCurrencyCard(currency, rate)}
                    </Col>
                ))}
            </Row>
            <h2>Other Currencies</h2>
            <Row className="justify-content-center">
                {unrecognizedCurrenciesList.map(([currency, rate]) => (
                    <Col key={currency} md={6} className="mb-4">
                        {renderCurrencyCard(currency, rate)}
                    </Col>
                ))}
            </Row>
            
        </Container>
        
    );
}

export default ExchangeRates;
