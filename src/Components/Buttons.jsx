import React,{Component} from "react";

class Buttons extends Component{
    render(){
        return<div className="">
        <button onClick={this.props.buttonClick} style={{textAlign:"center"}}>
        {this.props.text}
        </button>
    </div>
}

    }
    
export default Buttons;