import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Details = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)
    return (
        <div >
            <h2>This is Course {courseDetails.length}</h2>
            <div className='grid grid-cols-3 gap-10 mx-10 my-10'>
            {
                courseDetails.map(detail => <CourseCard
                key={detail._id}
                detail={detail}
                >
                </CourseCard>)
            }
            </div>
        </div>
    );
};

export default Details;