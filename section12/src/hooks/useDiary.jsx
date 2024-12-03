import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const navigate = useNavigate();

  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  // 컴포넌트 마운트 이후 현재 일기 데이터 가져오기
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => Number(item.id) === Number(id)
    );

    // 사용자가 주소를 이상하게 입력해 접근한 경우에
    if (!currentDiaryItem) {
      alert("존재하지 않는 페이지입니다.");
      navigate("/", { replace: true });
    }

    setCurrentDiaryItem(currentDiaryItem);
  }, [id, data]);

  return currentDiaryItem;
};

export default useDiary;
