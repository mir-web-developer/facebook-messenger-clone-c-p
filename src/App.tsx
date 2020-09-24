import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //@ts-ignore
        setMessages(
          snapshot.docs.map((doc: any) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    toast.success("new message added");
    // setMessages([...messages, { username: username, text: input }]);
    setInput('')
  };
  return (
    <div className="App">
      <h1>Hello clever programmer🚀</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message ... "
            value={input}
            onChange={(event) => setInput(event.currentTarget.value)}
          />
          <IconButton
          className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }: any) => {
          return (
            <Message key={id} id={id} username={username} message={message} />
          );
        })}
      </FlipMove>
      <ToastContainer />
    </div>
  );
}

export default App;
