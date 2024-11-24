import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Header from "./components/Header";

import { getEmotionImage } from "./util/get-emotion-image";
/*
  페이지 나누기
  1. "/" : 모든 일기를 조회하는 Home 페이지
  2. "/new" : 새로운 일기를 작성하는 New 페이지
  3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
*/
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button
        text={"123"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />
      <Button
        text={"123"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
        type={"POSITIVE"}
      />
      <Button
        text={"123"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
        type={"NEGATIVE"}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
