import styles from "./Mandalart.module.css";
import MandalartSingle from "./MandalartSingle";
import { getGridData } from "../../apis/grid";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PopupLayout from "../../components/PopupLayout";

function MandalartVer2({ projectId }) {
  // 변수 선언

  const location = useLocation(); // 현재 경로 정보
  const modalOpenPath = "/myplan/edit"; //모달이 열려야 하는 경로

  const [isModalVisible, setIsModalVisible] = useState(false); // 모달 팝업 상태
  const [modalData, setModalData] = useState(null); // 모달에 전달할 데이터
  const [mandalatsArrResult, setMandalartArrResult] = useState([]); // 그러질 만다라트 리스트

  // 함수 선언

  //모달 닫기
  const closeModal = () => {
    setIsModalVisible(false);
  };

  //모달 열기
  const openModal = value => {
    setModalData(value);
    setIsModalVisible(true);
  };

  // 모달 인풋 변경 감지
  const handleChange = event => {
    const { name, value } = event.target;
    setModalData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 모달 인풋 변경 감지(라디오 버튼)
  const handleRadioChange = value => {
    setModalData(prevData => ({
      ...prevData,
      completedFg: value,
    }));
  };

  // 저장하기 버튼 클릭시 path요청 보냄
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      // 백엔드로 데이터 보내기 (POST 요청)
      const response = await axios.patch(`/api/mand/update`, modalData);
      console.log("서버 응답:", response.data);

      const responseData = response.data;

      if (responseData.statusCode !== "200") {
        // 응답 코드가 "200"이 아니라면(실패) 경고메세지 보여주고 아무처리 하지 않음.
        alert(responseData.resultMsg);
      } else {
        // 성공이면 만다라트 다시 그림
        closeModal();
        getGridApiCall();
      }
    } catch (error) {
      alert("요청 실패:", error);
    }
  };

  // 만다라트 데이터 초기화
  const getGridApiCall = async () => {
    const mandDatas = await getGridData(projectId);

    let mandalarts = mandDatas.mandalart;
    // 들어갈 로직(아직 미구현)
    // 1 ~ 2 레벨 분리
    let dept0Mandalart = mandalarts.find(obj =>
      obj.depth == 0 ? true : false,
    );
    let dept1MandalartArr = mandalarts.filter(obj =>
      obj.depth == 1 ? true : false,
    );
    let dept2MandalartArr = mandalarts.filter(obj =>
      obj.depth == 2 ? true : false,
    );

    // orderId 순으로 정렬
    dept1MandalartArr = dept1MandalartArr.sort((a, b) => a.orderId - b.orderId);
    dept2MandalartArr = dept2MandalartArr.sort((a, b) => a.orderId - b.orderId);

    // 1레벨 트리화(1lv 밑에 2lv 데이터가 올 수 있게)
    dept0Mandalart.child = new Array();

    // lv1에 lv2 값들 삽입
    for (const item of dept1MandalartArr) {
      if (dept0Mandalart.mandalartId == item.parentId) {
        dept0Mandalart.child.push(item);
      }
    }

    // 2레벨 트리화(2lv 밑에 3lv 데이터가 올 수 있게)
    for (let i = 0; i < dept1MandalartArr.length; i++) {
      dept1MandalartArr[i].child = new Array();

      // lv1에 lv2 값들 삽입
      for (const item of dept2MandalartArr) {
        if (dept1MandalartArr[i].mandalartId == item.parentId) {
          dept1MandalartArr[i].child.push(item);
        }
      }
    }

    // 만다라트 생성
    const mandalatsArr = new Array(9).fill({});

    mandalatsArr[4] = dept0Mandalart;

    let idx = 0;

    for (const item of dept1MandalartArr) {
      if (idx == 4) {
        idx++;
      }

      mandalatsArr[idx] = item;
      idx++;
    }
    setMandalartArrResult(mandalatsArr);
  };

  useEffect(() => {
    getGridApiCall();
  }, []);

  // 9개의 (소)만다라트를 생성
  return (
    <>
      <div className={styles.MandalartWrap}>
        {mandalatsArrResult.map((value, index) => {
          return (
            <div key={index}>
              <MandalartSingle jsonData={value} openModal={openModal} />
            </div>
          );
        })}
      </div>
      {isModalVisible && location.pathname === modalOpenPath && (
        <PopupLayout isVisible={isModalVisible} onClose={closeModal}>
          <input type="hidden" value={modalData.parentId} />
          <div className="inputBox">
            <label htmlFor="title">실천목표 입력</label>
            <input
              type="text"
              id="title"
              name="title"
              maxLength={50}
              className="popupInput"
              placeholder="실천 목표를 입력하세요."
              value={modalData?.title}
              onChange={handleChange}
            />
          </div>

          <div className="inputBox">
            <label htmlFor="startDate">시작일</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="popupInput"
              value={modalData?.startDate}
              onChange={handleChange}
            />
          </div>

          <div className="inputBox">
            <label htmlFor="startDate">종료일</label>
            <input
              type="date"
              id="finishDate"
              name="finishDate"
              className="popupInput"
              value={modalData?.finishDate}
              onChange={handleChange}
            />
          </div>

          <div className="inputBox">
            <label htmlFor="contents">세부내용 작성</label>
            <textarea
              id="contents"
              name="contents"
              className="popupTextarea"
              placeholder="간단설명을 입력하세요."
              value={modalData.contents}
              onChange={handleChange}
            />
          </div>
          {modalData.depth == 2 && (
            <div style={{ display: "flex", marginBottom: "15px" }}>
              <span style={{ marginRight: "20px" }}>달성 여부</span>
              <div
                style={{ display: "inline", alignItems: "center", gap: "20px" }}
              >
                <input
                  type="radio"
                  name="completedFg"
                  value="0"
                  checked={modalData.completedFg === 0}
                  onChange={() => handleRadioChange(0)}
                />
                &nbsp;진행 중
                <input
                  style={{ marginLeft: "20px" }}
                  type="radio"
                  name="completedFg"
                  value="1"
                  checked={modalData.completedFg === 1}
                  onChange={() => handleRadioChange(1)}
                />
                &nbsp;달성 완료
              </div>
            </div>
          )}

          <div className="buttonWrap">
            <button type="button" className="btnPopLine" onClick={closeModal}>
              취소하기
            </button>
            <button
              type="submit"
              className="btnPupColor"
              onClick={handleSubmit}
            >
              저장하기
            </button>
          </div>
        </PopupLayout>
      )}
    </>
  );
}

export default MandalartVer2;
