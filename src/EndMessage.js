import React from "react";
// import PropTypes from "prop-types";
// import Message from "./Message";
// import "./MessageList.css";

const EndMessage = () => {
  return (
    <div className="start-end-message">
      <p>
        Congratulations! You have successfully solved the mystery and brought
        the culprit to justice. Your sharp mind, attention to detail, and
        deductive skills have proven to be top-notch. Your keen sense of
        observation has uncovered the hidden clues and evidence that led you to
        the truth.
      </p>
      <p>
        As a text detective, you have shown that you have what it takes to solve
        even the toughest of crimes. The world is a safer place thanks to your
        efforts. You have demonstrated that you are a true master of deduction,
        and we are confident that you will continue to solve many more cases in
        the future.
      </p>
      <p>
        If you're ready for another challenge, simply type "start" again and
        choose from one of the many other cases available. The journey to solve
        new mysteries awaits!
      </p>
      {/* <p>
        Please note that typing "start" will erase all previous history of
        messages, allowing you to start your investigation from scratch. The
        journey to solve new mysteries awaits!
      </p> */}
      <p>
        Thank you for playing with BeSherlock App. We hope you enjoyed your
        journey as Sherlock, and that you will continue to hone your detective
        skills in future cases. Until then, farewell, detective!
      </p>
    </div>
  );
};

export default EndMessage;
