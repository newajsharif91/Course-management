// components/Dashboard.tsx
import React from 'react';
import { CourseService } from '../services/CourseService';
import { UserService } from '../services/UserService';
import { Course } from '../models/Course';
import { User } from '../models/User';

const Dashboard: React.FC = () => {
  const courses: Course[] = CourseService.getAllCourses();
  const users: User[] = UserService.getAllUsers();

  // Add CRUD methods for courses and users if needed

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>List of Courses</h2>
      <div>
        <button>Create Course</button>
        {courses.map((course) => (
          <div>
            <div key={course.id}>
              <strong>{course.name}</strong>:
              <button>Delete</button>
              <button>Update</button>
            </div>
            <div>
              {course.description}
            </div>
          </div>
        ))}
      </div>

      <h2>List of Users</h2>
      <div>
      <button>Create User</button>
        {users.map((user) => (
          <div key={user.id}>
            <div>
              <strong>Email:</strong> {user.email}, <strong>Role:</strong> {user.role}
            </div>
            <div>
              <button>Delete</button>
              <button>Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
