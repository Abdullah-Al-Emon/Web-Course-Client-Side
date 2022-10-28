import React from 'react';

const CourseCard = ({ detail }) =>
{
    const { _id, title, details, total_price, image_url } = detail;
    return (
        <div className="card w-96 bg-base-100 shadow-[0_20px_35px_rgba(0,0,0,0.08)]">
            <figure><img src={image_url} alt="Shoes" className='h-52' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0, 200) + '....'}</p>
                <p className='m-0 p-0'>Course Price: {total_price}$</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;