import { useState } from 'react';

// 간단한 회원가입 폼 만들기
/*
  1.이름
  2. 생년월일
  3. 국적
  4. 자기소개
*/
const Register = () => {
  const [input, setInput] = useState({ name: '', birth: '', country: '', bio: '' });

  console.log(input);

  // 입력값이 변경될 때마다 변경된값을 name 변수에 저장
  const onChangeName = (e) => {
    setInput({
      // name이 아닌 다른 속성들을 그대로 복사해와서 유지시키도록 하고
      ...input,
      name: e.target.value, // 이 함수에서는 name값만 업데이트
    });
  };

  const onChangeBirth = (e) => {
    setInput({
      // name이 아닌 다른 속성들을 그대로 복사해와서 유지시키도록 하고
      ...input,
      birth: e.target.value, // 이 함수에서는 name값만 업데이트
    });
  };

  const onChangeCountry = (e) => {
    setInput({
      // name이 아닌 다른 속성들을 그대로 복사해와서 유지시키도록 하고
      ...input,
      country: e.target.value, // 이 함수에서는 name값만 업데이트
    });
  };

  const onChangeBio = (e) => {
    setInput({
      // name이 아닌 다른 속성들을 그대로 복사해와서 유지시키도록 하고
      ...input,
      bio: e.target.value, // 이 함수에서는 name값만 업데이트
    });
  };

  return (
    <div>
      <div>
        <input value={input.name} type='text' onChange={onChangeName} placeholder={'이름'} />
      </div>

      <div>
        <input value={input.birth} type='date' onChange={onChangeBirth} />
      </div>

      <div>
        <select value={input.country} onChange={onChangeCountry}>
          <option></option>
          <option value='kr'>한국</option>
          <option value='us'>미국</option>
          <option value='uk'>영국</option>
        </select>
      </div>

      <div>
        <textarea value={input.bio} onChange={onChangeBio}></textarea>
      </div>
    </div>
  );
};

export default Register;
