import React, { useState, Component, callbackToParent } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './SuccessAlert.css';

const SuccessAlert = (props) => {

    const hideAlert = () => {
        document.getElementById("TransactionAlert").hidden = "true"
    }

    return <div>
        <div className="alert alert-warning alert-dismissible fade show TransactionAlert" id="TransactionAlert" role="alert">
            {props.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={hideAlert}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>

}

export default SuccessAlert;