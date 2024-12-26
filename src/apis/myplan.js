import axios from "axios";

//axios연동(나의 만다라트 가져오기)
export const getMyplan = async data => {
  //console.log(data);
  try {
    const res = { data: "ok" };
    //const res = await axios.get(`api/project?user_id={user_id}&search_text={search_text}&search_filter={search_filter}&page={page}&size={size}`, data);
    //console.log("등록하기 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(나의 만다라트 등록하기)
export const postMyplan = async data => {
  //console.log(data);
  try {
    const res = { data: "ok" };
    //const res = await axios.post("api/project", data);
    //console.log("등록하기 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(나의 만다라트 삭제하기)
export const deleteMyplan = async data => {
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
