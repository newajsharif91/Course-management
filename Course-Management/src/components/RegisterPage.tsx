// components/RegisterPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthService } from '../services/AuthService';

const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        // Implement your registration logic here
        if (!email || !password || !confirmPassword) {
            setMessage('Please fill all the fields.');
        }
        else if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
        } else {
            const isRegistered: boolean = AuthService.register(email, password, 'Client');
            if (isRegistered) {
                setMessage('Registration successful!');
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                setMessage('User already exists. Please choose a different email.');
            }
        }
    };

    return (
        <div>
            <h1>Register Page</h1>
            <div>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button onClick={handleRegister}>Register</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegisterPage;
