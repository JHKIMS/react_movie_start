// import Button from "./Button.js"
// import styles from "./App.module.css"
import {useState, useEffect} from "react"

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prevCount) => prevCount+1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() =>{
    console.log("Only One Call Api")
  }, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length>5){
      console.log("Search For", keyword);
    }
  },[keyword]);
  useEffect(() =>{
    console.log("I run when 'counter' changes");
  },[counter]);
  useEffect(() =>{
    console.log("counter or keyword changes");
  }, [keyword, counter])
  return (
    <div>
      {/* <h1 className={styles.title}>Welcome React</h1>
      <Button text={"Continue"}/> */}


      <input 
      value={keyword}
      onChange={onChange} type="text" placeholder="Search here..." />
      
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
