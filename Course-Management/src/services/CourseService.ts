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

  createCourse: (name: string, description: string): Course => {
    // Generate a unique ID for the new course
    const courseId: string = String(courses.length + 1);

    // Create the new course object
    const newCourse: Course = {
      id: courseId,
      name,
      description,
    };

    // Add the new course to the list
    courses.push(newCourse);

    return newCourse;
  },

  deleteCourse: (courseId: string): boolean => {
    const courseIndex = courses.findIndex((course) => course.id === courseId);
    if (courseIndex !== -1) {
      courses.splice(courseIndex, 1);
      return true; // Course deleted successfully
    }
    return false; // Course not found
  },

  updateCourse: (courseId: string, name: string, description: string): Course | undefined => {
    const courseIndex = courses.findIndex((course) => course.id === courseId);
    if (courseIndex !== -1) {
      const updatedCourse: Course = {
        ...courses[courseIndex],
        name,
        description,
      };
      courses[courseIndex] = updatedCourse;
      return updatedCourse;
    }
    return undefined; // Course not found
  },
  // Add CRUD methods for courses if needed
};
