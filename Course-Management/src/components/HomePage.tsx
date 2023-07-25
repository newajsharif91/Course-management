// components/HomePage.tsx
import React from 'react';
import { CourseService } from '../services/CourseService';
import { Course } from '../models/Course';
import NavBar from './Navbar';

const HomePage: React.FC = () => {
  const courses: Course[] = CourseService.getAllCourses();

  return (
    <div>
      <h1>Home Page</h1>
      <NavBar/>
      <h2>List of Courses</h2>
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <strong>{course.name}</strong>: {course.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
