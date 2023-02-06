import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import MessageList from "./MessageList";
// import ScrollToBottom from "react-scroll-to-bottom";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(-1);

  const handleChange = (event) => {
    setInputMessage(event.target.value);
    // console.log("handleChange", event.target.value);
  };

  // This thing is setting a timer to update input message after a pause
  // instead of letter by letter

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("we're updating input after a pause:", inputMessage);
    }, 500);
    return () => clearTimeout(timer);
  }, [inputMessage]);

  // This thing triggers handleClick when key "Enter" is hit
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("input message after Enter:", inputMessage);
      handleClick(inputMessage);
    }
  };

  const handleClick = React.useCallback(() => {
    console.log("handleClick", inputMessage);
    if (!inputMessage) {
      return;
    }
    let url = `${process.env.REACT_APP_BACKEND_URL}/postMessage`;
    let body = { message: inputMessage, step: step };
    const msgList = messages;
    msgList.push("You: " + inputMessage);
    setMessages([...msgList]);
    axios
      .post(url, body)
      .then((res) => {
        msgList.push("Bot: " + res.data.bot_message);
        setMessages([...msgList]);
        setStep(res.data.step);
        console.log("handleClick then", msgList);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("handleClick end", msgList);

    // const chatContainer = chatContainerRef.current;
    // chatContainer.scrollIntoView({ behavior: "smooth" });

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

  return (
    <div className="App">
      <h1> Conversation</h1>
      <main>
        <div className="all_messages_bubble_outer_container">
          <div className="all_messages_bubble_inner_container">
            <MessageList messages={messages} />
            <div className="TEST" ref={chatContainerRef}></div>
          </div>
        </div>
      </main>
      <section>
        <label htmlFor="message">Message:</label>
        <input
          id="standard-name"
          label="Message"
          placeholder="Write here"
          value={inputMessage}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          margin="normal"
          type="text"
        />
        <button
          className="send_message_button"
          onClick={handleClick}
          // disabled={!inputMessage}
        >
          Say something
        </button>
      </section>
    </div>
  );
}
export default App;
