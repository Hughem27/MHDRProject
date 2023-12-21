import React, { useState } from 'react';
import axios from 'axios';




function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/login', {
                username,
                password
            });
            console.log('Server response:', response.data);
            // Handle successful login here
        } catch (error) {
            console.error('Login failed:', error);
            // Handle failed login here
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
