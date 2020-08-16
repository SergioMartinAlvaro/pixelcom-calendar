import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/images/logo.png";
import './Navbar.css';

/* This component contains the navbar of the application */

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <figure className="FigureLogo NavButton" id="logo">
                        <button className="navbar-brand NavButton">
                            <img src={logo} className="LogoImage" alt="logo-pixel" title="logo de la compañia" />
                        </button>
                    </figure>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <button className="nav-link NavButton" href="#">Inicio <span className="sr-only">(current)</span></button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link NavButton" href="#">Karting</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link NavButton" href="#">Motorsport</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link NavButton" href="#">Reservas</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link NavButton" href="#">Marcadores</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link NavButton" href="#">Empresa</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link NavButton" href="#">Contacto</button>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;