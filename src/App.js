import logo from './logo.svg';
import './App.css';
import { Button1 } from './Components/Button1';
import { Button2 } from './Components/Button2';
import { Button3 } from './Components/Button3';
import { useState } from 'react';

let initialState={
  count1:0,
  count2:0,
  count3:0
}

function App() {
  const [count,setCount]=useState(initialState);
  const [btn, setButton]= useState("")
  
  const countHandler =(countUpdate, btnName) =>{

  }
  return (
    <div className="App">
      <h1>Count:</h1>
     <Button1 />
     <Button2 />
     <Button3 />
    </div>
  );
}

export default App;
