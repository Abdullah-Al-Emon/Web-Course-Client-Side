import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import ExtraSection from '../ExtraSection/ExtraSection';
import OurStudent from '../OurStudent/OurStudent';
import StudentMarking from '../StudentMarking/StudentMarking';

const Home = () =>
{

    // https://prod-discovery.edx-cdn.org/media/course/image/156313d6-f892-4b08-9cee-43ea582f4dfb-7b98c686abcc.small.png
    <Link
        to='/course/01'
        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
    >
        This is Course
    </Link>

    return (
        <div>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-14">
                <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mt-9 mb-6">
                            <h2 className="max-w-lg mb-6 uppercase font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                               Web Course
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <Link
                                to='/course/01'
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                            >
                                See Web Course
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://prod-discovery.edx-cdn.org/media/course/image/156313d6-f892-4b08-9cee-43ea582f4dfb-7b98c686abcc.small.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <ExtraSection />
            <StudentMarking />
            <OurStudent />
            <About />
        </div>
    );
};


export default Home;