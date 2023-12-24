import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // New state for error message
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Reset error message on new submission
        try {
            const response = await axios.post('http://localhost:4000/login', { username, password });
            if (response.data === 'Login successful') {
                navigate('/adminpage');
            } else {
                setError('Invalid login credentials. Please try again.'); // Set error message on failure
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please try again later.'); // Set error message on exception
        }
    };

    return (
        <Container className="mt-5">
            <Form onSubmit={handleSubmit}>
                <h2 className="mb-3">Login</h2>
                {error && <Alert variant="danger">{error}</Alert>} 
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
