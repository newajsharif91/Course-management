// components/UpdateCourse.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CourseService } from '../services/CourseService';
import { Course } from '../models/Course';

const EditCoursePage: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();

    const courseToEdit: Course | undefined = CourseService.getAllCourses().find(
        (course) => course.id === courseId
    );
    
    const [courseName, setCourseName] = useState(courseToEdit?.name || '');
    const [courseDescription, setCourseDescription] = useState(courseToEdit?.description || '');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handleUpdateCourse = () => {
        if (!courseName || !courseDescription) {
            setMessage('Please enter both course name and description.');
        } else {
            const updatedCourse: Course | undefined = CourseService.updateCourse(
                courseId,
                courseName,
                courseDescription
            );

            if (updatedCourse) {
                setMessage('Course updated successfully!');
                navigate('/dashboard');
            } else {
                setMessage('Course not found.');
            }
        }
    };

    return (
        <div>
            <h1>Edit Course</h1>
            <div>
                <label>Course Name:</label>
                <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
            </div>
            <div>
                <label>Course Description:</label>
                <input
                    type="text"
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                />
            </div>
            <button onClick={handleUpdateCourse}>Update Course</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default EditCoursePage;
