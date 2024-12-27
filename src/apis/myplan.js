import axios from "axios";

//axios연동(나의 만다라트 가져오기)
export const getMyplan = async () => {
  //console.log(data);
  //const data = { user };
  try {
    //const res = { data: "ok" };
    const res = await axios.get(
      `api/project?searchFilter=1&userId=test@gmail.com&page=1&size=30`,
    );
    //console.log("목록보기 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(나의 만다라트 등록하기)
export const postMyplan = async data => {
  console.log(data);
  try {
    const res = await axios.post("api/project", data);
    //console.log("등록하기 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(나의 만다라트 수정하기)
export const editMyplan = async data => {
  //console.log(data);
  try {
    const res = { data: "ok" };
    //const res = await axios.patch("api/project", data);
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
    //const res = await axios.delete("api/project", data);
    //console.log("회원탈퇴 결과 : ", res.data);
    return res; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};
