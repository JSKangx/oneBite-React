import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Main from "./components/Main";

function App() {
  const date = new Date();
  const formattedDate = date.toDateString();

  const [itemList, setItemList] = useState([
    { id: 1, title: "React 공부하기", time: formattedDate },
    { id: 2, title: "빨래하기", time: formattedDate },
    { id: 3, title: "노래 연습하기", time: formattedDate },
  ]);

  const addItem = (input) => {
    setItemList((prevList) => [
      ...prevList,
      {
        id:
          prevList.length > 0
            ? parseInt(prevList[prevList.length - 1].id) + 1
            : 1,
        title: input,
        time: formattedDate,
      },
    ]);
  };

  const deleteItem = (id) => {
    setItemList((prevList) => prevList.filter((item) => item.id !== id));
    console.log(id);
  };

  return (
    <>
      <Header formattedDate={formattedDate} />
      <TodoInput addItem={addItem} />
      <Main itemList={itemList} date={date} deleteItem={deleteItem} />
    </>
  );
}

export default App;
