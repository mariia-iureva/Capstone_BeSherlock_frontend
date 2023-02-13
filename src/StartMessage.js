import React from "react";
// import PropTypes from "prop-types";
// import Message from "./Message";
// import "./MessageList.css";

const StartMessage = () => {
  return (
    <div className="start-end-message">
      <p>
        Welcome to BeSherlockApp! You play as <b>Sherlock</b> and your chatbot
        companion, <b>Watson</b>, will be by your side as you embark on a
        journey to solve mysterious crimes. Your task as Sherlock is to
        investigate what happened in the story and bring the culprit to justice.
      </p>
      <p>
        To start the game, simply type <b>"start"</b> in the chat. You will then
        be presented with a list of cases to choose from. Each case will have
        its own unique story and set of clues to uncover. As you progress
        through the game, you will need to use your detective skills and
        intuition to piece together the evidence and solve the mystery.
      </p>
      <p>
        Remember, the key to success in this game is to think like a detective
        and always pay attention to the smallest details. So put on your
        thinking cap, and let's start the investigation!
      </p>
      {/* <p>
        Please note that typing "start" again will erase all previous history of
        messages, allowing you to start your investigation from scratch. The
        journey to solve new mysteries awaits!
      </p> */}
    </div>
  );
};

export default StartMessage;
