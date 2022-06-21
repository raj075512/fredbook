import React from "react";
import { Avatar } from "@material-ui/core";

import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import Old_members from "./Old_members";
import "./leftslidebar.css";

import { useState, useEffect } from "react";
import db from "./firebase";

function Left() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
     
    <div className="left" id="schrolling">
      <div class="force-overflow">
        
        <div className="header">
          <div className="left_header">
            <Avatar src="" />
          </div>
          <div className="right_header">
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="search_box">
          <div className="input_text">
            <div className="searchIcon">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </div>

            <input type="text" placeholder="Search or Start new chat" />
          </div>
        </div>
        <div className="old_memberss">
          <div className="old_member_column">
            <Old_members Add_new_chat />
            {rooms.map((rooms) => {
              return (
                <Old_members
                  key={rooms.id}
                  id={rooms.id}
                  name={rooms.data.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
