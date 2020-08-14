import React, { useState, Component, callbackToParent } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './TransactionForm.css';
import imageForm from '../../assets/images/Winner.jpg';

class TransactionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasValues: 0
        }
    }

    openActionBanner() {

    }

    render() {
        return (
            <div>
                <div className="container" id="TransactionFormContainer">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10 offset-md-3 offset-lg-3 offset-sm-1 offset-xs-1">
                            <h1 className="ThinText">¡Encendemos <span className="RedText BoldText">motores</span>, ya casi está listo!</h1>
                            <form id="TransactionForm" className="TransactionForm">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce tu correo electrónico" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">¿Algo que quieras contarnos?</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Queremos champán en la meta, fuegos artificiales..." />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="GradientImage"></div>
                <img src={imageForm} alt="winner-image" className="FormBannerImage" />

            </div>
        )


    }
}

export default TransactionForm;