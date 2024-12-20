import axios from "axios";

//axios연동(로그인)
export const loginMember = async data => {
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
    //const res = await axios.post("http://192.168.0.106:5000/member", data);
    //console.log("로그인 결과 : ", res);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(회원가입)
export const postMember = async data => {
  //console.log(data);
  try {
    const res = { data: "ok" };
    //const res = await axios.post("http://192.168.0.106:5000/member", data);
    //console.log("회원가입 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(회원정보 수정)
export const patchMember = async data => {
  //console.log(data);
  try {
    const res = { data: "ok" };
    //const res = await axios.patch("http://192.168.0.106:5000/member", data);
    //console.log("회원정보 수정 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(회원탈퇴)
export const deleteMember = async data => {
  //console.log(data);
  try {
    const res = { data: "ok" };
    //const res = await axios.delete("http://192.168.0.106:5000/member", data);
    //console.log("회원탈퇴 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//세션 스토리지 저장
export const setSession = (sessionKey, sessionData) => {
  sessionStorage.setItem(sessionKey, JSON.stringify(sessionData));
};

//세션 가져오기
export const getSession = sessionKey => {
  const sessionData = sessionStorage.getItem(sessionKey); // 세션 스토리지에서 데이터 읽기
  return sessionData ? JSON.parse(sessionData) : null; // JSON으로 파싱
};
