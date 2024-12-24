import axios from "axios";

//axios연동(로그인)
export const loginMember = async data => {
  console.log(data);
  try {
    const res = {
      resultMsg: "로그인 성공",
      resultData: {
        nickName: "슈퍼스타",
        userId: "test@gmail.com",
        pic: "aaa.jpg",
        imProjects: [
          { projectId: 0, title: "6개월 러닝 계획", cnt: 3 },
          { projectId: 1, title: "2개월 독서 계획", cnt: 1 },
        ],
      },
    };
    //const res = await axios.post("api/user/signIn", data);
    //console.log("로그인 결과 : ", res);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(회원가입)
export const joinMember = async data => {
  console.log(data);
  try {
    const res = { data: "ok" };
    //const header = { headers: { "Content-Type": "multipart/form-data" } };
    //const res = await axios.post("api/user/signup", data, header);
    //console.log("회원가입 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(회원정보 수정)
export const editMember = async data => {
  console.log(data);
  try {
    const res = { data: "ok" };
    //const header = { headers: { "Content-Type": "multipart/form-data" } };
    //const res = await axios.patch("api/user/put", data, header);
    //console.log("회원정보 수정 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(회원탈퇴)
export const deleteMember = async data => {
  console.log(data);
  try {
    const res = { data: "ok" };
    //const res = await axios.post(`api/user/delete?user_id=${user_id}&upw=${upw}`);
    //console.log("회원탈퇴 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(임시비밀번호 발급)
export const changePassword = data => {
  console.log(data);
  try {
    const res = { data: "ok" };
    //const res = await axios.post("api/user/password",data);
    //console.log("임시비밀번호 발송 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//세션 저장
export const setSession = (sessionKey, sessionData) => {
  sessionStorage.setItem(sessionKey, JSON.stringify(sessionData));
};

//세션 호출
export const getSession = sessionKey => {
  const sessionData = sessionStorage.getItem(sessionKey);
  return sessionData ? JSON.parse(sessionData) : null;
};

//세션 삭제
export const clearSession = sessionKey => {
  sessionStorage.removeItem(sessionKey);
};
