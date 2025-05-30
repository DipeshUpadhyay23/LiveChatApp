import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { useState } from "react";

import ChatArea from "./ChatArea";
export default function MainContainer() {
  const [conversations, setConversations] = useState({
    name: "Test#1",
    lastMessage: "Last Message #1",
    timeStamp: "today",
  });
  return (
    <div className="main-container">
      <Sidebar />
      <ChatArea props={conversations} />
    </div>
  );
}
