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

    componentWillReceiveProps(nextProps) {
        this.setState({
            date: nextProps.date
        });
    }

    render() {
        return (
            <div>
                <ReactCalendar date={this.state.date} getDateFn={this.props.getChildDate} />
            </div>
        )


    }
}

export default DatePicker;
