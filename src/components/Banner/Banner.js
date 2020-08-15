import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './Banner.css';
import backgroundImage from '../../assets/images/banner-back.jpg';

/* This component contains banner information of booking section */

class Banner extends Component {

    constructor(props) {
        super(props);
        this.scrollToCalendar = this.scrollToCalendar.bind(this);
    }
    
    // Scrolls to next section
    scrollToCalendar() {
        var elmnt = document.getElementById("ReactCalendar");
        elmnt.scrollIntoView({behavior: "smooth"});
    }

    render() {

        return (
            <section className="BackgroundBanner">
                <img className="BackgroundBannerImage" src={backgroundImage} alt="background-kart" />
                <div className="BackgroundOpacity">
                </div>
                <div className="BannerRow">
                    <h1 className="CenteredTitle ThinText">Bienvenido al sistema de reservas</h1>
                    <button className="CenteredButton" onClick={this.scrollToCalendar}>Realizar reserva</button>
                </div>
            </section>
        )
    }
}

export default Banner;