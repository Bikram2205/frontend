import React from 'react';


function Contuctpage() {
    return (
        <div className='container'>
            <h1 className='text-center mt-3'>Contact</h1>
            <a href="mailto:bikrambera88@gmail.com" style={{color:"black"}}>
                <i class="fa fa-envelope fs-5" aria-hidden="true">Email</i>
            </a> <br /> <br />
            <a href="https://wa.me/919800030242" target="_blank" style={{color:"black"}}>
                <i class="fa fa-whatsapp fs-5" aria-hidden="true">Whatsapp</i>
            </a> <br /> <br />
            <a href="tel:+919800030242" style={{color:"black"}}>
                <i class="fa fa-mobile fs-4" aria-hidden="true">Phone</i>
            </a>
        </div>
    );
}

export default Contuctpage;