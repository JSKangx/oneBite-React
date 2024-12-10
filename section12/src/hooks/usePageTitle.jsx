import { useEffect } from "react";

const usePageTitle = (title) => {
  // 사이트의 제목을 동적으로 수정하기 위함
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
