import React from 'react';
import "./Old_members.css";
import "./leftslidebar.css";
import { Avatar } from '@material-ui/core';
import db from './firebase';
import {Link} from "react-router-dom";

function Old_members({name,id,Add_new_chat}) {

  const CreateChat=()=>
  {
    const room = prompt("enter new group .");
    
    if(room)
    {
          db.collection("rooms").add({
            name:room
          })
    }
  }
  return(
  !Add_new_chat ?(
    //for link of exact unique id of rooms //
  <Link to={`/rooms/${id}`} > 

    <div className="old_member_column">
    <div className="old_members">
    <Avatar/>
    <div className="details">
      <h4>{name}</h4>
       <p> messages </p>

    </div>
   </div>
   </div>
    </Link>
  ):
  (
    <div className="old_member_column" onClick={CreateChat} >
        <div className="add_new">
                   <div className="text">
                       
                      <h2>Add New One</h2>
                      </div>
                 </div>
    </div>
  )
  )
}

export default Old_members;