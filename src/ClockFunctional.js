import React, { useState, useEffect } from 'react';
import './ClockFunctional.css'

const ClockFunctional = (props) => {

    console.log('Initialization lifeCycle: setting state [date, setDate]');

    const [date, setDate] = useState(new Date());


    const tick = () => setDate(new Date());

    useEffect( ()=> {
        let timerID = setInterval(
            () => {tick()},
            1000
        );
        console.log('Mounting && Updation lifeCyckle: componentDidMount() && componentDidUpdate');

        return(() => {
            clearInterval(timerID)

            console.log('Unmounting lifeCyckle: componentWillUnmount()');
        })
    });

    return(
            <div className="clock">
                <h4>Time: {date.toLocaleTimeString()}
                  <span onClick={props.toogleClockMethod}>X</span></h4>
            </div>
    )
    
}

export default ClockFunctional