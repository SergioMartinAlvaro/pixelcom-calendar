import React, { useState, Component, callbackToParent } from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import "bootstrap/dist/css/bootstrap.css";
import './SlotSet.css';

class SlotSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    getChildDate = (date) => {
        alert(date);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            date: nextProps.date
        });
        console.log("Hello" + this.state.date)
    }

    render() {
        return (
            <div>
                <h1>Soy el slot</h1>
            </div>
        )


    }
}

export default SlotSet;