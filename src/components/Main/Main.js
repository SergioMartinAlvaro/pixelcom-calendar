import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from '../DatePicker/DatePicker';
import SlotSet from '../SlotSet/SlotSet';

/* This component contains DatePicker and SlotSet to make a unique view */

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    /* Receives the date from child component to pass it to SlotSet Component */

    getChildDate = (date) => {
        this.setState({
            date: date
        });
    }

    render() {
        return (
            <div>
                <DatePicker date={this.state.date} getChildDate={this.getChildDate} />
                <SlotSet date={this.state.date} />
            </div>
        )


    }
}

export default Main;
