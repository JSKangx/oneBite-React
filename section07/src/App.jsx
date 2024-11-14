import { useState, useEffect, useRef } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  function changeCount(num) {
    setCount(count + parseInt(num));
  }

  // 1. 마운트 제어
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 제어
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("updated!");
  });

  // 3. 언마운트 제어

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
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section className="box">
        <Controller changeCount={changeCount} />
      </section>
    </div>
  );
}

export default App;
