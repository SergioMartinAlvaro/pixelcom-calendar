import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import './SlotSet.css';
import carImage from '../../assets/images/cocheMetaJPG.JPG';
import Spinner from '../Generics/Spinner/Spinner';
import TransactionForm from '../TransactionForm/TransactionForm';

class SlotSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            slots: [],
            selectedSlots: [],
            isFirstLoad: true,
            isLoading: false,
            emptyResponse: false
        }
        this.showCar = this.showCar.bind(this);
        this.openModalForm = this.openModalForm.bind(this);
    }

    componentWillMount() {
        var newDate = new Date();
        var todayDate = newDate.getFullYear() + "-" + ((newDate.getMonth() * 1) + 1) + "-" + newDate.getDate();
        this.setState({
            date: todayDate
        })
        this.getSlotsFromAPI({ date: todayDate })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isFirstLoad: false,
            date: nextProps.date
        })
        this.getSlotsFromAPI(nextProps);
    }

    /* DOM ACTIONS */

    // Open the form when user clicks in bottom button
    openModalForm() {
        var hasClass = Array.from(document.getElementById("TransactionActive")).filter(x => "AcceptTransactionSpaceTransformationSmall");
        if (hasClass) {
            document.getElementById("TransactionActive").classList.remove("AcceptTransactionSpaceTransformationSmall")
        }
        document.getElementById("TransactionActive").classList.add("AcceptTransactionSpaceTransformation")
        ReactDOM.render(<TransactionForm openModalForm={this.openModalForm} />, document.getElementById('TransactionActive'));
    }

    // Scroll to slots when are displayed
    scrollToRent() {
        var elmnt = document.getElementById("SlotSet");
        elmnt.scrollIntoView({ behavior: "smooth" })
    }

    // Shows and hide bottom bar when slots are selected
    showBottomBar() {
        if (this.state.selectedSlots.length > 0) {
            document.getElementById("TransactionActive").classList.remove("ZeroOpacity");
            document.getElementById("TransactionActive").classList.add("TotalOpacity");
        } else {
            document.getElementById("TransactionActive").classList.remove("TotalOpacity");
            document.getElementById("TransactionActive").classList.add("ZeroOpacity");
        }
    }

    // Shows car image when slot is checked
    showCar(e) {
        var image = e.target.parentElement.parentElement.previousElementSibling;
        if (image) {
            var isDisplayed = Array.from(image.classList).filter(x => x === "DisplayImage");
            if (isDisplayed.length > 0) {
                var selectedSlot = this.state.selectedSlots.filter(x => x === e.target)
                if (selectedSlot) {
                    selectedSlot.map((x, y) => x === e.target ? this.state.selectedSlots.splice(y, 1) : "");
                }
                image.classList.remove("DisplayImage");
                e.target.textContent = "Seleccionar";
            } else {
                this.state.selectedSlots.push(e.target);
                image.classList.add("DisplayImage");
                e.target.textContent = "Cancelar Selección";
            }

            this.showBottomBar();
        }
    }

    // Method that execute the appliSlotsDesign method
    writeSlots() {
        return (
            this.state.slots.map(slot =>
                this.applySlotsDesign(slot)
            )
        )
    }

    // Render slots in slotset space when API call is succesful
    applySlotsDesign(slot) {
        return (
            <div className="col-xs-1 col-md-5 col-lg-3 col-sm-5 offset-lg-1 offset-xs-1 offset-md-1 offset-sm-1 SlotPoint">
                <img className="CarImage" src={carImage} alt="background-kart" />
                <div className="DataSlot">
                    <p className="RedText BolderText"> {slot.startTime.substring(0, slot.startTime.lastIndexOf(":"))} - {slot.endTime.substring(0, slot.endTime.lastIndexOf(":"))}</p>
                    <p className="ThinText">Usuarios: {slot.usersAvailable}</p>
                    <div className="RentButton" onClick={this.showCar}>
                        <button>Seleccionar</button>
                    </div>
                </div>
            </div>
        )
    }

    /* API REQUESTS */

    getSlotsFromAPI(nextProps) {
        this.setState({
            isLoading: true
        });
        fetch("http://test.services.pixeltiming.com:4400/booking/availability?date=" + nextProps.date, {
            headers: new Headers({
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZENvbXBhbnkiOjF9.PRKLjlVvM7QHIiBL4gxz5HRREunU8gpWmw78oycSLaU',
            }),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        slots: result.data,
                        isLoading: false
                    });
                    if (result.data.length === 0) {
                        this.setState({
                            emptyResponse: true
                        })
                    } else {
                        this.setState({
                            emptyResponse: false
                        })
                        this.state.slots.map(x => console.log(x));
                        if (!this.state.isFirstLoad) {
                            this.scrollToRent();
                        }
                    }

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }





    render() {
        return (
            <div id="SlotSet">
                {this.state.isLoading ? <Spinner /> : ""}
                <div className="Meta">
                   {this.state.emptyResponse ? 
                   <h1 className="ThinText">No existen horas para el día <span className="RedText BolderText">{this.state.date}</span></h1>:
                    <h1 className="ThinText"> Elige una hora para el día <span className="RedText BolderText">{this.state.date}</span></h1>} 
                    <div className="MetaMosaic">
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {this.state.slots.length !== 0 ?
                            this.writeSlots() : ""
                        }
                    </div>

                </div>
                <div className="AcceptTransactionSpace ZeroOpacity" id="TransactionActive">
                    <button className="AcceptTransactionButton" id="AcceptTransactionButton" onClick={this.openModalForm}>Confirmar Reserva</button>
                </div>
            </div>
        )


    }
}

export default SlotSet;