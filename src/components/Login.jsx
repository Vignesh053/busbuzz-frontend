import React, { useState } from 'react';
import {loginUser, saveLoggedInUser, storeToken} from './service/userservice.js';
import './style/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;
        const errors = {};

        if (!username.trim()) {
            errors.username = 'Username is required';
            isValid = false;
        }
        
        if (!password) {
            errors.password = 'Password is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        localStorage.clear;
        sessionStorage.clear;

        if (!validateForm()) {
            return;
        }

        try {
            

            const response = await loginUser(username, password);
            
            if(response.data && response.data.accessToken){
                storeToken(response.data.accessToken);
                saveLoggedInUser(username, response.data.userId);
                navigate('/');
                
            }else {
                setErrors({ form: 'No token received, check credentials' });
            }
        } catch (error) {
            console.error("Error during login", error);
            setErrors({ form: 'Failed to login. Please try again later.' });
        }
    };

    const handleRegisterButton = () =>{
        navigate('/register')
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        className='input'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        className='input'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button id='login-sbt' type="submit">Login</button>
                <button onClick={handleRegisterButton}>Register</button>
            </form>
        </div>
    );
};

export default Login;

