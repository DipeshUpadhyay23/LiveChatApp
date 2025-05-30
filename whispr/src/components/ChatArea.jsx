import { IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function ChatArea({ props }) {
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{props.name}</p>
          <p className="con-timeStamp">{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="messages-container">Messages container</div>
      <div className="text-input-area">
        <input className="search-box" placeholder="Type a message" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}
