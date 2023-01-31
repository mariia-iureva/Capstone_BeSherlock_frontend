import React from "react";
import "./Message.css";
// import PropTypes from "prop-types";
// import TimeStamp from "./TimeStamp";

const Message = (props) => {
  return (
    <div className="message-entry">
      <section className="entry-bubble">
        <p>{props.entry}</p>
      </section>
    </div>
  );
};

// Message.propTypes = {
//   id: PropTypes.number.isRequired,
//   sender: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   timeStamp: PropTypes.string.isRequired,
//   liked: PropTypes.bool.isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

export default Message;
