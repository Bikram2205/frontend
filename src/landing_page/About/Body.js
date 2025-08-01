import React from 'react';

function Body() {
    return (
        <div className='container'>
            <div className='row p-4 mt-4 mb-5'>
                <div className='col-8'>
                    <h1 className='fs-7 text-center'>People</h1>
                    <p>Hi, I’m Bikram — a passionate and creative Web Developer dedicated to building responsive, user-friendly, and modern websites. I specialize in HTML, CSS, JavaScript, React, and backend technologies like Node.
                        js and MongoDB. I love transforming ideas into functional and visually appealing web applications that provide an exceptional user experience.With a focus on clean design and efficient code,
                        I strive to create websites and web apps that not only look good but also perform smoothly across all devices. Whether it’s a personal blog, a business site, or a complex web application,
                        I bring ideas to life with precision and care.</p>

                    <p>
                        <h4>🚀 What I Do:</h4>
                        <li><b>Frontend Development (HTML, CSS, JavaScript, React)</b></li>
                        <br />
                        <li><b>Backend Development (Node.js, Express, MongoDB)</b></li>
                        <br />
                        <li><b>Responsive & Mobile-Friendly Design</b></li>
                        <br />
                        <li><b>Web Performance Optimization</b></li>
                        <br />
                        <li><b>Portfolio & Business Websites</b></li>
                    </p>
                </div>
                <div className='col-4'>
                    <img src='media/images/bikram1.jpg' alt='image' style={{ width:'80%',borderRadius:"100%"  }} />
                </div>
            </div>
        </div>
    );
}

export default Body;