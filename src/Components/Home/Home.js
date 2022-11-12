import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>
{
    // <Link to='course/01'>go</Link>
    return (
        <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
            <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
                <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none md:text-center">
                        WEB COURSES
                    </h2>
                    <p className="mb-5 text-base md:text-lg md:text-center">
                    There are three types of web development roles: developers who specialize in the user 
                    interface (“front-end”), those who write the underlying code for running all website 
                    operations (“back-end”), and those who manage all aspects of a website (“full stack”).
                    </p>
                    <div className="mb-10 text-center md:mb-16 lg:mb-20">
                        <Link
                            to='/course/01'
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            This is Course
                        </Link>
                    </div>
                </div>
            </div>
            <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="https://prod-discovery.edx-cdn.org/media/course/image/156313d6-f892-4b08-9cee-43ea582f4dfb-7b98c686abcc.small.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Home;