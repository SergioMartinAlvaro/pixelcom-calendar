import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/images/logo.png";
import './Navbar.css';
//import logo from '../../assets/images/logo.png.png';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <figure className="FigureLogo" id="logo">
                        <a class="navbar-brand" href="#">
                            <img src={logo} className="LogoImage" alt="logo-pixel" title="logo de la compañia" />
                        </a>
                    </figure>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Karting</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Motorsport</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Reservas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Marcadores</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Empresa</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contacto</a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;