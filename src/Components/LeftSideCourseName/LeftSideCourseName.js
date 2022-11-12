import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideCourseName = () =>
{
    const [courses, setCourse] = useState([])

    useEffect(() =>
    {
        fetch('https://web-course-server.vercel.app/new-course')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div className='shadow-[0_0px_35px_rgba(100,95,90,0.8)] p-10 h-full'>
            <div className='text-center'>
                {
                    courses.map(course => <p className='mb-3' key={course.id}>
                        <button className="btn btn-glass w-44" >
                            <Link to={`/course/${course.id}`}>{course.name}</Link>
                        </button>
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideCourseName;