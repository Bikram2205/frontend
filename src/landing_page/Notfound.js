import React from 'react';
import { Link } from 'react-router-dom';

function Notfound() {
    return (
        <div className='container p-5 mb-5'>
            <div className='text-Center'>
                <h1 className='mt-5'>404 Not Found</h1>
                <p className='fs-5'>Sorry, The page you are looking for does not exist.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5'
                    style={{ width: "15%", margin: "0 auto" }}>
                        <Link to="/">Go to Homepage</Link>
                </button>
            </div>
        </div>
    );
}

export default Notfound;