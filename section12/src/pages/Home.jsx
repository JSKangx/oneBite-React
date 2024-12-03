import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";
import { useLocation } from "react-router-dom";

const getMonthlyData = (pivotDate, data) => {
  // 이번달의 시작 시간으로 date 객체 생성 후 time stamp로 변경
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  // 이번달의 마지막 시간으로 date 객체 생성 후 time stamp로 변경
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0, // 이전달의 마지막 날짜를 의미
    23,
    59,
    59
  ).getTime();

  // 시작 시간 <= 일기 데이터의 타임 스탬프 <= 마지막 시간인 일기 데이터만 필터링
  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  let monthlyData = getMonthlyData(pivotDate, data);

  console.log(data);

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
