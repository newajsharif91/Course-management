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
  forgotPassword: (email: string): boolean => {
    // Logic to handle password reset
    return true;
  },
};
