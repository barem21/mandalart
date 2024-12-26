import { useEffect, useState } from "react";
import "./gridLevel1_1.css";

function GridLevel1_MainView({ nomalDataIndex, nomalData, setNomalData }) {
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    setShowData(nomalData[nomalDataIndex]);
  }, [nomalData]);
  // 모달 열기

  return (
    <div>
      <div className="sub-container">
        {/* 각 셀 */}
        {showData?.map((item, index) => (
          <div
            key={index}
            id={item.mandalart_id}
            className="sub-item"
            style={{
              backgroundColor: item.bgcolor,
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridLevel1_MainView;
