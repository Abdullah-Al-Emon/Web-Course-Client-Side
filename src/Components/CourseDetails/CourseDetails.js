import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () =>
{
    const detailsCourse = useLoaderData()
    const { _id, title, details, total_price, image_url } = detailsCourse;
    return (
        <div>
            <div ref={ref} className="card lg:card-side bg-base-100 shadow-xl mx-6 my-10">
                <figure><img src={image_url} className='w-96' alt="Album" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-center mb-3">
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Download Pdf</button>}
                        </Pdf>
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
        </div>
    );
};

export default CourseDetails;