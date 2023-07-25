import React, { useState } from 'react';
import { UserService } from '../services/UserService';
import { User } from '../models/User';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    // State for new user form
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userRole, setUserRole] = useState<'Admin' | 'Client'>('Client');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleCreateUser = () => {
        if (!userEmail || !userPassword) {
            setMessage('Please enter both email and password.');
        } else {
            // Create the new user using the UserService
            const newUser: User | undefined = UserService.createUser(userEmail, userPassword, userRole);

            if (newUser) {
                setMessage(`User "${newUser.email}" created successfully!`);
            } else {
                setMessage('User already exists. Please choose a different email.');
            }

            // Reset the form after successful user creation
            setUserEmail('');
            setUserPassword('');
            navigate('/dashboard');

        }
    };

    return (
        <div>
            {/* Form for creating a new user */}
            <h2>Create New User</h2>
            <div>
                <label>Email:</label>
                <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Role:</label>
                <select value={userRole} onChange={(e) => setUserRole(e.target.value as 'Admin' | 'Client')}>
                    <option value="Admin">Admin</option>
                    <option value="Client">Client</option>
                </select>
            </div>
            <button onClick={handleCreateUser}>Create User</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Dashboard;
