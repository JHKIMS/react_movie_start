// import Button from "./Button.js"
// import styles from "./App.module.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";
import Coin from "./components/Coin.js";
import Todo from "./components/Todo.js";

// function Hello(){
//   // function byFn() {
//   //   console.log("bye :(");
//   // }
//   // function hiFn(){
//   //   console.log("Created :)");
//   //   return byFn;
//   // }
//   useEffect(() => {
//     console.log("hi :)");
//     return () => console.log("bye :(");
//   },[])
//   return <h1>Hello</h1>
// }

// function App() {
//   const [cleanup, setCleanup] = useState(false);
//   const cleanFunc = () => setCleanup((prevClean) => !prevClean);

//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prevCount) => prevCount+1);
//   const onChange = (event) => setKeyword(event.target.value);
//   console.log("I run all the time");
//   useEffect(() =>{
//     console.log("Only One Call Api")
//   }, []);
//   useEffect(() => {
//     if(keyword !== "" && keyword.length>5){
//       console.log("Search For", keyword);
//     }
//   },[keyword]);
//   useEffect(() =>{
//     console.log("I run when 'counter' changes");
//   },[counter]);
//   useEffect(() =>{
//     console.log("counter or keyword changes");
//   }, [keyword, counter])
//   return (
//     <div>
//       {/* <h1 className={styles.title}>Welcome React</h1>
//       <Button text={"Continue"}/> */}

//       <input
//       value={keyword}
//       onChange={onChange} type="text" placeholder="Search here..." />

//       <h1>{counter}</h1>
//       <button onClick={onClick}>Click me</button>

//       {cleanup ? <Hello /> : null}
//       <button onClick={cleanFunc}>{cleanup ? "Hide":"Show"}</button>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Todo">
          <Todo />
        </Route>
        <Route path="/coin">
          <Coin />
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );

}

export default App;
