import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <TodoInput />
      <Main />
    </>
  );
}

export default App;
