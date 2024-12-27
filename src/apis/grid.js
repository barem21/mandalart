import axios from "axios";

export const getGridData = async data => {
  try {
    const res = await axios.get(`api/mand?&projectId={datas.projectId}`);
    return res;
  } catch (error) {
    console.log("404 데이터 불러오기 실패", error);
  }
};

export const postGridData = async data => {
  try {
    const res = await axios.post(`api/mand?projectId={datas.projectId}`);
    return res;
  } catch (error) {
    console.log("네트워크 연결을 확인 해주세요.", error);
  }
};
