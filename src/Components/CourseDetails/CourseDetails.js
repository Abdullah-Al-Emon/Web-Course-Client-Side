import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () =>
{
    const detailsCourse = useLoaderData()
    const { _id, title, details, total_price, image_url } = detailsCourse;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mx-6 my-10">
            <figure><img src={image_url} className='w-96' alt="Album" /></figure>
            <div className="card-body">
                <div className="card-actions justify-center mb-3">
                    <button className="btn btn-primary">Dwonload</button>
                </div>
                <h2 className="card-title text-black">{title}</h2>
                <p className='text-justify text-black'>{details}</p>
                <p className='m-0 p-0 font-semibold text-black'>Course Purchase Price: {total_price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to={`/detail/${_id}`}>Get premium access</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;