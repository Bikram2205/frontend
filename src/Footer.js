import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: 'rgb(230 230 230)' }}>
            <div className='container border-bottom'>
                <div className='row pt-5 mb-2'>
                    <div className='col'>
                        <p>© 2025 <strong>Bikram</strong>|Web Developer. <br /> Made with Based in India</p>
                    </div>
                    <div className='col'>
                        <p><b>Company</b></p>
                        <a href='' style={{ color: 'black',textDecorationLine:"none"}}>About us</a>
                    </div>
                    <div className='col'>
                        <p><b>Support</b></p>
                        <a href='' style={{ color: 'black', textDecorationLine:"none"}}>Contuct</a>
                        <br />
                        <a href='' style={{ color: 'black', textDecorationLine:"none"}}>Support</a>
                        <br />
                        <a href='' style={{ color: 'black', textDecorationLine:"none"}}>Privacy Policy</a>
                    </div>
                    <div className='col'>
                        <p><b>feedback</b></p>
                        <a href='' style={{ color: 'black', textDecorationLine:"none"}}>feedback</a>
                    </div>
                </div>
                <br /> <br />
                <p className='text-center'>
                    <a href="https://facebook.com/bikra7781" target="_blank" style={{margin: '0 7px', color: 'black'}}>
                        <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/Bikram2205" target="_blank" style={{margin: '0 7px', color: 'black'}}>
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://linkedin.com/in/BIKRAM BERA" target="_blank" style={{margin: '0 7px', color: 'black'}}>
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="https://instagram.com/bikra7781" target="_blank" style={{margin: '0 7px', color: 'black'}}>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>

                </p>
            </div>
        </footer>
    );
}

export default Footer;