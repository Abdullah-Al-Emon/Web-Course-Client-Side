import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Details = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails)
    return (
        <div >
            <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 md:gap-5 grid-cols-1 gap-4 mx-10 my-10'>
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