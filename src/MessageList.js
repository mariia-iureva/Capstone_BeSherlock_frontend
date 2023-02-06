import React from "react";
// import PropTypes from "prop-types";
import Message from "./Message";
import "./MessageList.css";

const MessageList = ({ messages }) => {
  // console.log("these are messages", messages);

  return (
    <>
      {messages.map((entry, i) => {
        return (
          <div className="message-list" key={i}>
            <Message entry={entry} />
          </div>
        );
      })}
    </>
  );
};

export default MessageList;
