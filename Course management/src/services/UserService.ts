// services/UserService.ts
import { User } from '../models/User';

// Mock user data (you can replace this with actual API calls)
const users: User[] = [
  { id: '1', email: 'admin@example.com', password: '1234', role: 'Admin' },
  { id: '2', email: 'client@example.com', password: '1234', role: 'Client' },
];

export const UserService = {
  getAllUsers: (): User[] => {
    return users;
  },
  // Add CRUD methods for users if needed
};
