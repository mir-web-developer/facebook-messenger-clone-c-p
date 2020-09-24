import { Button } from "@material-ui/core";
import React, { useState } from "react";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["hello", "hi", "whats up"]);

  const sendMessage = (event) => {
    event.preventDefault()
    setMessages([...messages, input]);
  };
  return (
    <div className="App">
      <h1>Hello clever programmer🚀</h1>
      <form >
        <input
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
        />
        <Button type="submit" onClick={sendMessage}>Send Message</Button>
      </form>
      {messages.map((message) => {
        return <p>{message}</p>;
      })}
    </div>
  );
}

export default App;
