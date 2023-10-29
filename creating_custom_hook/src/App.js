import './App.css';
import useTurnInputFieldsRed from "./customHook";
import {useCounter} from "./customHook";
import {useState, useRef, useEffect} from "react";


function App() {

  const [A, setA] = useState(0);
  const [cur, counterNext, counterReset] = useCounter();


  return (
      <div>
        <h1>{A}</h1>
        <button onClick={()=>{
            counterNext()
          setA(cur.current)
        }}> Inc counter </button>
          <br/>
          <button onClick={()=>{
              counterReset()
              setA(cur.current)
          }}> Reset counter </button>

      </div>

  );
}

export default App;
