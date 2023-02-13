import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import MessageList from "./MessageList";
import StartMessage from "./StartMessage";
import EndMessage from "./EndMessage";
import Timer from "./Timer";

// import desktopImage from "./img/sherlock_desktop.jpeg";
// import mobileImage from "./img/sherlock_mobile-min.png";
// import ScrollToBottom from "react-scroll-to-bottom";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(-1);

  // const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  const handleChange = (event) => {
    setInputMessage(event.target.value);
    // console.log("handleChange", event.target.value);
  };

  // This thing is setting a timer to update input message after a pause
  // instead of letter by letter

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("we're updating input after a pause:", inputMessage);
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }, [inputMessage]);

  // This thing triggers handleClick when key "Enter" is hit
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // console.log("input message after Enter:", inputMessage);
      handleClick(inputMessage);
    }
  };

  const handleClick = React.useCallback(() => {
    // console.log("handleClick", inputMessage);
    if (!inputMessage) {
      return;
    }

    let url = `${process.env.REACT_APP_BACKEND_URL}/postMessage`;
    let body = { message: inputMessage, step: step };

    // __Starting over with "start" message
    // if (
    //   inputMessage.includes("start") &&
    //   messages.includes("That's it, congratulations!")
    // ) {
    //   const msgList02 = messages;
    //   msgList02[-1] = "You won!";
    //   console.log(msgList02);
    //   setMessages([...msgList02]);
    // }

    if (inputMessage.includes("start") && messages.length > 0) {
      // console.log("found start and messages not empty");
      const startingStep = -1;
      body = { message: inputMessage, step: startingStep };
    }

    // console.log("body", body);
    const msgList = messages;
    msgList.push("You: " + inputMessage);
    setMessages([...msgList]);
    axios
      .post(url, body)
      .then((res) => {
        msgList.push("Bot: " + res.data.bot_message);
        setMessages([...msgList]);
        setStep(res.data.step);
        // console.log("handleClick then", msgList);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("handleClick end", msgList);

    setInputMessage("");
  }, [inputMessage, setInputMessage, messages, setMessages, step, setStep]);

  // const handleMessageSubmit = (event) => {
  //   event.preventDefault();
  //   event.target.reset();
  //   // setMessageInputField({
  //   //   message: "",
  //   // });
  // };
  // scrolling to bottom

  const chatContainerRef = useRef(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    chatContainer.scrollIntoView({ behavior: "smooth" });
  }, [chatContainerRef, messages]);

  if (messages.length === 0) {
    var textMessagesWindowComponent = <StartMessage />;
  } else {
    textMessagesWindowComponent = <MessageList messages={messages} />;
  }

  if (
    messages.length > 0 &&
    messages[messages.length - 1] === "Bot: That's it, congratulations!"
  ) {
    console.log("found congratulations!!");
    textMessagesWindowComponent = <EndMessage />;
  }

  return (
    <div className="App">
      <div className="App-header">BeSherlock App</div>
      <Timer></Timer>
      {/* <h2> Conversation</h2> */}
      <div>
        <main>
          <div className="all_messages_bubble_outer_container">
            <div className="all_messages_bubble_inner_container">
              {textMessagesWindowComponent}
              <div className="TEST" ref={chatContainerRef}></div>
            </div>
          </div>

          <section className="text-input-field">
            {/* <label htmlFor="message">Message:</label> */}
            <input
              id="standard-name"
              className="input-field"
              label="Message"
              placeholder="Write here"
              value={inputMessage}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              margin="normal"
              type="text"
            />
            <button
              className="button"
              onClick={handleClick}
              // disabled={!inputMessage}
            >
              <span>Send</span>
            </button>
          </section>
        </main>
        <footer className="App-footer"> Created by Masha, C18</footer>
      </div>
    </div>
  );
}
export default App;
