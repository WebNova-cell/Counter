import { useState } from "react";
import Counter from "./components/counter";
import CounterButton from "./components/CounterButton";
import Reset from "./components/Reset";
import Title from "./components/Title";
import "./App.css";


export default function App(){
  const [count, setCount] = useState(0);
  return(
    <>
    <main>
      <div className="card">
      <Title/>
      <Counter count={count} setCount={setCount}/>
      <Reset setCount={setCount}/>
      <CounterButton  count={count} setCount={setCount}/>
      </div>
    </main>
  
    </>
  )
}