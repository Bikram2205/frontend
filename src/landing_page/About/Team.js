import React from 'react';

function Team() {
    return ( 
        
        <div className='container'>
            <div className='row' >
                <h1 className='fs-8 text-center'>Meet Our Team</h1>
                <div className='col-3'>
                    <img src='media/images/comingsoon.avif' alt='Team Member 1' style={{ width: '100%', borderRadius:"9%" }} />
                    <h3>Member 1</h3>
                    <p>Role: Frontend Developer</p>
                </div>
                <div className='col-3'>
                    <img src='media/images/comingsoon.avif' alt='Team Member 2' style={{ width: '100%', borderRadius:"9%" }} />
                    <h3>Member 2</h3>
                    <p>Role: Backend Developer</p>
                </div>
                <div className='col-3'>
                    <img src='media/images/comingsoon.avif' alt='Team Member 3' style={{ width: '100%', borderRadius:"9%" }} />
                    <h3>Member 3</h3>
                    <p>Role: UI/UX Designer</p>
                </div>
                <div className='col-3'>
                    <img src='media/images/comingsoon.avif' alt='Team Member 4' style={{ width: '100%', borderRadius:"9%" }} />
                    <h3>Member 4</h3>
                    <p>Role: QA Tester/Project Manager</p>
                </div>
                </div>
            </div>
    );
}

export default Team;