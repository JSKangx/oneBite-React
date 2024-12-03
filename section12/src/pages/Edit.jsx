import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const navigate = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  // 현재 접속한 페이지 파라미터 가져오기
  const params = useParams();

  const currentDiaryItem = useDiary(params.id);

  const onClickDeleteBtn = () => {
    const userResponse = window.confirm("일기를 정말 삭제할까요?");
    if (userResponse) {
      onDelete(params.id);
      alert(`${params.id}번 일기가 삭제되었습니다.`);
      navigate("/", { replace: true });
      return;
    }
  };

  const onSubmit = (input) => {
    const userConfirm = window.confirm("일기를 정말 수정할까요?");
    if (userConfirm) {
      onUpdate(
        input.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      alert("수정되었습니다.");
      // 방금 수정한 일기 상세 페이지로 리다이렉트
      navigate(`/diary/${params.id}`, { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => navigate("/")} />}
        rightChild={
          <Button
            text={"삭제하기"}
            type={"NEGATIVE"}
            onClick={onClickDeleteBtn}
          />
        }
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
