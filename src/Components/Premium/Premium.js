import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Premium = () =>
{
    const premium = useLoaderData();
    const { _id, title, details, total_price, image_url } = premium;
    return (
        <div className="card lg:w-72 bg-base-100 shadow-[0_20px_35px_rgba(0,0,0,0.08)] mx-20 my-10">
            <figure><img src={image_url} alt="Shoes" className='h-52' /></figure>
            <div className="card-body">
                <h2 className="card-title text-black">{title}</h2>
                <p className='text-justify text-black'>{details.slice(0, 100) + '....'}</p>
                <p className='m-0 p-0 font-semibold text-black'>Course Price: {total_price}$</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to={`/details/${_id}`}>Course Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Premium;