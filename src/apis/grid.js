import axios from "axios";

export const getGridData = async pId => {
  try {
    const res = await axios.get(`/api/mand?&projectId=${pId}`);
    console.log(res.data);
    return res;
  } catch (error) {
    console.log("데이터 불러오기 실패", error);
  }
};

export const patchGridData = async datas => {
  console.log(datas);
  try {
    const res = await axios.patch("/api/mand?update", datas);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("네트워크 연결을 확인 해주세요.", error);
  }
};
