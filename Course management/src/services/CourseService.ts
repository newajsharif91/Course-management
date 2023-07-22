// services/CourseService.ts
import { Course } from '../models/Course';

// Mock course data (you can replace this with actual API calls)
const courses: Course[] = [
  { id: '1', name: 'Course 1', description: 'Description for Course 1' },
  { id: '2', name: 'Course 2', description: 'Description for Course 2' },
];

export const CourseService = {
  getAllCourses: (): Course[] => {
    return courses;
  },
  // Add CRUD methods for courses if needed
};
