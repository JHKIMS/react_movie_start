// import Button from "./Button.js"
// import styles from "./App.module.css"


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
  return null;
  /**
     * Todo만드는 App
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault(); 
        if(toDo === "" ){
            return;
        }
        
        setToDos(currentArray => [toDo, ...currentArray])
        setToDo("");
    }
    return <div>
            <h1>ToDoList{toDos.length}</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
                <button>Add To Do</button>
            </form>

            <hr />
            <ul>
             {toDos.map((item, index)=>( 
                    <li key={index}>{item}</li>))}
            </ul>
           </div>
    */

  /**
   * 코인리스트
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (<strong>Loading...</strong>) : (
        <select>
        {coins.map((coin, index) => 
            <option key={index}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>)}
        </select>
      )}
        
    </div>
  );
   */
}

export default App;
