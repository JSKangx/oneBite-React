import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  function changeCount(num) {
    setCount(count + parseInt(num));
  }

  return (
    <div className="wrapper">
      <h1>Simple Counter</h1>
      <section className="box">
        <Viewer count={count} />
      </section>
      <section className="box">
        <Counter changeCount={changeCount} />
      </section>
    </div>
  );
}

export default App;
