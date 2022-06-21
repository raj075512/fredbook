import React from 'react'
import "./listbar.css";
import GitHubIcon from '@material-ui/icons/GitHub';
// import DarkModeIcon from '@material-ui/icons/DarkMode';
// import LightModeIcon from '@material-ui/icons/LightMode';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import AddLocationIcon from '@material-ui/icons/AddLocation';


function listbar() {
  return (
     
       <div className="lists">
           <div className="all_items">
                   <ul className='list1'>
                       <li className="list">
                          <AddLocationIcon/>
                       </li>
                       <li className="list">
                          
                         <GitHubIcon/>
                       </li>
                       <li className="list">
                          <LinkedInIcon/>
                       </li>
                       <li className="list">
                       <SettingsIcon/>
                       </li>
                       <li className="list">
                              
                        <HelpIcon/>
                       </li>
                   </ul>
            
                   
                   
              
           </div>
          
                  
                   

        </div>
                   
       
     

  )
}

export default listbar;