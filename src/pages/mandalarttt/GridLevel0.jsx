import { useEffect, useState } from "react";
import "./gridlevel0.css";

import GridLevel1_Main from "../mandalartt/GridLevel1_Main";
import { getGridData } from "../../apis/grid";

function GridLevel0() {
  const [mandalart] = useState(getGridData);

  const [normalData, setNormalData] = useState([
    // ...resultData.mandalart

    //0-8
    [
      {
        // 고유 값
        celldata: mandalart[10],
        cellId: "cell-0-0-0-0",
        // 연동
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[11],
        cellId: "cell-0-0-0-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[12],
        cellId: "cell-0-0-0-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[13],
        cellId: "cell-0-0-1-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[1],
        cellId: "cell-0-0-1-1",
        isActive: true,
        isbindKey: "cell-1-1-0-0",
      },
      {
        cellData: mandalart[14],
        cellId: "cell-0-0-1-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[15],
        cellId: "cell-0-0-2-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[16],
        cellId: "cell-0-0-2-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[17],
        cellId: "cell-0-0-2-2",
        isActive: false,
        isbindKey: null,
      },
    ],
    //9-17
    [
      {
        cellData: mandalart[18],
        cellId: "cell-0-1-0-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[19],
        cellId: "cell-0-1-0-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[20],
        cellId: "cell-0-1-0-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[21],
        cellId: "cell-0-1-1-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[2],
        cellId: "cell-0-1-1-1",
        isActive: false,
        isbindKey: "cell-1-1-0-1",
      },
      {
        cellData: mandalart[22],
        cellId: "cell-0-1-1-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[23],
        cellId: "cell-0-1-2-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[24],
        cellId: "cell-0-1-2-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[25],
        cellId: "cell-0-1-2-2",
        isActive: false,
        isbindKey: null,
      },
    ],
    //18-26
    [
      {
        cellData: mandalart[26],
        cellId: "cell-0-2-0-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[27],
        cellId: "cell-0-2-0-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[28],
        cellId: "cell-0-2-0-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[29],
        cellId: "cell-0-2-1-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[3],
        cellId: "cell-0-2-1-1",
        isActive: false,

        isbindKey: "cell-1-1-0-2",
      },
      {
        cellData: mandalart[30],
        cellId: "cell-0-2-1-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[31],
        cellId: "cell-0-2-2-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[32],
        cellId: "cell-0-2-2-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[33],
        cellId: "cell-0-2-2-2",
        isActive: false,
        isbindKey: null,
      },
    ],
    //27-35
    [
      {
        cellData: mandalart[34],
        cellId: "cell-1-0-0-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[35],
        cellId: "cell-1-0-0-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[36],
        cellId: "cell-1-0-0-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[37],
        cellId: "cell-1-0-1-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[4],
        cellId: "cell-1-0-1-1",
        isActive: false,
        isbindKey: "cell-1-1-1-0",
      },
      {
        cellData: mandalart[38],
        cellId: "cell-1-0-1-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[39],
        cellId: "cell-1-0-2-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[40],
        cellId: "cell-1-0-2-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[41],
        cellId: "cell-1-0-2-2",
        isActive: false,
        isbindKey: null,
      },
    ],
    //36-44
    [
      {
        cellData: mandalart[1],
        cellId: "cell-1-1-0-0",
        isActive: true,
        isbindKey: "cell-0-0-1-1",
      },
      {
        cellData: mandalart[2],
        cellId: "cell-1-1-0-1",
        isActive: true,
        isbindKey: "cell-0-1-1-1",
      },
      {
        cellData: mandalart[3],
        cellId: "cell-1-1-0-2",
        isActive: true,
        isbindKey: "cell-0-2-1-1",
      },
      {
        cellData: mandalart[4],
        cellId: "cell-1-1-1-0",
        isActive: true,
        isbindKey: "cell-1-0-1-1",
      },
      {
        cellData: mandalart[0],
        cellId: "cell-1-1-1-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[5],
        cellId: "cell-1-1-1-2",
        isActive: true,
        isbindKey: "cell-1-2-1-1",
      },
      {
        cellData: mandalart[6],
        cellId: "cell-1-1-2-0",
        isActive: true,
        isbindKey: "cell-2-0-1-1",
      },
      {
        cellData: mandalart[7],
        cellId: "cell-1-1-2-1",
        isActive: true,
        isbindKey: "cell-2-1-1-1",
      },
      {
        cellData: mandalart[8],
        cellId: "cell-1-1-2-2",
        isActive: true,
        isbindKey: "cell-2-2-1-1",
      },
    ],
    //45-53
    [
      {
        cellData: mandalart[42],
        cellId: "cell-1-2-0-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[43],
        cellId: "cell-1-2-0-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[44],
        cellId: "cell-1-2-0-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[45],
        cellId: "cell-1-2-1-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[5],
        cellId: "cell-1-2-1-1",
        isActive: false,
        isbindKey: "cell-1-1-1-2",
      },
      {
        cellData: mandalart[46],
        cellId: "cell-1-2-1-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[47],
        cellId: "cell-1-2-2-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[48],
        cellId: "cell-1-2-2-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[49],
        cellId: "cell-1-2-2-2",
        isActive: false,
        isbindKey: null,
      },
    ],
    //54-62
    [
      {
        cellData: mandalart[50],
        cellId: "cell-2-0-0-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[51],
        cellId: "cell-2-0-0-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[52],
        cellId: "cell-2-0-0-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[53],
        cellId: "cell-2-0-1-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[6],
        cellId: "cell-2-0-1-1",
        isActive: false,
        isbindKey: "cell-1-1-2-1",
      },
      {
        cellData: mandalart[54],
        cellId: "cell-2-0-1-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[55],
        cellId: "cell-2-0-2-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[56],
        cellId: "cell-2-0-2-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[57],
        cellId: "cell-2-0-2-2",
        isActive: false,
        isbindKey: null,
      },
    ],
    //63-71
    [
      {
        cellData: mandalart[58],
        cellId: "cell-2-1-0-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[59],
        cellId: "cell-2-1-0-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[60],
        cellId: "cell-2-1-0-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[61],
        cellId: "cell-2-1-1-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[7],
        cellId: "cell-2-1-1-1",
        isActive: false,
        isbindKey: "cell-1-1-2-2",
      },
      {
        cellData: mandalart[62],
        cellId: "cell-2-1-1-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[63],
        cellId: "cell-2-1-2-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[64],
        cellId: "cell-2-1-2-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[65],
        cellId: "cell-2-1-2-2",
        isActive: false,
        isbindKey: null,
      },
    ],
    //72-80
    [
      {
        cellData: mandalart[66],
        cellId: "cell-2-2-0-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[67],
        cellId: "cell-2-2-0-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[68],
        cellId: "cell-2-2-0-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[69],
        cellId: "cell-2-2-1-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[8],
        cellId: "cell-2-2-1-1",
        isActive: false,
        isbindKey: "cell-1-1-2-2",
      },
      {
        cellData: mandalart[70],
        cellId: "cell-2-2-1-2",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[71],
        cellId: "cell-2-2-2-0",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[72],
        cellId: "cell-2-2-2-1",
        isActive: false,
        isbindKey: null,
      },
      {
        cellData: mandalart[73],
        cellId: "cell-2-2-2-2",
        isActive: false,
        isbindKey: null,
      },
    ],
  ]);

  useEffect(() => {
    // console.log("normalData : ", normalData);
    getGridData;
  }, [normalData]);

  return (
    <div className="cbox">
      <div className="container">
        <div className="item">
          <GridLevel1_Main
            normalDataIndex={0}
            normalData={normalData}
            setNormalData={setNormalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            normalDataIndex={1}
            normalData={normalData}
            setNormalData={setNormalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            normalDataIndex={2}
            normalData={normalData}
            setNormalData={setNormalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            normalDataIndex={3}
            normalData={normalData}
            setNormalData={setNormalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            normalDataIndex={4}
            normalData={normalData}
            setNormalData={setNormalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            normalDataIndex={5}
            normalData={normalData}
            setNormalData={setNormalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            normalDataIndex={6}
            normalData={normalData}
            setNormalData={setNormalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            normalDataIndex={7}
            normalData={normalData}
            setNormalData={setNormalData}
          />
        </div>
        <div className="item">
          <GridLevel1_Main
            normalDataIndex={8}
            normalData={normalData}
            setNormalData={setNormalData}
          />
        </div>
      </div>
    </div>
  );
}

export default GridLevel0;
