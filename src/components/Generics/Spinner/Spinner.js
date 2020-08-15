import React, { useState, Component, callbackToParent } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './Spinner.css';
import logoSmall from '../../../assets/images/logoSmall.png'

const Spinner = (props) => {

    return (
        <div className="SpinnerContainer" id="SpinnerContainer">
            <div className="SpinnerContainerImage">
                <img src={logoSmall} className="highlight"></img>
            </div>
        </div>
    )

}

export default Spinner;