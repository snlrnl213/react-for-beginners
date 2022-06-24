import Button from "./Button"
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello(){
  function byeFn(){
    console.log("bye :(")
  }
  function hiFn(){
    console.log("hi :)")
    return byeFn
  }
  useEffect(hiFn,[])
  useEffect(()=>{
    console.log("create")
    return() => console.log("destroyed")//clean up function 컴포넌트가 destroy될때
  },[])
  useEffect(function(){
    console.log("hi")
    return function(){
      console.log("bye")
    }
  },[])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
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
  
  const onShow = () => setShowing((prev)=>!prev)
  
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
      <hr/>
      <div>
        {showing ? <Hello/> : null}
        <button onClick={onShow}>{showing ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
}

export default App;
