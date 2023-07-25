// components/Dashboard.tsx
import React, { useState } from 'react';
import { CourseService } from '../services/CourseService';
import { UserService } from '../services/UserService';
import { Course } from '../models/Course';
import { User } from '../models/User';
import NavBar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const courses: Course[] = CourseService.getAllCourses();
  const users: User[] = UserService.getAllUsers();
  const navigate = useNavigate();
  const [courseMessage, setcourseMessage] = useState('');
  const [userMessage, setuserMessage] = useState('');

  // Add CRUD methods for courses and users if needed
  const navigatetoCreateCourse = () => {
    navigate('/createcourse');
  };

  const navigatetoCreateUser = () => {
    navigate('/createuser');
  };

  const handleDeleteCourse = (courseId: string) => {
    const isDeleted = CourseService.deleteCourse(courseId);
    if (isDeleted) {
      setcourseMessage(`Course with ID ${courseId} deleted successfully!`);
    } else {
      setcourseMessage(`Course with ID ${courseId} not found.`);
    }
  };

  const handleDeleteUser = (userId: string) => {
    const isDeleted = UserService.deleteUser(userId);
    if (isDeleted) {
      setuserMessage(`User with ID ${userId} deleted successfully!`);
    } else {
      setuserMessage(`User with ID ${userId} not found.`);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <NavBar />
      <h2>List of Courses</h2>
      <div>
        <button onClick={navigatetoCreateCourse}>Create Course</button>
        {courses.map((course) => (
          <div key={course.id}>
            <div>
              <strong>{course.name}</strong>:
              <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
              <Link to={`/updatecourse/${course.id}`}>
                <button>Edit</button>
              </Link>
            </div>
            <div>
              {course.description}
            </div>
          </div>
        ))}
        {courseMessage && <p>{courseMessage}</p>}
      </div>

      <h2>List of Users</h2>
      <div>
        <button onClick={navigatetoCreateUser}>Create User</button>
        {users.map((user) => (
          <div key={user.id}>
            <div>
              <strong>Email:</strong> {user.email}, <strong>Role:</strong> {user.role}
            </div>
            <div>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              <Link to={`/updateuser/${user.id}`}>
                <button>Edit</button>
              </Link>
            </div>
          </div>
        ))}
        {userMessage && <p>{userMessage}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
