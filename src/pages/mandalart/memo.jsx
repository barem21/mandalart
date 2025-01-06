if (normalData[4]?.[4].title === "" || normalData[4]?.[4].title === "주 목표") {
  alert("주 목표를 입력 및 저장 해주세요");
  openModal(normalData[4]?.[4].cellId);
  setSelectItem(normalData[4]?.[4]);
  setIsOpenModal(true);
} else if (showData[4].title === "" || showData[4].title === "서브 목표") {
  alert("서브 목표를 입력 및 저장 해주세요");
  openModal(showData[4].cellId);
  setSelectItem(showData[4]);
  setIsOpenModal(true);
} else {
  setSelectData(nowSelectItem);
  setIsModalOpen(true);
}

if (id === normalData[4][4].cellId && normalData[4]?.[4].title === "") {
  const nowSelectItem = normalData[4]?.[4];
  normalData[4][4].title = "주 목표";
  console.log(nowSelectItem);
  alert("주 목표 1 를 먼저 입력해주세요");
  setSelectData(nowSelectItem);
  setIsModalOpen(true);
} else if (id === normalData[4][4].cellId && normalData[4]?.[4].title !== "") {
  const nowSelectItem = normalData[4]?.[4];
  setSelectData(nowSelectItem);
  setIsModalOpen(true);
} else if (
  (showData[4].title === "" && normalData[4]?.[4].title === "") ||
  showData[4] === normalData[4]?.[4]
) {
  console.log("왜 실행돼1");
  openModal(normalData[4][4].cellId);
  normalData[4][4].title = "주 목표";
  alert("주 목표 1 를 먼저 입력해주세요");
  setIsModalOpen(true);
  console.log("왜 실행돼3");
} else if (showData[4].title === "" && normalData[4]?.[4].title !== "") {
  console.log("왜 실행돼2");
  showData[4].title = "서브 목표";
  openModal(showData[4].cellId);
  alert("서브 목표 2 를 먼저 입력해주세요");
} else {
  setSelectData(nowSelectItem);
  setIsModalOpen(true);
}

if (selectData.title === "") {
  alert("목표을 입력해주세요");
}
// 날짜 경고창

const isDateRangeInvalid =
  selectData.startDate >= normalData?.[4]?.[4]?.startDate &&
  selectData.finishDate <= normalData?.[4]?.[4]?.finishDate &&
  selectData.startDate >= newShowData?.[4]?.startDate &&
  selectData.finishDate <= newShowData?.[4]?.finishDate;
const isNormalDataInvalid =
  selectData === normalData?.[4]?.[4] &&
  (selectData.startDate === null || selectData.finishDate === null);
const isNewShowDataInvalid =
  (selectData === newShowData?.[4] &&
    (selectData.startDate === null || selectData.finishDate === null)) ||
  (selectData.startDate < normalData?.[4]?.[4]?.startDate &&
    selectData.finishDate > normalData?.[4]?.[4]?.finishDate);
if (
  selectData.mandalartId === normalData[4]?.[4].mandalartId &&
  selectData.startDate !== "" &&
  selectData.finishDate !== ""
) {
  getGridApiCall();
  setIsModalOpen(false);
} else if (selectData.startDate === null || selectData.finishDate === null) {
  alert("날짜를 확인해주세요.");
} else if (!isDateRangeInvalid || isNormalDataInvalid || isNewShowDataInvalid) {
  alert("날짜를 확인해주세요.");
  return;
} else {
  getGridApiCall();
  setIsModalOpen(false);
}
