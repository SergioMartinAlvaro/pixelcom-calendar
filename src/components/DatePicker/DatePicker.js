import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './DatePicker.css';
import ReactCalendar from './ReactCalendar/ReactCalendar';

/* This component displays the Calendar view including Calendar and a short text */

class DatePicker extends Component {

    /* CONSTRUCTOR */
    
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    /* HOOK FUNCTIONS */

    // Update state.date variable when component receive a new prop
    componentWillReceiveProps(nextProps) {
        this.setState({
            date: nextProps.date
        });
    }

    // Update component when it changes
    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div id="ReactCalendar">
                <ReactCalendar date={this.state.date} getDateFn={this.props.getChildDate} />
            </div>
        )


    }
}

export default DatePicker;
