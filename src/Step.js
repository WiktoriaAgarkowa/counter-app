import React from 'react';

function Step (props) {

    console.log(props)
    
    return (
        <div>
            <input onChange={(e) => props.changeImputValue(e)} type="number" min="2" placeholder="1" />

            <button onClick={()=> {props.addStepMethod('add X');}}>Add {props.inputStep} </button>
        </div>
    );
}

export default Step;