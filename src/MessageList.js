import React from "react";
// import PropTypes from "prop-types";
import Message from "./Message";
import "./MessageList.css";

const MessageList = (props) => {
  const entries = props.entries.MessageList;
  console.log("these are props", props);
  console.log("these are entries", entries);

  const getMessageListJSX = entries.map((entry, i) => {
    return (
      <div className="message-list" key={i}>
        <Message entry={entry} />
      </div>
    );
  });

  return getMessageListJSX;
};

// MessageList.propTypes = {
//   entries: PropTypes.arrayOf(
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
