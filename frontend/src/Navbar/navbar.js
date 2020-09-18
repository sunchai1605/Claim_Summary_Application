import React from 'react';
import '../component/Styles/style.css'
import {Link} from 'react-router-dom';
import { MdHome } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <div className="navbar-header">
                <Link exact to="/" className="navbar-brand">METLIFE</Link>
                <Link className="navbar-brand" id="home" exact to="/"><MdHome/> Home</Link>
                </div>
                <Link className="btn btn-outline-light" exact to="/login">Sign Out</Link>
            </div>
        </nav>
    );
};

export default Navbar;
