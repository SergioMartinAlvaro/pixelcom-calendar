import React, { useState, Component, callbackToParent } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './SlotSet.css';
import carImage from '../../assets/images/redcar.jfif';

class SlotSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            slots: []
        }
        this.showCar = this.showCar.bind(this);
    }

    writeSlots() {
        return (
            this.state.slots.map(slot =>
                this.applySlotsDesign(slot)
            )
        )
    }

    applySlotsDesign(slot) {
        return (
            <div className="col-xs-1 col-md-5 col-lg-3 col-sm-5 offset-lg-1 offset-xs-1 offset-md-1 offset-sm-1 SlotPoint">
                <img className="CarImage" src={carImage} alt="background-kart-image" />
                <div className="DataSlot">
                    <p>Inicio: {slot.startTime}</p>
                    <p>Final: {slot.endTime}</p>
                    <p>Usuarios: {slot.usersAvailable}</p>
                    <div className="RentButton" onClick={this.showCar}>
                        <button>Reservar</button>
                    </div>
                </div>
            </div>
        )
    }

    showCar(e) {
        var image = e.target.parentElement.parentElement.previousElementSibling;

        if (image) {
            var isDisplayed = Array.from(image.classList).filter(x => x == "DisplayImage");
            if (isDisplayed.length > 0) {
              //  e.target.children[1].classList.remove("SetDataSlotOnActive");
                image.classList.remove("DisplayImage");
                e.target.textContent = "Reservar"

            } else {
             //   e.target.children[1].classList.add("SetDataSlotOnActive");
                image.classList.add("DisplayImage");
                e.target.textContent = "Cancelar Reserva"
            }
        }
    }


    componentWillReceiveProps(nextProps) {
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
                        slots: result.data
                    });
                    this.state.slots.map(x => console.log(x));
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
            <div>
                <div className="Meta">
                    <h1>Elige una hora</h1>
                    <div className="MetaMosaic">
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                            {this.state.slots.length != 0 ?
                                this.writeSlots() : ""
                            }
                        </div>
                    
                </div>
            </div>
        )


    }
}

export default SlotSet;