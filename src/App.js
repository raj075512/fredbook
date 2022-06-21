import React from 'react';
import "./App.css";
import Middle_slidebar from "./Middle_slidebar";
import Left_slidebar from "./Left";
import Right_slidebar from "./right_slidebar";
import Listbar from './listbar';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

import Login from './Login';
// import { useStoreValue } from './store';



function App() {
  const data ="jb";
  
  return (

    <Router>
        <Switch>
     {
      !data ?(<Login/>):
      (
       
        <div className="main_body" id="main_body" >
        
      <Listbar/>
          <div className="main_container">
          <div className="blurrr" style={{top:'0rem' ,right:'0rem'}}>  </div>
       <div className="blurrr2" style={{top:'60%' ,left:'0px'}}></div>

                 <Left_slidebar/>
                  <Route  exact path="/">
                       <Middle_slidebar/>
                  </Route>
                  <Route path="/rooms/:roomId">
                       <Middle_slidebar/> 
                   </Route>
                
                
                 <Right_slidebar/>

          </div>
     
       
        </div>
      )
     }
    
     </Switch>
   </Router>
  )
}

export default App;
//font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
// 