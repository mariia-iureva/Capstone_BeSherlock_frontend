import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import MessageList from "./MessageList";

function App() {
  const [values, setValues] = useState({
    Message: "",
    MessageList: [],
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
    console.log(values);
  };
  const handleClick = (event) => {
    let url = "http://localhost:3001/postMessage";
    let body = { message: values.Message };
    var msgList = values.MessageList;
    msgList.push("You: " + values.Message);
    axios
      .post(url, body)
      .then((res) => {
        msgList.push("Bot: " + res.data.bot_message);
        setValues({ ...values, msgList });
      })
      .catch((err) => {
        console.log(err);
      });
    setValues({ ...values, msgList });
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    // setMessageInputField({
    //   message: "",
    // });
  };

  return (
    <div className="App">
      <h1> Conversation</h1>
      <main>
        <div className="all_messages_bubble_outer_container">
          <div className="all_messages_bubble_inner_container">
            <MessageList entries={values} />
          </div>
        </div>
      </main>
      <section>
        <form className="chat_input" onSubmit={handleMessageSubmit}>
          <label htmlFor="message">Message:</label>
          <input
            id="standard-name"
            label="Message"
            placeholder="Write here"
            value={values.name}
            onChange={handleChange("Message")}
            margin="normal"
            type="text"
            required
          />
          <button
            className="send_message_button"
            type="submit"
            onClick={(e) => handleClick(e)}
          >
            Say something
          </button>
        </form>
      </section>
      {/* <TextField
        id="standard-name"
        label="Message"
        value={values.name}
        onChange={handleChange("Message")}
        margin="normal"
      />
      <Button
        variant="contained"
        // className={classes.button}
        onClick={(e) => handleClick(e)}
      >
        Send
      </Button> */}
    </div>
  );
}
export default App;
