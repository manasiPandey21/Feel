import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand navbar-light bg-light fixed-top shadow-sm py-1 '>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="icon_feel.png" alt="" width="74" height="74" className="d-inline-block align-text-center" />
                    <span className='fw-500 fs-1 align-items-center fw-bold'>  Feel</span>
                </a>
                <div className="menu-link">
                    <ul>
                        <li>
                            <a href='#' className="rounded-rectangular-link text-decoration-none">Government Programs</a>
                        </li>
                        <li>
                            <a href='#' className="rounded-rectangular-link text-decoration-none">About</a>
                        </li>
                        <li>
                            <a href='#' className="rounded-rectangular-link text-decoration-none">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='collapse navbar-collapse p-5'>
                <a href="/login" className='fs-3 px-3 text-decoration-none text-dark fw-bold '>Login</a>
                <a href="/logout" className='fs-3 px-3 text-decoration-none text-dark fw-bold '>Logout</a>
            </div>
        </nav>
    )
}

export default Navbar;
