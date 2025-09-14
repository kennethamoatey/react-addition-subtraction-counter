import React, {Component} from "react";
import Buttons from './Buttons';



class Counter extends Component {

     constructor() {
            super();

            this.state={
                number:0,
            };
        }

         DecreaseClick=()=>{
        this.setState({number:this.state.number-1})
         }
            IncreaseClick=()=>{
        this.setState({number:this.state.number+1});
         }


    render(){
       
           
        return <div className='' style={{textAlign:"center" }}>

             <div className='row'>
                        <div className="col-md-12">
                        <h1>{this.state.number}</h1>
                        </div>
                   
                    

                       
                    </div >
                    <div className="row" >
        
                            <div className="col-md-6">    
                                <Buttons text="Increase" buttonClick={this.IncreaseClick}/>
                            
                            </div>
                            <div className="col-md-6">
                                <Buttons text="Decrease" buttonClick={this.DecreaseClick}/>
                            </div>
                        
                        
                        
                    </div>    
                </div>    
                
    }
}
export default Counter;