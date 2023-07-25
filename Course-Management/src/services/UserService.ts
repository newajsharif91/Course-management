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

  createUser: (email: string, password: string, role: 'Admin' | 'Client'): User | undefined => {
    // Check if the user already exists
    if (users.some((user) => user.email === email)) {
      return undefined; // User already exists
    }

    // Generate a unique ID for the new user
    const userId: string = String(users.length + 1);

    // Create the new user object
    const newUser: User = {
      id: userId,
      email,
      password,
      role,
    };

    // Add the new user to the list
    users.push(newUser);

    return newUser;
  },

  deleteUser: (userId: string): boolean => {
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      return true; // User deleted successfully
    }
    return false; // User not found
  },

  updateUser: (
    userId: string,
    email: string,
    password: string,
    role: 'Admin' | 'Client'
  ): User | undefined => {
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex !== -1) {
      const updatedUser: User = {
        ...users[userIndex],
        email,
        password,
        role,
      };
      users[userIndex] = updatedUser;
      return updatedUser;
    }
    return undefined; // User not found
  },
  // Add CRUD methods for users if needed
};
