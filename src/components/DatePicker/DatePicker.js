import React, { useState, Component, callbackToParent } from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import "bootstrap/dist/css/bootstrap.css";
import './DatePicker.css';
import ReactCalendar from './ReactCalendar/ReactCalendar';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    getChildDate = (date) => {
        this.setState({
            date: date
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            date: nextProps.date
        });
        alert("Hello" + this.state.date)
    }

    render() {
        return (
            <div>
                <ReactCalendar date={this.state.date} getDateFn={this.getChildDate} />
                <h1>{"Horas disponibles el: " + this.state.date}</h1>
            </div>
        )


    }
}

export default DatePicker;
