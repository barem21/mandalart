import axios from "axios";

//axios연동(로그인)
export const loginMember = async data => {
  try {
    const res = await axios.post("api/user/signIn", data);
    console.log("로그인 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(회원가입)
export const joinMember = async data => {
  try {
    //파일은 string가 아니라 binary
    const formData = new FormData();

    /*
    formData.append("userId", data.userId);
    formData.append("upw", data.upw);
    formData.append("nickName", data.nickName);
    */

    if (data.pic) {
      formData.append("pic", data.pic); // 파일일 경우
    } else {
      formData.append("pic", null); // 파일이 없을 경우
    }

    //JSON 형태로 데이터를 만들어 formData에 추가
    formData.append(
      "p",
      new Blob(
        [
          JSON.stringify({
            userId: data.userId,
            upw: data.upw,
            nickName: data.nickName,
          }),
        ],
        { type: "application/json" },
      ),
    );

    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post("api/user/signUp", formData, header);
    console.log("회원가입 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(회원정보 수정)
export const editMember = async data => {
  try {
    //파일은 string가 아니라 binary
    const formData = new FormData();

    if (data.pic) {
      formData.append("pic", data.pic); // 파일일 경우
    } else {
      formData.append("pic", null); // 파일이 없을 경우
    }

    //JSON 형태로 데이터를 만들어 formData에 추가
    formData.append(
      new Blob(
        "p",
        [
          JSON.stringify({
            userId: data.userId,
            upw: data.upw,
            newUpw: data.newUpw,
            checkUpw: data.checkUpw,
            nickName: data.nickName,
          }),
        ],
        { type: "application/json" },
      ),
    );

    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.put("api/user", formData, header);
    console.log("회원정보 수정 결과 : ", res.data);
    return res.data; //결과 리턴
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
export const changePassword = async data => {
  try {
    const res = await axios.post("api/user/password", data);
    //console.log("임시비밀번호 발송 결과 : ", res.data);
    return res.data; //결과 리턴
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
