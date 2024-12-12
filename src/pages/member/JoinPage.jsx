import styled from "@emotion/styled";
import { useState } from "react";

const MemberJoinForm = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  fieldset {
    margin-bottom: 40px;
    padding: 20px;
    border: 1px solid #ddd;
  }
  h1 {
    margin-bottom: 20px;
  }
  li {
    display: flex;
    align-items: center;
    padding: 5px 0px;
  }
  label {
    width: 120px;
  }
  input {
    height: 30px;
    margin-right: 5px;
    padding-left: 5px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }
  input[type="radio"],
  input[type="checkbox"] {
    width: 20px;
  }
  select {
    height: 30px;
    border: 1px solid #ddd;
  }
  textarea {
    width: 80%;
    height: 100px;
    padding: 5px;
    border: 1px solid #ddd;
    resize: vertical;
  }
  button {
    height: 30px;
    margin: 0px 5px;
    padding: 0px 10px;
    border: 1px solid #ddd;
    background-color: #eee;
    cursor: pointer;
  }
`;

const JoinBtn = styled.div`
  text-align: center;
`;

function JoinPage() {
  const initData = {
    useridOk: "0",
    userid: "",
    userpass: "",
    userpassconfirm: "",
    samecheck: "0",
    useremail: "",
    userage: "10",
    usergender: "male",
    userarea: "daegu",
    userbirth: "2000-01-01",
    userintroduce: "",
    userprofile: null,
    userfiles: null,
    userhobby: ["여행"],
  };

  const [formData, setFormData] = useState(initData);
  const [useridOk, setUseridOk] = useState("0");

  const handleIdCheck = () => {
    alert(`아이디 ${formData.userid}는 사용가능합니다.`);
    setUseridOk("1");
  };

  //const handleClick = () => {};

  //onchange 이벤트
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    //console.log(name, value, type, checked);
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked
          ? [...formData.userhobby, value]
          : formData.userhobby.filter(item => item !== value),
      });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      //enter키 누르면 동작
      if (formData.userpass !== formData.userpassconfirm) {
        alert("입력한 비번이 서로 다릅니다!");
        setFormData({ ...formData, [event.target.name]: "" }); //내용 초기화
      }
    }
  };

  //form 전송하기
  const handleSubmit = event => {
    event.preventDefault(); //submit중단하고 유효성 검사
    //console.log(event);
    //console.log(event.target); //form
  };

  return (
    <MemberJoinForm>
      <h1>회원가입</h1>
      <form>
        {/* 회원가입 기본정보 입력 */}
        <fieldset>
          <legend>기본정보</legend>
          <ul>
            <li>
              <label htmlFor="userId">아이디</label>
              <input
                type="text"
                name="userid"
                id="userId"
                className="userId"
                placeholder="아이디"
                maxLength="12"
                minLength="4"
                onChange={e => handleChange(e)}
              />
              <button type="button">중복확인</button>
              <input type="hidden" name="useridOk" />
            </li>
            <li>
              <label htmlFor="userPass">비밀번호</label>
              <input
                type="password"
                name="userpass"
                id="userPass"
                placeholder="비밀번호"
                maxLength={15}
                onChange={e => handleChange(e)}
              />
            </li>
            <li>
              <label htmlFor="userPassConfirm">비밀번호 확인</label>
              <input
                type="password"
                id="userPassConfirm"
                name="userpassconfirm"
                placeholder="비밀번호 확인"
                maxLength={15}
                minLength={8}
                onChange={e => handleChange(e)}
              />
              <p id="msgPassConfirm">
                비밀번호(6자리 이상,숫자,영어,특수문자 포함)를 입력하세요.
              </p>
              <input type="hidden" name="samecheck" />
            </li>
            <li>
              <label htmlFor="userEmail">이메일</label>
              <input
                type="email"
                name="useremail"
                id="userEmail"
                placeholder="이메일"
                maxLength={30}
                onChange={e => handleChange(e)}
              />
            </li>
          </ul>
        </fieldset>

        {/* 회원가입 부가정보 입력 */}
        <fieldset>
          <legend>부가정보</legend>
          <ul>
            <li>
              <label htmlFor="userAge">나이</label>
              <input
                type="number"
                name="userage"
                id="userAge"
                placeholder="나이"
                maxLength={5}
                onChange={e => handleChange(e)}
              />
              세
            </li>
            <li>
              <label htmlFor="userGenderMan">성별</label>
              <input
                type="radio"
                name="usergender"
                id="userGenderMan"
                value="male"
                onChange={e => handleChange(e)}
              />
              <label htmlFor="userGenderMan">남성</label>

              <input
                type="radio"
                name="usergender"
                id="userGenderWomen"
                value="female"
                onChange={e => handleChange(e)}
              />
              <label htmlFor="userGenderWomen">여성</label>
            </li>
            <li>
              <label htmlFor="userArea">지역</label>
              <select
                name="userarea"
                id="userArea"
                onChange={e => handleChange(e)}
              >
                <option value="">선택하세요.</option>
                <option value="seoul">서울</option>
                <option value="daegu">대구</option>
                <option value="busan">부산</option>
                <option value="jeju">제주</option>
              </select>
            </li>
            <li>
              <label htmlFor="userBirth">생년월일</label>
              <input
                type="date"
                name="userbirth"
                id="userBirth"
                placeholder="나이"
                maxLength="10"
                onChange={e => handleChange(e)}
              />
            </li>
            <li>
              <label htmlFor="userIntroduce">자기소개</label>
              <textarea
                name="userintroduce"
                id="userIntroduce"
                placeholder="자기소개 입력"
                onChange={e => handleChange(e)}
              ></textarea>
            </li>

            <li>
              <label htmlFor="userHobby1">취미활동</label>
              <input
                type="checkbox"
                name="userhobby"
                id="userHobby1"
                onChange={e => handleChange(e)}
              />
              <label htmlFor="userHobby1">스포츠</label>
            </li>
          </ul>
        </fieldset>

        <JoinBtn>
          <button type="button">초기화</button>
          <button type="submit">회원가입</button>
        </JoinBtn>
      </form>
    </MemberJoinForm>
  );
}

export default JoinPage;
