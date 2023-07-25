// components/UpdateUser.tsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserService } from '../services/UserService';
import { User } from '../models/User';

const EditUserPage: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();

    const userToEdit: User | undefined = UserService.getAllUsers().find(
        (user) => user.id === userId
    );

    const [email, setEmail] = useState(userToEdit?.email || '');
    const [password, setPassword] = useState(userToEdit?.password || '');
    const [userRole, setUserRole] = useState<'Admin' | 'Client'>(userToEdit?.role || 'Client');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleUpdateUser = () => {
        if (!email || !password) {
            setMessage('Please enter both email and password.');
        } else {
            const updatedUser: User | undefined = UserService.updateUser(userId, email, password, userRole);

            if (updatedUser) {
                setMessage('User updated successfully!');
                navigate('/dashboard');
            } else {
                setMessage('User not found.');
            }
        }
    };

    return (
        <div>
            {userToEdit ? (
                <>
                    <h1>Edit User</h1>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Role:</label>
                        <select value={userRole} onChange={(e) => setUserRole(e.target.value as 'Admin' | 'Client')}>
                            <option value="Admin">Admin</option>
                            <option value="Client">Client</option>
                        </select>
                    </div>
                    <button onClick={handleUpdateUser}>Update User</button>
                    {message && <p>{message}</p>}
                </>
            ) : (
                <p>User not found.</p>
            )}
        </div>
    );
};

export default EditUserPage;
