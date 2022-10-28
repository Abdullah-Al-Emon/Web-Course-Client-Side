import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Home = () => {
    const allDetails = useLoaderData();
    return (
        <div>
            {
                allDetails.map(detail => <CourseCard
                key={detail.id}
                detail={detail}
                >
                </CourseCard>)
            }
        </div>
    );
};

export default Home;