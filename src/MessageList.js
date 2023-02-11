import React from "react";
// import PropTypes from "prop-types";
import Message from "./Message";
import "./MessageList.css";

const MessageList = ({ messages }) => {
  // console.log("i'm in messageList");
  // console.log("these are messages", messages);

  // let regex = new RegExp("\\b congratulations \\b", "gi");
  // let message = "hey bro! congratulations!";
  // // messages.forEach((message) => {
  // let regexResult = message.match(regex);
  // if (regexResult) {
  //   console.log(regexResult);
  //   console.log("end of game now true!");
  //   // endOfGame = true;
  // }
  // // });

  // if (messages.length === 0) {
  //   return "This is first greeting";
  // }

  // messages.forEach((element) => {
  //   console.log("here's each element", element);
  //   if (element.includes("congratulations")) {
  //     console.log("found congratulations!!");
  //     return "Final page with congratulations!";
  //   }
  // });

  // if (regexResult) {
  //   console.log("end of game");
  //   return "This is final page with results";
  // }

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
