import React, { useState, Component } from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import "bootstrap/dist/css/bootstrap.css";
import './DatePicker.css';

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }

    return <div>
        <div class="container">
            <div class="row" style={{justifyContent: "left"}}>
                <div class="col-md-6 col-lg-5 col-sm-12">
                    <Calendar onChange={onChange} value={date} />
                </div>
                <div class="col-md-6 col-lg-7 col-sm-12">
                    <h1>¡Preparado para rodartr!</h1>
                </div>
            </div>
        </div>

    </div>
}

class DatePicker extends Component {

    render() {
        return (
            <div>
                <ReactCalendar />
            </div>
        )


    }
}

export default DatePicker;
