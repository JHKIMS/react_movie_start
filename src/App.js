import Button from "./Button.js"
import styles from "./App.module.css"

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome React</h1>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
