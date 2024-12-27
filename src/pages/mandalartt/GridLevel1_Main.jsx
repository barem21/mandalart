import { useEffect, useState } from "react";
import "./gridLevel1_1.css";
import { patchGridData } from "../../apis/grid";

function GridLevel1_Main({ normalDataIndex, normalData, setNormalData }) {
  // 현재 선택된 객체의 정보 한개를 보관
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 팝업창에 보여줄 변경 되고 있는 데이터
  const [selectData, setSelectData] = useState(null);
  // 현재 9칸의 데이터를 가지고 있음.
  const [showData, setShowData] = useState(null);
  const [subClear, setSubClear] = useState(0);
  const [color, setColor] = useState(true);
  // 제외 셀
  const exceptionCell = cellId => {
    switch (cellId) {
      case "cell-0-0-1-1":
      case "cell-0-1-1-1":
      case "cell-0-2-1-1":
      case "cell-1-0-1-1":
      case "cell-1-1-1-0":
      case "cell-1-1-1-1":
      case "cell-1-1-1-2":
      case "cell-1-1-0-0":
      case "cell-1-1-0-1":
      case "cell-1-1-0-2":
      case "cell-1-1-2-0":
      case "cell-1-1-2-1":
      case "cell-1-1-2-2":
      case "cell-1-2-1-1":
      case "cell-2-0-1-1":
      case "cell-2-1-1-1":
      case "cell-2-2-1-1":
        setColor(false);
        break;
      default:
        setColor(true);
    }
  };
  const exceptionCellId = [
    "cell-0-0-1-1",
    "cell-0-1-1-1",
    "cell-0-2-1-1",
    "cell-1-0-1-1",
    "cell-1-1-1-0",
    "cell-1-1-1-1",
    "cell-1-1-1-2",
    "cell-1-1-0-0",
    "cell-1-1-0-1",
    "cell-1-1-0-2",
    "cell-1-1-2-0",
    "cell-1-1-2-1",
    "cell-1-1-2-2",
    "cell-1-2-1-1",
    "cell-2-0-1-1",
    "cell-2-1-1-1",
    "cell-2-2-1-1",
  ];

  // 색깔
  const handleClearChange = event => {
    const subSelect = event.target.value;
    setSubClear(subSelect);
  };
  const handleSubmit = e => {
    // 웹브라우저 새로고침 방지
    e.preventDefault();
    patchGridData({ ...normalData });
  };
  useEffect(() => {
    setShowData(normalData[normalDataIndex]);
  }, [normalData]);
  // 모달 열기
  const openModal = id => {
    // 선택된 객체 정보 한개를 보관
    setSelectData(showData.find(item => item.cellId === id));
    // 완료미완료 선택창 제외 셀 case
    exceptionCell(id);
    console.log(showData);
    setIsModalOpen(true);
  };
  // 모달 입력값 변경 처리
  const handleModalChange = e => {
    const { name, value } = e.target;
    setSelectData(prevData => ({ ...prevData, [name]: value }));
  };

  // 모달 데이터 저장
  const saveModalData = () => {
    // 9개의 보여지고 있는 데이터를 변경 된 데이터로 변경
    const newShowData = showData.map(item => {
      if (item.cellId === selectData.cellId) {
        return { ...item, ...selectData };
      }
      return item;
    });
    // console.log("newShowData ? ", newShowData);
    // setShowData(newShowData);

    // 원본 데이터 참조
    const originalData = [...normalData];
    // isbindKey 로 연결된 것을 찾아서 변경
    const sortArr = originalData.map(itemOrign => {
      newShowData.map(item => {
        if (item.isbindKey) {
          itemOrign.map(itemNow => {
            if (item.isbindKey === itemNow.cellId) {
              itemNow.title = item.title;
            }
            if (item.cellId === itemNow.cellId) {
              itemNow.title = item.title;
            }
          });
        }
      });

      return itemOrign;
    });

    // 원본 데이터도 변경을 해야 한다.
    setNormalData([...sortArr]);
    const updatednormalData = [...normalData];
    updatednormalData[normalDataIndex] = newShowData;

    // 원본 데이터와 showData 동기화
    setNormalData(updatednormalData);
    setShowData(newShowData);
    patchGridData(showData);
    // 데이터 색
    // console.log(selectData.cellId);
    console.log(selectData.title);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="sub-container">
        {/* 각 셀 */}
        {showData?.map((item, index) => (
          <div
            key={index}
            id={item.cellId}
            onClick={() => openModal(item.cellId)}
            className="sub-item"
            style={{
              backgroundColor: item.bgcolor,
            }}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="modal-overlay">
          <form onSubmit={e => handleSubmit(e)}>
            <div className="modal">
              <label>
                제목:
                <input
                  type="text"
                  name="title"
                  value={selectData.title}
                  onChange={handleModalChange}
                />
              </label>
              <label
                style={{
                  display: exceptionCellId.includes(selectData.cellId)
                    ? "none"
                    : "block",
                }}
              >
                내용:
                <textarea
                  name="content"
                  value={selectData.content}
                  onChange={handleModalChange}
                />
              </label>
              <label>
                시작 날짜:
                <input
                  className="planDate"
                  type="date"
                  name="startdate"
                  value={selectData.startdate}
                  onChange={handleModalChange}
                />
              </label>
              <label>
                종료 날짜:
                <input
                  className="planDate"
                  type="date"
                  name="enddate"
                  value={selectData.enddate}
                  onChange={handleModalChange}
                />
              </label>
              {color && (
                <div className="selectbox">
                  <select value={subClear} onChange={handleClearChange}>
                    <option value="0">미완료</option>
                    <option value="1">완료</option>
                  </select>
                </div>
              )}

              <div className="modal-buttons">
                <button onClick={saveModalData}>
                  {selectData.title === undefined ? "저장" : "수정"}
                </button>
                <button onClick={() => setIsModalOpen(false)}>취소</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default GridLevel1_Main;
