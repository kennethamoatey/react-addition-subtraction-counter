import Counter from './Components/Counter.jsx'
import ClassCounter from './Components/ClassCounter.jsx'

import './App.css';


const App=()=>{
  return <div className="container">
            
              
              <div className="body">
                  <div className="row">
                    <h1  className="col-md-12 topic">REACT COUNTER</h1>
                  </div>
              
              
                <Counter/>
                < ClassCounter />
                
            
              </div>
              
            </div>
          
};
export default App;
