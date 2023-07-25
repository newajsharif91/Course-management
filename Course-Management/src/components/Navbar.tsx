// components/NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    // Implement your logout logic here
    const handleLogout = () => {
        // Perform any necessary cleanup, like removing authentication token or session data
        // For simplicity, we can just reload the page to log the user out
        window.location.reload();
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                {/* Add more navigation links as needed */}
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
