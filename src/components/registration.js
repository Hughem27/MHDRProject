import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

function Registration() {
    //  Initalizing attributes for reg
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {       
                //  awaiting the successful post for reg of a new user then nav to admin page, if fail send error message
            const response = await axios.post('http://localhost:4000/register', { username, password });
            console.log(response.data);
            navigate('/adminpage');     
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <Container className="mt-5">
            <Form onSubmit={handleSubmit}>
                <h2 className="mb-3">Registration</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    );
}

export default Registration;
