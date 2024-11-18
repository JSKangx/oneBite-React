import { useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Main from "./components/Main";

function App() {
  const idRef = useRef(4);
  const [itemList, setItemList] = useState([
    {
      id: 1,
      title: "React 공부하기",
      date: new Date().getTime(),
      completed: false,
    },
    { id: 2, title: "빨래하기", date: new Date().getTime(), completed: false },
    {
      id: 3,
      title: "노래 연습하기",
      date: new Date().getTime(),
      completed: false,
    },
  ]);

  const addItem = (input) => {
    setItemList((prevList) => [
      {
        id: prevList.length > 0 ? idRef.current++ : 1,
        title: input,
        date: new Date().getTime(),
        completed: false,
      },
      ...prevList,
    ]);
  };

  // itemList.id 중에 매개변수로 받은 id와 일치하는 item의 completed 속성을 토글
  const onUpdate = (id) => {
    setItemList(
      itemList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItemList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="max-w-[480px] my-0 mx-auto">
        <Header />
        <TodoInput addItem={addItem} />
        <Main itemList={itemList} deleteItem={deleteItem} onUpdate={onUpdate} />
      </div>
    </>
  );
}

export default App;
