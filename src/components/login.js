import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Login() {
    // Initializing details required for user login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Handling the login for users
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // wait for successful user login then nav to admin page, if not send error
            const response = await axios.post('http://localhost:4000/login', { username, password });
            if (response.data === 'Login successful') {
                navigate('/adminpage');
            } else {
                // Handle login failure
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <Container className="mt-5">
            <Form onSubmit={handleSubmit}>
                <h2 className="mb-3">Login</h2>
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
                        placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
}

export default Login;
