import Button from "./Button"
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)
  console.log("i run all the time")
  const iRunOnlyOnce = () => {
    console.log("i run only once.")
  }
  useEffect(() => {
    iRunOnlyOnce()
  }, [])
  useEffect(()=>{
    if(keyword!=="" && keyword.length >5){
      console.log("SEARCH FOR...",keyword)
    }
  },[keyword])
  useEffect(()=>{
    console.log("I run when 'counter' change.")
  },[counter])
  useEffect(()=>{
    console.log("I run when 'counter','keyword' change.")
  },[counter,keyword])
  
  
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
      <hr />
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
