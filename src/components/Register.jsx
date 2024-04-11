import React, { useState } from 'react';
import './style/Register.css';
import { registerUser } from './service/userservice';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        id: '',
        username: '',
        email: '',
        password: '',
        phonenumber: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = () =>{
        navigate('/login')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            alert(response.data);
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
        
       
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phonenumber">Phone Number:</label>
                    <input type="text" id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={handleChange} required />
                </div>
                <button type="submit">Register</button>
                <button onClick={handleLogin}>Have Account? Login here</button>
            </form>
        </div>
    );
}

export default Register;
