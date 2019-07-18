import React, { useState, useEffect } from "react";
import { Input, Button, Header } from "semantic-ui-react";
//import { useSelector, useDispatch } from 'react-redux'

import "./styles.css";

function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Triggered");
  });

  return (
    <div className="App">
      <Header as="h1">ReactJS Hook + Semantic UI Introduction</Header>
      <h3>{name}</h3>
      <h2>{text}</h2>
      <Button onClick={() => setName("Clicked !")}>Click me</Button>
      <Input
        placeholder="Write your text"
        onChange={e => setText(e.target.value)}
        type="text"
        name="isim"
        value={text}
      />
      <br />
      <br />
      <div>
        Counter : <b>{count}</b>
        <br />
        <Button onClick={() => setCount(count + 1)}>+</Button>{" "}
        <Button onClick={() => setCount(count - 1)}>-</Button>
      </div>
    </div>
  );
}

export default App;
