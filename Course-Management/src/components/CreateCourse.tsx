import React, { useState } from 'react';
import { CourseService } from '../services/CourseService';
import { Course } from '../models/Course';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    // State for new course form
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleCreateCourse = () => {
        if (!courseName || !courseDescription) {
            setMessage('Please enter both course name and description.');
        } else {
            // Create the new course using the CourseService
            const newCourse: Course = CourseService.createCourse(courseName, courseDescription);
            setMessage(`Course "${newCourse.name}" created successfully!`);

            // Reset the form after successful course creation
            setCourseName('');
            setCourseDescription('');
            navigate('/dashboard');
        }
    };

    return (
        <div>
            {/* Form for creating a new course */}
            <h2>Create New Course</h2>
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
            <button onClick={handleCreateCourse}>Create Course</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Dashboard;
