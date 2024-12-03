import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

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

// 날짜 : 'YYYY-MM-DD' 형태로 변환
// 날짜를 선택했을 때 e.target.value로 날짜를 변경하면 화면에 출력은 되지만, 초기값을 출력하려면 이런 변환 함수가 필요하다.
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = String(targetDate.getMonth() + 1).padStart(2, "0");
  let date = String(targetDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit, initData }) => {
  // 3개의 입력값을 한꺼번에 상태관리하기
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  // 3가지 입력값이 변할 때 input 상태 변경을 위해 호출될 함수
  const onChangeInput = (e) => {
    // 변경이 일어난 input 필드에 설정된 name 속성
    let name = e.target.name;
    // 변경이 일어난 input 필드의 변경 값
    let value = e.target.value;

    // 변경이 일어난 input의 name이 createdDate라면, 문자열로 넘어온 value로 date 객체 생성
    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  // 동적 경로 이동
  const navigate = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  // 일기 데이터 생성 및 추가
  // Editor 컴포넌트는 새 일기 작성 페이지와 기존 일기 수정 페이지 두 군데서 모두 쓰이므로, 작성완료 버튼을 눌렀을 때 페이지에 따라 동작이 달라져야 한다(2가지). 이 함수가 하는 일은 어디서나 똑같이 부모가 만든 onSubmit 함수를 호출하게 하고, 각 부모가 onSubmit 함수를 다른 동작을 하도록 정의하면 된다.
  /*
    1. 새 일기 작성 : 부모(New) 컴포넌트에 정의된 일기 데이터 생성 함수 호출
    2. 기존 일기 수정 : 부모(Edit) 컴포넌트에 정의된 일기 데이터 수정 함수 호출
  */
  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          type="date"
          value={getStringedDate(input.createdDate)}
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          placeholder="오늘은 어땠나요?"
          onChange={onChangeInput}
          value={input.content}
        />
      </section>
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => navigate(-1)} />
        <Button
          text={"작성완료"}
          type={"POSITIVE"}
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};

export default Editor;
