import React, { Component } from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel'
// import Clock from './Clock'
import ClockFunctional from './ClockFunctional'
import Step from './Step'

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            inputValue: 1,

        };
    }

    setNumber = (e) => {
        this.setState({ inputValue: e.target.value })
    }


    changeValue = (action) => {


        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;
            let number = Number(this.state.inputValue)

            if (action === 'add') {
                currentCounterValue += 1;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else if (action === 'reset') {
                currentCounterValue = 0;
            } else {
                currentCounterValue += number;
            }

            return (
                {
                    counterValue:
                        currentCounterValue
                }
            );
        });

    }




    toogleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            });
        })
    }

    render() {


        let clockElement = '';
        if (this.state.showClock) {
            // clockElement = <Clock toogleClockMethod={this.toogleClock}/>
            clockElement = <ClockFunctional toogleClockMethod={this.toogleClock} />
        } else {
            clockElement = <span onClick={this.toogleClock} className="show-clock">show clock</span>;
        }

        return (
            <div className="counter">
    
                    Counter:
                    <Display displayValue={this.state.counterValue} />

                    <ButtonsPanel buttonMethod={this.changeValue} inputStep={this.state.inputValue} />

                    Krok:
                    <Step inputStep={this.state.inputValue} changeImputValue={this.setNumber} addStepMethod={this.changeValue} />


                    {clockElement}

            </div>
        )
    }
}


// function Counter (props) {

//     let randomNumber = Math.floor(Math.random() * (108-1+1) +1)

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>

//         </div>
//     )
// }

export default Counter;