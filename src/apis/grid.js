import axios from "axios";

export const getGridData = async projectId => {
  try {
    const res = await axios.get(`/api/mand?projectId=${projectId}`);
    //console.log(projectId);
    // console.log(res.data);
    const resultObj = res.data.resultData;
    // console.log("너 누구니 ?", resultObj);
    return resultObj;
  } catch (error) {
    console.log(" 데이터 불러오기 실패", error);
  }
};

export const patchGridData = async updatedSelectData => {
  try {
    //console.log(projectId);
    // console.log(updatedSelectData);
    const obj = updatedSelectData;
    const {
      mandalartId,
      title,
      contents,
      completedFg,
      startDate,
      finishDate,
      parentId,
    } = obj;
    const objData = {
      mandalartId,
      title,
      contents,
      completedFg,
      startDate,
      finishDate,
      parentId,
    };
    const res = await axios.patch("/api/mand/update", objData);
    // console.log(objData);
    return res;
  } catch (error) {
    console.log("네트워크 연결을 확인 해주세요.", error);
  }
};
