import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './Banner.css';
import backgroundImage from '../../assets/images/banner-back.jpg';

class Banner extends Component {
    render() {

        return (
            <section className="BackgroundBanner">
                <img className="BackgroundBannerImage" src={backgroundImage} alt="background-kart-image" />
                <div className="BackgroundOpacity">
                </div>
                <div className="BannerRow">
                    <h1 className="CenteredTitle">Bienvenido al sistema de reservas</h1>
                    <button className="CenteredButton">Realizar reserva</button>
                </div>
            </section>
        )
    }
}

export default Banner;