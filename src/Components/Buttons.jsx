import React from "react";

const Buttons=(props)=>{
    return<div className="col-md-6">
        <button onClick={props.buttonClick}>
        {props.text}
        </button>
    </div>
}
export default Buttons;