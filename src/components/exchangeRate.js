import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Mapping for main currency abreviations to full names and symbols
const recognizedCurrencies = {
    USD: { name: 'United States Dollar', symbol: '$' },
    EUR: { name: 'Euro', symbol: '€' },
    GBP: { name: 'British Pound', symbol: '£' },
    JPY: { name: 'Japanese Yen', symbol: '¥' },   
};

function ExchangeRates() {
    //  Initializing the API variables
    const [rates, setRates] = useState({});
    const [loading, setLoading] = useState(true);

    //  Pulling in latest exchange rates from the API with UseEffect Hook
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

    //  Rendering the currency and rates
    const renderCurrencyCard = (currency, rate) => {
        const currencyInfo = recognizedCurrencies[currency];

        //  Displaying the currencies and rates
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

    //  to display loading if the information is still loading
    if (loading) {
        return <p>Loading...</p>;
    }

    // Splitting the rates into two seperate sections (main currecncies) and also less known currencies
    const recognizedCurrenciesList = Object.entries(rates)
        .filter(([currency]) => recognizedCurrencies.hasOwnProperty(currency));
    const unrecognizedCurrenciesList = Object.entries(rates)
        .filter(([currency]) => !recognizedCurrencies.hasOwnProperty(currency));

    return (
        <div>
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
            <div className="card text-white bg-secondary my-5 py-4 text-center">
                <div className="card-body"><h3 className="text-white m-0">End of up to date currencies!</h3></div>
            </div>
            <div>
                <p style={{color:'white'}}>w</p>
            </div>
        </div>
        
    );
}

export default ExchangeRates;
