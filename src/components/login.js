import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // const handleButtonClick = () => {
    //     if (isLoggedIn) {
    //         navigate('/path-to-navigate'); // Replace with your desired path
    //     } else {
    //         console.log("Not logged in");
    //     }
    // };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/login', {
                username,
                password
            });
            console.log('Response from server:', response.data);
            if (response.data === 'Login successful') {
                setIsLoggedIn(true); // Update the login state
                navigate('/');
            } else {
                // Handle login failure
            }
        } catch (error) {
            console.error('Login failed:', error);
            // Handle error
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
            <button type="submit"
                onClick={console.log(isLoggedIn)}
            >Login</button>
        </form>
    );
}

export default Login;
