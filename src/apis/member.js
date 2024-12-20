import axios from "axios";

//axios연동(로그인)
export const loginMember = async data => {
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
