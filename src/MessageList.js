import React from "react";
// import PropTypes from "prop-types";
import Message from "./Message";
import "./MessageList.css";

const MessageList = ({ messages }) => {
  // console.log("these are props", props);
  console.log("these are messages", messages);

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

// MessageList.propTypes = {
//   messages: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       sender: PropTypes.string.isRequired,
//       body: PropTypes.string.isRequired,
//       timeStamp: PropTypes.string.isRequired,
//     })
// ).isRequired,
// onUpdateMessage: PropTypes.func.isRequired,
//   ),
// };

export default MessageList;
