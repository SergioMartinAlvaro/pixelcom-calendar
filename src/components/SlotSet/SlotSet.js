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
        this.hideCar = this.hideCar.bind(this);
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
            <div>
                <h1>{slot.startTime}</h1>
                <h2>{slot.endTime}</h2>
                <h2>{slot.usersAvailable}</h2>
            </div>
        )
    }

    showCar(e) {
        if (e.target.children[0]) {
            var isDisplayed = Array.from(e.target.children[0].classList).filter(x => x == "DisplayImage");
            if (isDisplayed.length > 0) {
                e.target.children[0].classList.remove("DisplayImage")
            } else {
                e.target.children[0].classList.add("DisplayImage")
            }
        }
    }

    hideCar(e) {
        var isDisplayed = Array.from(e.target.classList).filter(x => x == "DisplayImage");
        if (isDisplayed.length > 0) {
            e.target.classList.remove("DisplayImage")
        } else {
            e.target.classList.add("DisplayImage")
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
                        <div className="col-xs-1 col-md-5 col-lg-3 col-sm-5 offset-lg-1 offset-xs-1 offset-md-1 offset-sm-1 SlotPoint" onClick={this.showCar}>
                            <div className="DataSlot" onClick={this.showCar}>
                                Hora:
                            </div>
                            <img className="CarImage" src={carImage} onClick={this.hideCar} alt="background-kart-image" />

                        </div>
                        <div className="col-xs-5 col-md-5 col-lg-3 col-sm-5 offset-lg-1 offset-xs-1 offset-md-1 offset-sm-1 SlotPoint" onClick={this.showCar}>
                            <img className="CarImage" src={carImage} onClick={this.hideCar} alt="background-kart-image" />
                        </div>
                        <div className="col-xs-5 col-md-5 col-lg-3 col-sm-5 offset-lg-1 offset-xs-1 offset-md-1 offset-sm-1 SlotPoint" onClick={this.showCar}>
                            <img className="CarImage" src={carImage} onClick={this.hideCar} alt="background-kart-image" />
                        </div>
                        <div className="col-xs-5 col-md-5 col-lg-3 col-sm-5 offset-lg-1 offset-xs-1 offset-md-1 offset-sm-1 SlotPoint" onClick={this.showCar}>
                            <img className="CarImage" src={carImage} onClick={this.hideCar} alt="background-kart-image" />
                        </div>
                        <div className="col-xs-5 col-md-5 col-lg-3 col-sm-5 offset-xs-1 offset-lg-1 offset-md-1 offset-sm-1 SlotPoint" onClick={this.showCar}>
                            <img className="CarImage" src={carImage} onClick={this.hideCar} alt="background-kart-image" />
                        </div>
                        <div className="col-xs-5 col-md-5 col-lg-3 col-sm-5 offset-xs-1 offset-lg-1 offset-md-1 offset-sm-1 SlotPoint" onClick={this.showCar}>
                            <img className="CarImage" src={carImage} onClick={this.hideCar} alt="background-kart-image" />
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            {this.state.slots.length != 0 ?
                                this.writeSlots() : ""
                            }
                        </div>
                    </div>
                </div>

            </div>
        )


    }
}

export default SlotSet;