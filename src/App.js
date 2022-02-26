import React,{useState, useEffect} from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import Message from './Message';
import TextField from '@material-ui/core/TextField';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [input, setInput] = useState();
  const [user, setUser] = useState();
  const [message, setMessage] = useState([
  ]);
  useEffect(()=>{
    db.collection('message')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>(
      setMessage(snapshot.docs.map(doc=>doc.data()))
    ))
  },[])
  useEffect(()=>{
    setUser(prompt('please enter your name'));
  },[]);
  //console.log(message);
  const sendMessage = event =>{
    event.preventDefault();
    if(input !== "" && user !=="" && user !== null){
      db.collection('message').add(
        {
          user:user,
          msg:input,
          timestamp:firebase.firestore.FieldValue.serverTimestamp()
        }
      )
      setInput('');
    }else{
      console.log('error');
    }
    
  }
  


  return (
    <div className="App">
      <h1>Hi {user}, Chat Here!</h1>
      <form>
        <TextField id="standard-basic" value={input} onChange={(e)=>setInput(e.target.value)} label="Type a message..." required/>
        <Button variant="outlined" color="primary" onClick={sendMessage}>Send Message</Button>
      </form>
      
        {
          message.map(ele=>(
            <Message text={ele} user={user}/>
          
          
          ))
        }
    </div>
  );
}

export default App;
