import axios from "axios";

//axios연동(나의 만다라트 목록보기)
export const getMyplan = async ({ userId, subLocation }) => {
  try {
    const res = await axios.get(
      `${subLocation}api/project?searchFilter=1&userId=${userId}&page=1&size=30`,
    );
    //console.log("목록보기 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(나의 만다라트 상세보기)
export const getMyplanView = async ({ projectId, subLocation }) => {
  try {
    const res = await axios.get(
      `${subLocation}api/project?projectId=${projectId}`,
    );
    console.log("나의 만다라트 상세보기 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(나의 만다라트 검색하기)
export const searchMyplan = async data => {
  try {
    const res = await axios.get(
      `api/project?searchFilter=${data.searchFilter ? data.searchFilter : 1}&searchText=${data.searchText}&userId=${data.userId}&page=1&size=30`,
    );
    console.log("검색 결과 : ", res.data);
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
    return res.data; //결과 리턴
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
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(나의 만다라트 삭제하기)
export const deleteMyplan = async ({ projectId, userId }) => {
  console.log(projectId);
  try {
    const res = await axios.delete(
      `/api/project?projectId=${projectId}&userId=${userId}`,
    );
    //console.log("나의 만다라트 삭제 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};
