import axios from "axios";

export const getGridData = async () => {
  try {
    const res = await axios.get(`api/mand`);
    return res;
  } catch (error) {
    console.log("404 데이터 불러오기 실패", error);
  }
};
