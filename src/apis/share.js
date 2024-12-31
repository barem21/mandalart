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

//axios연동(공유 만다라트 목록보기)
export const getShare = async ({ userId, subLocation }) => {
  try {
    const res = await axios.get(
      `${subLocation}api/shared_project?searchFilter=1&userId=${userId}&page=1&size=30`,
    );
    //console.log("목록보기 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(공유 만다라트 상세보기)
export const getShareView = async ({ projectId, subLocation }) => {
  try {
    const res = await axios.get(
      `${subLocation}api/shared_project?projectId=${projectId}`,
    );
    console.log("공유 만다라트 상세보기 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(공유 만다라트 검색하기)
export const searchShare = async data => {
  console.log(data);
  try {
    const res = await axios.get(
      `/api/shared_project?orderFilter=${data.orderFilter ? data.orderFilter : 0}&searchFilter=${data.searchFilter ? data.searchFilter : 1}&searchText=${data.searchText}&userId=${data.userId}&page=1&size=30`,
    );
    console.log("검색 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(공유 만다라트 등록하기)
export const postShare = async data => {
  console.log(data);
  try {
    const res = await axios.post("/api/shared_project", data);
    console.log("등록하기 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(공유 만다라트 수정하기)
export const editShare = async data => {
  //console.log(data);
  try {
    const res = { data: "ok" };
    //const res = await axios.patch("api/shared_project", data);
    //console.log("등록하기 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(공유 만다라트 삭제하기)
export const deleteShare = async ({ projectId, userId }) => {
  try {
    const res = await axios.delete(
      `/api/shared_project?projectId=${projectId}&userId=${userId}`,
    );
    //console.log("공유 만다라트 삭제 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(공유 만다라트 댓글가져오기)
export const getComment = async ({ projectId }) => {
  try {
    const res = await axios.get(
      `/api/shared_project/comments?projectId=${projectId}`,
    );
    //console.log("댓글 등록하기 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(공유 만다라트 댓글작성)
export const postComment = async data => {
  try {
    const res = await axios.post("/api/shared_project/comments", data);
    //console.log("댓글 등록하기 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(공유 만다라트 댓글수정)
export const editComment = async data => {
  //console.log(data);
  try {
    const res = await axios.patch("/api/shared_project/comments", data);
    //console.log("댓글 수정하기 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(공유 만다라트 댓글삭제)
export const deleteComment = async ({ commentId, userId }) => {
  try {
    const res = await axios.delete(
      `/api/shared_project/comments?commentId=${commentId}&userId=${userId}`,
    );
    //console.log("댓글 삭제하기 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//좋아요 추가삭제
export const addLikeIt = async ({ projectId, userId }) => {
  const data = {
    projectId: projectId,
    userId: userId,
  };
  try {
    const res = await axios.post(`/api/shared_project/like`, data);
    //console.log("좋아요 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteLikeIt = async ({ projectId, userId }) => {
  try {
    const res = await axios.delete(`/api/shared_project/like`, {
      data: { projectId: projectId, userId: userId },
    });
    //console.log("좋아요 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postMention = async data => {
  try {
    const res = {};
    return res;
  } catch (error) {
    console.log(error);
  }
};
