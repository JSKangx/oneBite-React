import { useRef, useState, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import Main from "./components/Main";

const DUMMY = [
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
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, completed: !item.completed }
          : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [itemList, dispatch] = useReducer(reducer, DUMMY);
  const idRef = useRef(4);

  const addItem = (input) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        completed: false,
        title: input,
        date: new Date().getTime(),
      },
    });
  };

  // itemList.id 중에 매개변수로 받은 id와 일치하는 item의 completed 속성을 토글
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const deleteItem = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
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
