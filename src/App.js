import {React,useState} from 'react';
import './App.css';
function App() {

  const [he,setData]=useState(0)
  function hehe(){
    setData(he+1)
  }
console.warn("-----------------------------");
  return (
    <div>
    <h1>{he}</h1>  
    <button onClick={hehe}>click me</button>
    </div>
  );
}

export default App;
