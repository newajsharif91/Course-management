// services/AuthService.ts
import { User } from '../models/User';

// Mock user data (you can replace this with actual API calls)
const users: User[] = [
  { id: '1', email: 'admin@example.com', password: '1234', role: 'Admin' },
  { id: '2', email: 'client@example.com', password: '1234', role: 'Client' },
];

export const AuthService = {
  login: (email: string, password: string): User | undefined => {
    const user = users.find((u) => u.email === email && u.password === password);
    return user;
  },

  register: (email: string, password: string, role: 'Admin' | 'Client'): boolean => {
    // Check if the user already exists
    if (users.some((user) => user.email === email)) {
      return false; // User already exists
    }

    // Add the new user to the list
    const newUser: User = {
      id: String(users.length + 1),
      email,
      password,
      role,
    };
    users.push(newUser);

    return true; // Registration successful
  },

  forgotPassword: (email: string): boolean => {
    // Logic to handle password reset
    return true;
  },
};
