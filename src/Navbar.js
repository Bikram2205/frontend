import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom"
            style={{ backgroundColor: '#FFF' }}>

            <div class="container P-2">
                <a class="navbar-brand" href="#">
                    <img src="https://via.placeholder.com/150" alt="Logo"
                        style={{ width: '25%' }} />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Project">Project</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Contuct">Contuct</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/About">About Us</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            </nav >
    );
}

export default Navbar;