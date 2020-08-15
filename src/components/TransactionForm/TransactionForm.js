import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './TransactionForm.css';
import imageForm from '../../assets/images/Winner.jpg';
import * as emailjs from 'emailjs-com';
import SuccessAlert from '../Generics/Alerts/SuccessAlert';
import ReactDOM from 'react-dom';
import ErrorAlert from '../Generics/Alerts/ErrorAlert';

class TransactionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasValues: 0,
            email: "",
            message: "Ya tenemos registrada tu reserva ¡Nos vemos en el asfalto!",
            errorMessage: "Ocurrió un error al registrar la reserva, ¡lo arreglaremos lo antes posible!",
            sentOk: true,
            openAlert: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModalForm = this.closeModalForm.bind(this);
        this.closeEmptyMessage = this.closeEmptyMessage.bind(this);
    }

    /* HOOK METHODS */
    shouldComponentUpdate() {
        return true;
    }

    /* FUNCTIONAL METHODS */

    // Sets name of sender when form changes
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // When user submits the form sends an email to web owner with information about reservation
    handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "gmail",
                "template_RCufOvyE",
                "TransactionForm",
                "user_8okZ4aj5j3GI0zFwFdgJf"
            )
            .then(
                this.setState({
                    email: "",
                    hasValues: 0,
                    sentOK: true,
                    openAlert: true
                })
            )
            .catch(
                this.setState({
                    email: "",
                    hasValues: 0,
                    sentOK: false,
                    openAlert: true
                })
            );
/*
        this.setState({
            email: "",
            hasValues: 0,
            sentOK: true
        })*/
    }

    /* DOM METHODS */

    // Closes the modal form and gets back to SlotSet Component
    closeModalForm = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("TransactionActive"));
        document.getElementById("TransactionActive").classList.remove("AcceptTransactionSpaceTransformation");
        document.getElementById("TransactionActive").classList.add("AcceptTransactionSpaceTransformationSmall");
        var node = document.createElement("button");
        var textnode = document.createTextNode("Confirmar Reserva");
        node.appendChild(textnode);
        node.onclick = this.props.openModalForm;
        node.className = "AcceptTransactionButton";
        setTimeout(() => {
            document.getElementById("TransactionActive").appendChild(node)
        }, 2100)
    }

    closeEmptyMessage = () => {
        this.setState({
            openAlert: false
        })
    }

    render() {
        return (
            <div id="TransactionModalForm">

                <div className="container" id="TransactionFormContainer">
                    <div className="row">
                        {this.state.openAlert ? this.state.sentOk ?
                            <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10 offset-md-3 offset-lg-3 offset-sm-1 offset-xs-1">
                                <SuccessAlert message={this.state.message} closeEmptyMessage={this.closeEmptyMessage} />
                            </div>
                            :
                            <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10 offset-md-3 offset-lg-3 offset-sm-1 offset-xs-1">
                                <ErrorAlert message={this.state.errorMessage} closeEmptyMessage={this.closeEmptyMessage} />
                            </div>
                            : ""}
                        <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10 offset-md-3 offset-lg-3 offset-sm-1 offset-xs-1">
                            <h1 className="ThinText">¡Encendemos <span className="RedText BoldText">motores</span>, ya casi está listo!</h1>
                            <form onSubmit={this.handleSubmit.bind(this)} id="TransactionForm" className="TransactionForm">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Correo Electrónico</label>
                                    <input type="email" onChange={this.handleChange.bind(this)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce tu correo electrónico" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">¿Algo que quieras contarnos?</label>
                                    <input type="text" onChange={this.showAlert} className="form-control" id="exampleInputPassword1" placeholder="Queremos champán en la meta, fuegos artificiales..." />
                                </div>
                                <button type="submit" className="btn btn-primary BtnSubmit">Confirmar</button>
                                <p onClick={this.closeModalForm}>Cancelar</p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="GradientImage"></div>
                <img src={imageForm} alt="winner" className="FormBannerImage" />
            </div>
        )
    }
}

export default TransactionForm;