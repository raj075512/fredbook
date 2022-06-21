import React from 'react';
import Form from './Form';
import "./Login_container.css";
// import Logo from "./Texting-bro.png";



function Login_container() {
  return (
    <div className="login_container">
               <div className="leftt">
                  <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3DbT2WD_FsXOAuzGDxUK0FcyD2idYdtnLQ&usqp=CAU" alt="image"  />
                  <h2>FredBook</h2>
               </div>
               <div className="rightt">
                 
                <Form/>
               </div>
    </div>
  )
}




export default Login_container ;