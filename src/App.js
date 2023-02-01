import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import MessageList from "./MessageList";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (event) => {
    setInputMessage(event.target.value);
    console.log("handleChange", event.target.value);
  };

  const handleClick = React.useCallback(() => {
    console.log("handleClick", inputMessage);
    if (!inputMessage) {
      return;
    }
    let url = "http://localhost:3001/postMessage";
    let body = { message: inputMessage };
    const msgList = messages;
    msgList.push("You: " + inputMessage);
    setMessages([...msgList]);
    axios
      .post(url, body)
      .then((res) => {
        msgList.push("Bot: " + res.data.bot_message);
        setMessages([...msgList]);
        console.log("handleClick then", msgList);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("handleClick end", msgList);
    setInputMessage("");
  }, [inputMessage, setInputMessage, messages, setMessages]);

  // const handleMessageSubmit = (event) => {
  //   event.preventDefault();
  //   event.target.reset();
  //   // setMessageInputField({
  //   //   message: "",
  //   // });
  // };

  return (
    <div className="App">
      <h1> Conversation</h1>
      <main>
        <div className="all_messages_bubble_outer_container">
          <div className="all_messages_bubble_inner_container">
            <MessageList messages={messages} />
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
