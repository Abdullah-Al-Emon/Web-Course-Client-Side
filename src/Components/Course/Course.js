import React from 'react';
import { Outlet } from 'react-router-dom';

const Course = () =>
{
    return (
        <div className='flex md:flex-row flex-col'>
            <div className='w-96'>
                this
            </div>
            <div className='w-full'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Course;