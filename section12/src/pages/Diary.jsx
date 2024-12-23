import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { getStringedDate } from "../util/get-stringed-date";
import useDiary from "../hooks/useDiary";
import { useNavigate, useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();
  // 페이지 타이틀 변경
  usePageTitle(`${params.id}번 일기`);
  const navigate = useNavigate();
  const currentDiaryItem = useDiary(params.id);

  return (
    <div>
      {currentDiaryItem && (
        <>
          <Header
            title={`${getStringedDate(
              new Date(currentDiaryItem.createdDate)
            )} 기록`}
            leftChild={
              <Button text={"< 뒤로가기"} onClick={() => navigate("/")} />
            }
            rightChild={
              <Button
                text={"수정하기"}
                onClick={() => navigate(`/edit/${params.id}`)}
              />
            }
          />
          <Viewer data={currentDiaryItem} />
        </>
      )}
    </div>
  );
};

export default Diary;
