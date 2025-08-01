import React from 'react';
import { Link } from 'react-router-dom';

function Body() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className='col-6'>
                    <img src='media/images/bkram2.png' alt='image' />
                </div>
                <div className='col-6 mb-5'>
                    <h1><b>Hello, I'm Bikram Bera</b></h1>
                    <h5> AND I'm a <b style={{color:"blue"}}>Frontend Developer</b></h5>
                    <p className='fs-5'>I am a passionate frontend developer with a keen interest in creating dynamic and responsive web applications.
                        I love to explore new technologies and continuously improve my skills.</p>
                </div>
                <div className='col-4'>
                    <Link to="/Project">
                        <button className='p-3 btn btn-primary fs-5 mb-5' style={{ width: "40%" }}>
                            projects
                        </button>
                    </Link>
                </div>
                <div className='col-4'>
                    <Link to="/Profile">
                        <button className='p-3 btn btn-primary fs-5 mb-5' style={{ width: "40%" }}>
                            Profile
                        </button>
                    </Link>
                </div>
                <div className='col-4'>
                    <Link to="/About">
                        <button className='p-3 btn btn-primary fs-5 mb-5' style={{ width: "40%" }}>
                            About Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Body;