import { Avatar, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Middle_slidebar.css";
// import firebase from "firebase";
// import firebase from "firebase";
// import "firebase/compat/auth";
// import 'firebase/compat/app'
// import 'firebase/compat/firestore'
// import 'firebase/firestore';
import firebase from "firebase/compat/app";

import ChatSharpIcon from "@material-ui/icons/ChatSharp";
import CameraSharpIcon from "@material-ui/icons/CameraSharp";
import VoiceChatIcon from "@material-ui/icons/VoiceChat";
import MoreVertSharpIcon from "@material-ui/icons/MoreVertSharp";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
// import SendIcon from '@material-ui/icons/Send';
import db from "./firebase";
// import { SettingsInputAntenna } from '@material-ui/icons';
// import CollectionsIcon from '@material-ui/icons/Collections';

// import GitHubIcon from '@material-ui/icons/GitHub';
// import { AttachFile, EmojiEmotions } from '@material-ui/icons';

function Middle_slidebar() {
  const { roomId } = useParams();
  const [input, setInput] = useState(" ");
  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState("");

  console.log(roomId);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data().name);
        });

      db.collection("rooms")
        .doc(roomId)
        .collection("message")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);
  
  const SendMessage = (e) => {
    e.preventDefault();
    if (input === " ") {
      alert("enter the message..");
    }

    db.collection("rooms").doc(roomId).collection("message").add({
      name: "ashutosh",
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput(" ");
  };
  return (
    <div className="container">
      <div className="all_content">
        <div className="header">
          <div className="middle_avatar">
            <IconButton>
              <Avatar />
            </IconButton>

            <div className="middle_header_chat_info">
              <h4>{roomName}</h4>
              <p> last scene</p>
            </div>
          </div>
          <div className="middle_header_right_side">
            <IconButton>
              <VoiceChatIcon />
            </IconButton>

            <IconButton>
              <CameraSharpIcon />
            </IconButton>
            <IconButton>
              <ChatSharpIcon />
            </IconButton>
            <IconButton>
              <MoreVertSharpIcon />
            </IconButton>
          </div>
        </div>
        <div className="viewchat " id="schrolling2">
          <div className="force-overflow">
            {messages.map((message) => (
              <p className="chat_send chat_recieve">
                {message.message}
                <span className="chat_time">
                  {new Date(
                    message.timestamp?.seconds * 1000
                  ).toLocaleTimeString()}
                </span>
              </p>
            ))}
          </div>
        </div>

        <div className="sendchat">
          <EmojiEmotionsIcon />
          <AttachFileIcon />

          <form onSubmit={SendMessage}>
            <input
              type="text"
              placeholder="Type a message"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />{" "}
            <input type="submit" />
          </form>
          <MicIcon />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Middle_slidebar;
