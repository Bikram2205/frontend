import React from 'react';

function Body() {
    return (  
        <div className="container mt-5 p-5 mb-5">   
            <div className="row text-center">
                <div className='col-6'>
                    <img src='media/images/bkram2.png' alt='image'/>
                </div>
                <div className='col-6'>
                    <h1><b>Hello, I'm Bikram Bera</b></h1>
                    <h5> AND I'm a <b>Frontend Developer</b></h5>
                </div>
                    <div style={{width:"100%", flexDirection:"row", gap:"20%", display:"flex"}}>
                    <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"15%",  margin:"0 auto"}}>Project</button>  
                    <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"15%",  margin:"0 auto"}}>Profile</button>  
                    <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"15%",  margin:"0 auto"}}>About Us</button>
                    </div>
                </div>
        </div>
    );
}

export default Body;