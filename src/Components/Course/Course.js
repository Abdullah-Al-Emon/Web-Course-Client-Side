import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideCourseName from '../LeftSideCourseName/LeftSideCourseName';

const Course = () =>
{
    return (
        <div className='flex md:flex-row flex-col'>
            <div className=''>
                <LeftSideCourseName></LeftSideCourseName>
            </div>
            <div className=''>
                <Outlet/>
            </div>
        </div>
    );
};

export default Course;