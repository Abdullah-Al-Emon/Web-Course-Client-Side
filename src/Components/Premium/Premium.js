import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const premium = useLoaderData();
    console.log(premium)
    return (
        <div>
            <h2>{premium.length}</h2>
        </div>
    );
};

export default Premium;