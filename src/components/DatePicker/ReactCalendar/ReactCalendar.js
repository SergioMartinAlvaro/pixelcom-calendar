import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "bootstrap/dist/css/bootstrap.css";
import './ReactCalendar.css';

/* Component that displays a Calendar */

const ReactCalendar = (props) => {

    // On date change sets the new date to component state
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        props.getDateFn(date.getFullYear() + "-" + ((date.getMonth()*1) + 1) + "-" + date.getDate());
        setDate(date);
    }

    return <div>
        <div class="container">
            <div class="row" style={{ justifyContent: "left" }}>
                <div class="col-md-6 col-lg-5 col-sm-12">
                    <Calendar onClickDay={onChange} defaultValue={"2020-08-12"} value={date} />
                </div>
                {date.get}
                <div className="TopSeparation LeftSeparation col-md-5 col-lg-6 col-sm-12">
                    <h1 className="ThinText">¿Preparado para <span className="RedText BoldText">rodar</span>?</h1><br />
                    <p>¡En <span className="RedText BoldText">PixelCom</span> te lo ponemos fácil!</p>
                    <p className="LineSeparation">¿Notas ya el calor del asfalto? ¿El rugido del motor bajo tus pies? ¿La adrenalina de la cuenta atrás?
                    Estás a un par de clicks de tener tu puesto en el podio, <span className="RedText BoldText">haz click en una fecha</span>, comprueba la ocupación de esta y <span className="RedText BoldText">selecciona un hueco libre en la parrilla de salida.</span></p>
                </div>
            </div>
        </div>

    </div>
}

export default ReactCalendar;