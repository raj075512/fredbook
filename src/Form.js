import React  from 'react';
import { Link } from 'react-router-dom';
import "./Login_container.css";
function Form() {
  return (
    
       
            <div className="login_form">
                <div className="main_header">
                <h2>Sign up</h2>
                </div>
                <form  className='form' >
                  <div className="first">
                  <input type="text" placeholder='first name'className='infoinput'name="firstname"  />
                 <input type="text" placeholder='last name'className='infoinput'name="secondname" />
                  </div>
               
                  <input type="text" placeholder='choose user name' className="infoinput"/>
                  <input type="email" placeholder='email' className="infoinput"/>
                  <input type="number " placeholder='password' className="infoinput"/>
                
                    
                    <div className="button_container">
                    <span>Already have an Account. <link to='#' classname="login_href" > Login! </link> </span>
                       <button className='button1' type="submit">Sign-up</button>
                 </div>
                </form>
            </div>
        
  )
}

export default Form;