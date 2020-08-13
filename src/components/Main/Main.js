import React, { useState, Component, callbackToParent } from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from '../DatePicker/DatePicker';
import SlotSet from '../SlotSet/SlotSet';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    render() {
        return (
            <div>
                <DatePicker />
                <SlotSet />
            </div>
        )


    }
}

export default Main;
