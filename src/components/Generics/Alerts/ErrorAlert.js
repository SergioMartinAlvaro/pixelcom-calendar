import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './SuccessAlert.css';

/* This message shows an alert if occurs a failed action, it has a message property passed
as parameter */

const ErrorAlert = (props) => {

    // Hide alert message on action 
    const hideAlert = () => {
        if(props.closeEmptyMessage) {
            props.closeEmptyMessage(false);
        } else {
            document.getElementById("TransactionAlert").hidden = "true"
        }
    }

    return <div>
        <div className="alert alert-danger alert-dismissible fade show TransactionAlert" id="TransactionAlert" role="alert">
            {props.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={hideAlert}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>

}

export default ErrorAlert;