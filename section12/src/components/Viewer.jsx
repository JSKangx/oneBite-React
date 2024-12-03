import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants";

const Viewer = ({ data }) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(data.emotionId)
  );

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div
          className={`emotion_img_wrapper emotion_img_wrapper_${data.emotionId}`}
        >
          <img src={getEmotionImage(data.emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{data.content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
