// models/User.ts
export interface User {
    id: string;
    email: string;
    password: string;
    role: 'Admin' | 'Client';
  }
  