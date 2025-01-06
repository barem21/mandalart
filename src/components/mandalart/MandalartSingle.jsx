import styles from "./MandalartSingle.module.css";
import { useLocation } from "react-router-dom";

function MandalartSingle({ jsonData, openModal }) {
  // 변수선언

  const location = useLocation(); // 현재 경로 정보
  const modalOpenPath = "/myplan/edit"; // 모달이 열려야 하는 경로

  let mandalatSingleArr = Array.from(Array(3).fill({}), () =>
    new Array(3).fill({}),
  ); // 3 x 3 빈배열 생성

  // 함수 정의

  // 버튼 클릭시 모달 표시
  const handleClick = value => {
    openModal(value);
  };

  // 행(y)과 열(x)을 바탕으로 테이블 셀을 생성합니다.
  const renderTable = () => {
    return mandalatSingleArr.map((valueArr, rowIndex) => (
      <tr key={`row-${rowIndex}`}>
        {valueArr.map((value, colIndex) => {
          return (
            <td
              style={{ backgroundColor: value.bgColor }}
              key={`cell-${rowIndex}-${colIndex}`}
            >
              <button
                style={{
                  cursor:
                    location.pathname === modalOpenPath ? "pointer" : "default",
                }}
                onClick={() => handleClick(value)}
              >
                {value.title}
              </button>
            </td>
          );
        })}
      </tr>
    ));
  };

  // 컴포넌트 로직 처리

  if (jsonData.mandalartId != null) {
    mandalatSingleArr[1][1] = jsonData;

    let idxX = 0;
    let idxY = 0;

    for (const item of jsonData.child) {
      if (idxX == 1 && idxY == 1) {
        idxX++;
      }

      mandalatSingleArr[idxY][idxX] = item;

      idxX++;

      if (idxX == 3) {
        idxX = 0;
        idxY++;
      }
    }
  }

  return (
    <table className={styles.MandalartSingleTable}>
      <tbody>{renderTable()}</tbody>
    </table>
  );
}

export default MandalartSingle;
