import React from 'react';
import { Outlet } from 'react-router-dom';
// import Course from '../Components/Course/Course';
import Header from '../Components/Header/Header';
import { Footer } from '../Footer/Footer';

const Main = () =>
{
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;