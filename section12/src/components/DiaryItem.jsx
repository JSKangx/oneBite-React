import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const navigate = useNavigate();

  return (
    <div className="DiaryItem">
      <section
        className={`img_section img_section_${emotionId}`}
        onClick={() => navigate(`/diary/${id}`)}
      >
        <img src={getEmotionImage(emotionId)} />
      </section>
      <section
        className="info_section"
        onClick={() => navigate(`/diary/${id}`)}
      >
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </section>
      <section className="button_section">
        <Button text={"수정하기"} onClick={() => navigate(`/edit/${id}`)} />
      </section>
    </div>
  );
};

export default DiaryItem;
