import { useEffect, useState } from "react";
import "./gridlevel0.css";

import GridLevel1_Main from "../mandalartt/GridLevel1_Main";

function GridLevel0() {
  const [nomalData, setNomalData] = useState([
    // ...resultData.mandalart

    //0-8
    [
      {
        // 고유 값
        mandalart_id: "cell-0-0-0-0",
        // 프로젝트 아이디
        project_id: "",
        // 각 단계별 순서
        order_id: "",
        // 실전목표
        title: "t1",
        // 세부내용
        contents: "",
        // 시작, 끝 날짜
        startdate: "",
        enddate: "",
        // 단계 0(중앙) , 1단계 , 2단계
        depth: 0,
        bgcolor: "skyblue",
        // 미완료: 0 , 완료 : 1
        completed_fg: 0,
        // 연동
        isActive: false,
        isbindKey: null,
      },
      {
        mandalart_id: "cell-0-0-0-1",
        title: "t2",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-0-2",
        title: "t3",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-1-0",
        title: "t4",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-1-1",
        title: "t5",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-1-1-0-0",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-1-2",
        title: "t6",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-2-0",
        title: "t7",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-2-1",
        title: "t8",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-2-2",
        title: "t9",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
    ],
    //9-17
    [
      {
        mandalart_id: "cell-0-1-0-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-0-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-0-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-1-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-1-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: "cell-1-1-0-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-1-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-2-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-2-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-2-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
    ],
    //18-26
    [
      {
        mandalart_id: "cell-0-2-0-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-0-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-0-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-1-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-1-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,

        isbindKey: "cell-1-1-0-2",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-1-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-2-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-2-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-2-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
    ],
    //27-35
    [
      {
        mandalart_id: "cell-1-0-0-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-0-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-0-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-1-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-1-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: "cell-1-1-1-0",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-1-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-2-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-2-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-2-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
    ],
    //36-44
    [
      {
        mandalart_id: "cell-1-1-0-0",
        title: "t36",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-0-0-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-0-1",
        title: "t37",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-0-1-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-0-2",
        title: "t38",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-0-2-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-1-0",
        title: "t39",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-1-0-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-1-1",
        title: "t40",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-1-2",
        title: "t41",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-1-2-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-2-0",
        title: "t42",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-2-0-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-2-1",
        title: "t43",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-2-1-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-2-2",
        title: "t44",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-2-2-1-1",
        bgcolor: "skyblue",
      },
    ],
    //45-53
    [
      {
        mandalart_id: "cell-1-2-0-0",
        title: "t45",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "yellow",
      },
      {
        mandalart_id: "cell-1-2-0-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-0-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-1-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-1-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: "cell-1-1-1-2",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-1-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-2-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-2-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-2-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
    ],
    //54-62
    [
      {
        mandalart_id: "cell-2-0-0-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-0-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-0-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-1-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-1-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: "cell-1-1-2-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-1-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-2-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-2-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-2-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
    ],
    //63-71
    [
      {
        mandalart_id: "cell-2-1-0-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-0-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-0-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-1-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-1-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: "cell-1-1-2-2",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-1-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-2-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-2-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-2-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
    ],
    //72-80
    [
      {
        mandalart_id: "cell-2-2-0-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-0-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-0-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-1-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-1-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: "cell-1-1-2-2",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-1-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-2-0",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-2-1",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-2-2",
        title: "",
        contents: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
    ],
  ]);

  useEffect(() => {
    console.log("nomalData : ", nomalData);
  }, [nomalData]);

  return (
    <div className="cbox">
      <div className="container">
        <div className="item">
          <GridLevel1_Main
            nomalDataIndex={0}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            nomalDataIndex={1}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            nomalDataIndex={2}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            nomalDataIndex={3}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            nomalDataIndex={4}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            nomalDataIndex={5}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            nomalDataIndex={6}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            nomalDataIndex={7}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            nomalDataIndex={8}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
      </div>
    </div>
  );
}

export default GridLevel0;
