import React, {useState} from "react";
import Buttons from './Buttons'



const Counter=()=>{

    let [number, setNumber]= useState(0);

    const increaseClick=()=>{
    setNumber(number+=1);
}

const decreaseClick=()=>{
    setNumber(number-=1)
}

    return <div className='' style={{textAlign:"center"}}>
                <div className='row'>
                    <div className="col-md-12">
                    <h1>{number}</h1>
                    </div>
                </div >
                
                <div className="row" style={{height:"8px"}}>
                    <div className="col-md-6">
                    
                        <Buttons text="+" buttonClick={increaseClick}/>
                    </div>
                    <div className="col-md-6">
                    
                        <Buttons text="-" buttonClick={decreaseClick}/>
                    
                    
                    </div>
                
                </div>
                
        
            </div>
}
export default Counter;