import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "../App";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

const Editor = () => {
  // Context에서 dispatch 함수 불러오기
  const { onCreate } = useContext(DiaryDispatchContext);

  // 동적 경로 이동
  const navigate = useNavigate();

  // 날짜 상태 관리
  const [createdDate, setCreatedDate] = useState("");
  const onChangeCreatedDate = (e) => {
    setCreatedDate(e.target.value);
  };

  // 감정 상태 관리
  const [emotionId, setEmotionId] = useState(0);
  const onClickEmotion = (emotionId) => {
    setEmotionId(emotionId);
  };

  // 일기 내용 상태 관리
  const [content, setContent] = useState("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 일기 데이터 생성 및 추가
  const onSubmitDiary = () => {
    // 입력 데이터 유효성 검증
    if (createdDate !== "" && emotionId !== 0 && content !== "") {
      onCreate(new Date(createdDate).getTime(), emotionId, content);
      navigate("/");
    } else {
      alert("내용을 모두 채워주세요.");
    }
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" value={createdDate} onChange={onChangeCreatedDate} />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
              onClick={() => onClickEmotion(item.emotionId)}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘은 어땠나요?"
          onChange={onChangeContent}
          value={content}
        />
      </section>
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => navigate(-1)} />
        <Button text={"작성완료"} type={"POSITIVE"} onClick={onSubmitDiary} />
      </section>
    </div>
  );
};

export default Editor;
