import React, { useEffect } from 'react';
import "./index.css";
import { useState } from "react";
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './components/Message';
import { db } from './config/firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';





export default function App() {


  // useState
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  // useEffect

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })));
      });
  }, [])

  // console.log(db)

  useEffect(() => {

    setUsername(prompt("Please Enter you name..."))
  }, [])
  // function
  const sentMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages, { username: username, message: input }])
    setInput('')
  }

  return (
    <>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_Messenger_logo_2018.svg.png" width="100px " />
      <h1>Messenger Clone</h1>
      <h2>Welcome {username}</h2>

      <form className="app_form">

        <FormControl className="App_formControl">
         
          <Input className="App__input" placeholder="Enter messages...." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton"  disabled={!input}  variant="contained" color="primary" type='submit' onClick={sentMessage}>
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>



      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />

          ))
        }
      </FlipMove>
    </>
  );
}
