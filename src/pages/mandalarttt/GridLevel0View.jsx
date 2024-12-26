import { useEffect, useState } from "react";
import "./gridlevel0.css";

import GridLevel1_MainView from "../mandalartt/GridLevel1_MainView";

function GridLevel0View() {
  const [nomalData, setNomalData] = useState([
    //0-8
    [
      {
        mandalart_id: "cell-0-0-0-0",
        title: "t1",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,

        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-0-1",
        title: "t2",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-0-2",
        title: "t3",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-1-0",
        title: "t4",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-1-1",
        title: "t5",
        content: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-1-1-0-0",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-1-2",
        title: "t6",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-2-0",
        title: "t7",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-2-1",
        title: "t8",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-0-2-2",
        title: "t9",
        content: "",
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
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-0-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-0-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-1-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-1-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: "cell-1-1-0-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-1-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-2-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-2-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-1-2-2",
        title: "",
        content: "",
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
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-0-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-0-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-1-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-1-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,

        isbindKey: "cell-1-1-0-2",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-1-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-2-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-2-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-0-2-2-2",
        title: "",
        content: "",
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
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-0-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-0-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-1-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-1-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: "cell-1-1-1-0",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-1-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-2-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-2-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-0-2-2",
        title: "",
        content: "",
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
        content: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-0-0-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-0-1",
        title: "t37",
        content: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-0-1-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-0-2",
        title: "t38",
        content: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-0-2-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-1-0",
        title: "t39",
        content: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-1-0-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-1-1",
        title: "t40",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-1-2",
        title: "t41",
        content: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-1-2-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-2-0",
        title: "t42",
        content: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-2-0-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-2-1",
        title: "t43",
        content: "",
        startdate: "",
        enddate: "",
        isActive: true,
        isbindKey: "cell-2-1-1-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-1-2-2",
        title: "t44",
        content: "",
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
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "yellow",
      },
      {
        mandalart_id: "cell-1-2-0-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-0-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-1-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-1-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: "cell-1-1-1-2",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-1-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-2-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-2-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-1-2-2-2",
        title: "",
        content: "",
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
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-0-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-0-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-1-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-1-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: "cell-1-1-2-1",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-1-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-2-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-2-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-0-2-2",
        title: "",
        content: "",
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
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-0-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-0-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-1-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-1-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: "cell-1-1-2-2",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-1-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-2-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-2-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-1-2-2",
        title: "",
        content: "",
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
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-0-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-0-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-1-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-1-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: "cell-1-1-2-2",
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-1-2",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-2-0",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-2-1",
        title: "",
        content: "",
        startdate: "",
        enddate: "",
        isActive: false,
        isbindKey: null,
        bgcolor: "skyblue",
      },
      {
        mandalart_id: "cell-2-2-2-2",
        title: "",
        content: "",
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
          <GridLevel1_MainView
            nomalDataIndex={0}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_MainView
            nomalDataIndex={1}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_MainView
            nomalDataIndex={2}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_MainView
            nomalDataIndex={3}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_MainView
            nomalDataIndex={4}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_MainView
            nomalDataIndex={5}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_MainView
            nomalDataIndex={6}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_MainView
            nomalDataIndex={7}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
        <div className="item">
          <GridLevel1_MainView
            nomalDataIndex={8}
            nomalData={nomalData}
            setNomalData={setNomalData}
          />
        </div>
      </div>
    </div>
  );
}

export default GridLevel0View;
