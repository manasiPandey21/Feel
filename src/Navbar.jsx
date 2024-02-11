import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [isGovernmentProgramsOpen, setIsGovernmentProgramsOpen] = useState(false);

    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setUsername(user);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };

    const handleGovernmentProgramsToggle = () => {
        setIsGovernmentProgramsOpen(!isGovernmentProgramsOpen);
    };

    return (
        <nav className='main-nav navbar navbar-expand navbar-light bg-light fixed-top shadow-sm py-1 '>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="icon_feel.png" alt="" width="74" height="74" className="d-inline-block align-text-center" />
                    <span className='fw-500 fs-1 align-items-center fw-bold'>  Feel</span>
                </a>
                <div className="menu-link">
                    <ul>
                        <li>
                            <a href='#' className="rounded-rectangular-link text-decoration-none" onClick={handleGovernmentProgramsToggle}>
                                Government Programs
                            </a>
                            {isGovernmentProgramsOpen && (
                                <ul className="submenu">
                                    <li><a href='https://vikaspedia.in/social-welfare/women-and-child-development/women-development-1/one-stop-centre-scheme'className=" text-decoration-none" >One Stop Centre Scheme</a></li>
                                    <li><a href='https://socialjustice.gov.in/schemes/42'className=" text-decoration-none">NAPDDR</a></li>
                                    <li><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6425797/'className=" text-decoration-none">Mental Health Care Act</a></li>
                                    <li><a href='https://main.mohfw.gov.in/?q=Major-Programmes/non-communicable-diseases-injury-trauma/National-Mental-Health-Programme-NMHP'className=" text-decoration-none">NATIONAL MENTAL HEALTH PROGRAMME (NMHP)</a></li>
                                    <li><a href='https://icallhelpline.org/what-is-icall/'className=" text-decoration-none">iCall</a></li>

                                </ul>
                            )}
                        </li>
                        <li>
                            <a href='./counsellor' className="rounded-rectangular-link text-decoration-none">Counsellors</a>
                        </li>
                        <li>
                            <a href='./about' className="rounded-rectangular-link text-decoration-none">About</a>
                        </li>
                        <li>
                            <a href='./contact' className="rounded-rectangular-link text-decoration-none">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
