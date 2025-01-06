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
    //console.log("검색 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(나의 만다라트 등록하기)
export const postMyplan = async data => {
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
  try {
    //파일은 string가 아니라 binary
    const formData = new FormData();

    if (data.pic[0]) {
      formData.append("pic", data.pic[0]); // 파일일 경우
    } else {
      formData.append("pic", null); // 파일이 없을 경우
    }

    //JSON 형태로 데이터를 만들어 formData에 추가
    formData.append(
      "p",
      new Blob(
        [
          JSON.stringify({
            projectId: data.projectId,
            userId: data.userId,
            title: data.title,
            content: data.content,
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
    const res = await axios.patch("/api/project", formData, header);
    //console.log("등록하기 결과 : ", res.data);
    return res.data; //결과 리턴
  } catch (error) {
    console.log(error);
    return error;
  }
};

//axios연동(나의 만다라트 삭제하기)
export const deleteMyplan = async ({ projectId, userId }) => {
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

//나의 만다라트 정보 조회
export const getMyPlanData = async projectId => {
  try {
    const res = await axios.get(`/api/mand?projectId=${projectId}`);
    //console.log("만다라트 데이터 : ", res.data);
    return res.data;
  } catch (error) {
    console.log(" 데이터 불러오기 실패", error);
    return error;
  }
};
