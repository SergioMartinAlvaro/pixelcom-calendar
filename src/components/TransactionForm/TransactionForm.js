import React, { useState, Component, callbackToParent } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './TransactionForm.css';
import imageForm from '../../assets/images/Winner.jpg';
import * as emailjs from 'emailjs-com';
import SuccessAlert from '../Generics/Alerts/SuccessAlert';
import ReactDOM from 'react-dom';

class TransactionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasValues: 0,
            email: "",
            message: "Se ha registrado su petición correctamente, ¡nos vemos sobre el asfalto!",
            sentOk: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModalForm = this.closeModalForm.bind(this);
    }

    closeModalForm = () => {
       // setTimeout(() => {return <TransactionForm />}, 2000)
       ReactDOM.unmountComponentAtNode(document.getElementById("TransactionActive"));
       document.getElementById("TransactionActive").classList.remove("AcceptTransactionSpaceTransformation");
       document.getElementById("TransactionActive").classList.add("AcceptTransactionSpaceTransformationSmall");
       var node = document.createElement("button");
       var textnode = document.createTextNode("Confirmar Reserva");
       node.appendChild(textnode);
       node.onclick = this.props.openModalForm;
       node.className = "AcceptTransactionButton";
       document.getElementById("TransactionActive").appendChild(node);
       
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };


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
                    sentOK: true
                })
            )
            .catch(
                this.setState({
                    email: "",
                    hasValues: 0,
                    sentOK: false
                })
            );

            this.setState({
                email: "",
                hasValues: 0,
                sentOK: true
            })
    }
    
    shouldComponentUpdate() {
        alert(this.state.sentOK)
        return true;
    }

    render() {
        return (
            <div id="TransactionModalForm">
                <div className="container" id="TransactionFormContainer">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10 offset-md-3 offset-lg-3 offset-sm-1 offset-xs-1">
                            {this.state.sentOK ? <SuccessAlert message={this.state.message} /> : ""}
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-10 col-xs-10 offset-md-3 offset-lg-3 offset-sm-1 offset-xs-1">
                            <h1 className="ThinText">¡Encendemos <span className="RedText BoldText">motores</span>, ya casi está listo!</h1>
                            <form onSubmit={this.handleSubmit.bind(this)} id="TransactionForm" className="TransactionForm">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Correo Electrónico</label>
                                    <input type="email" onChange={this.handleChange.bind(this)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce tu correo electrónico" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">¿Algo que quieras contarnos?</label>
                                    <input type="password" onChange={this.showAlert} className="form-control" id="exampleInputPassword1" placeholder="Queremos champán en la meta, fuegos artificiales..." />
                                </div>
                                <button type="submit" className="btn btn-primary BtnSubmit">Confirmar</button>
                                <p onClick={this.closeModalForm}>Cancelar</p>
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