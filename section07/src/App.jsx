import { useState, useEffect } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  function changeCount(num) {
    setCount(count + parseInt(num));
  }

  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);

  return (
    <div className="wrapper">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section className="box">
        <Viewer count={count} />
      </section>
      <section className="box">
        <Controller changeCount={changeCount} />
      </section>
    </div>
  );
}

export default App;
