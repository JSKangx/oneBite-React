import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect의 콜백함수가 반환하는 함수를 보통 '클린업'이라고 부른다.
    // 클린업 함수는 useEffect가 끝날 때 실행된다.
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
