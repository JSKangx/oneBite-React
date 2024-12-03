import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const data = useContext(DiaryStateContext);
  const { onDelete } = useContext(DiaryDispatchContext);

  // 현재 접속한 일기 데이터의 id를 얻어오기
  const params = useParams();
  const diaryTimestamp = data.find(
    (item) => Number(item.id) === Number(params.id)
  ).createdDate;

  // 뒤로가기 버튼을 눌렀을 때 현재 수정하는
  const navigate = useNavigate();

  const onClickDeleteBtn = () => {
    const userResponse = window.confirm("일기를 정말 삭제할까요?");
    if (userResponse) {
      onDelete(params.id);
      alert(`${params.id}번 일기가 삭제되었습니다.`);
      navigate("/", { replace: true });
      return;
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            text={"< 뒤로가기"}
            onClick={() =>
              navigate("/", { state: { timestamp: diaryTimestamp } })
            }
          />
        }
        rightChild={
          <Button
            text={"삭제하기"}
            type={"NEGATIVE"}
            onClick={onClickDeleteBtn}
          />
        }
      />
      <Editor />
    </div>
  );
};

export default Edit;
