import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './Spinner.css';
import logoSmall from '../../../assets/images/logoSmall.png'


/* This component displays an Spinner while loading */

const Spinner = (props) => {

    return (
        <div className="SpinnerContainer" id="SpinnerContainer">
            <div className="SpinnerContainerImage">
                <img src={logoSmall} className="highlight" alt="load-spinner"></img>
            </div>
        </div>
    )

}

export default Spinner;