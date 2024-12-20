import axios from "axios";

//axios연동(복사하기)
export const postCopy = async data => {
  //console.log(data);
  try {
    const res = { data: "ok" };
    //const res = await axios.post("http://192.168.0.106:5000/share", data);
    //console.log("복사하기 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(공유하기 삭제)
export const deleteShare = async data => {
  //console.log(data);
  try {
    const res = { data: "ok" };
    //const res = await axios.delete("http://192.168.0.106:5000/share", data);
    //console.log("회원탈퇴 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};
