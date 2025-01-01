import styled from "@emotion/styled";
import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import PopupLayout from "../../components/PopupLayout";
import { deleteMyplan, getMyPlanData } from "../../apis/myplan";
import GridLevel0View from "../mandalarttt/GridLevel0View";
import { getSession } from "../../apis/member";

const LOGIN_SESSION_KEY = "login_session";

const MandalartDetailView = styled.div`
  .detailWrap {
    max-width: 1200px;
    margin: 0 auto;
    border-top: 1px solid #242424;
  }
  .detailWrap .borderNone {
    border-bottom: none !important;
  }
  .detailWrap .share {
    margin-left: 10px;
    color: #55ad9b;
    font-weight: 500;
  }
  .detailWrap .inputBox {
    display: flex;
    align-items: center;
    padding: 20px 0px;
    border-bottom: 1px solid #eee;
  }
  .detailWrap .inputBox label {
    display: inline-block;
    min-width: 200px;
  }
  .detailWrap .viewType {
    display: flex;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 40px;
  border-top: 1px solid #eee;
`;

function ViewMandalart() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const projectId = searchParams.get("projectId"); //개별 데이터로 뜯기
  const sessionData = getSession(LOGIN_SESSION_KEY);

  //const divBox = 81; //총 div
  const [myPlanView, setMyPlanView] = useState([]); //만다라트 게시물 정보
  const [mandalartView, setMandalartView] = useState([]); //만다라트 정보

  const [isDeleteVisible, setIsDeleteVisible] = useState(false); //삭제하기 팝업

  const closeModal = () => {
    setIsDeleteVisible(false);
  };

  //만다라트 정보 호출
  const getMandalartInfo = async () => {
    try {
      const result = await getMyPlanData(projectId); //axios
      console.log("만다라트 호출 : ", result.resultData);
      setMyPlanView(result.resultData); //불러온 만다라트 정보 담기
      setMandalartView(result.resultData.mandalart); //불러온 만다라트 따로 담기
    } catch (error) {
      console.log("검색 실패:", error);
    }
  };

  //그래프 데이터 처리
  const chartData = [
    {
      id: mandalartView[0]?.title ? mandalartView[0]?.title : "no-data",
      label: mandalartView[0]?.title ? mandalartView[0]?.title : "no-data",
      value: 300,
      color: "",
    },
    {
      id: "제구",
      label: "제구",
      value: 110,
      color: "",
    },
    {
      id: "구위",
      label: "구위",
      value: 110,
      color: "",
    },
    {
      id: "맨탈",
      label: "맨탈",
      value: 80,
      color: "",
    },
    {
      id: "스피드 160km/h",
      label: "스피드 160km/h",
      value: 50,
      color: "",
    },
    {
      id: "인간성",
      label: "인간성",
      value: 120,
      color: "",
    },
    {
      id: "운",
      label: "운",
      value: 50,
      color: "",
    },
    {
      id: "변화구",
      label: "변화구",
      value: 150,
      color: "",
    },
  ];

  /*
  const getMyplan = async () => {
    try {
      const result = await getMyplanView({
        projectId: projectId,
        subLocation: "/",
      }); //axios
      setMyPlanView(result.resultData);
    } catch (error) {
      console.log(error);
    }
  };
  */

  const handleDeleteSubmit = async e => {
    e.preventDefault(); //submit 동작 방지

    try {
      const result = await deleteMyplan({
        projectId: projectId,
        userId: sessionData.userId,
      }); //axios(삭제요청)

      if (result.resultData === 1) {
        alert("나의 만다라트 계획표를 삭제하였습니다.");
        navigate("/myplan");
      } else {
        alert(
          "나의 만다라트 계획표 삭제가 실패되었습니다.\n다시 시도해 주세요.",
        );
      }
    } catch (error) {
      console.log("나의 만다라트 계획표 삭제 실패:", error);
    }
  };

  useEffect(() => {
    //getMyplan();
    getMandalartInfo(); //만다라트 가져오기
  }, []);

  return (
    <MandalartDetailView>
      <h1 className="subTitle">나의 만다라트 상세보기</h1>
      <div className="detailWrap">
        <div className="inputBox">
          <label>제목</label>
          <span>
            {myPlanView.title}
            {myPlanView.sharedFg === 1 && (
              <span className="share">[공유중]</span>
            )}
          </span>
        </div>
        <div className="inputBox">
          <label>작성자/작성일</label>
          <span>
            {myPlanView.nickName} / {myPlanView.createdAt}
          </span>
        </div>
        <div
          className="inputBox borderNone"
          style={{ alignItems: "flex-start" }}
        >
          <label>계획표 보기</label>
          <div className="viewType">
            <button className="btnColor">만다라트로 보기</button>
            <button className="btnLine">캘린더로 보기</button>
          </div>
        </div>
        <div className="inputBox">
          <label></label>
          <div
            style={{
              gap: "20px",
            }}
          >
            {/* 만다라트 계획표 출력 */}

            <div>
              <GridLevel0View projectId={projectId} />
            </div>

            <div>{myPlanView.content}</div>
          </div>
        </div>

        <div className="inputBox borderNone">
          <label>통계보기</label>
          <div
            style={{
              minWidth: "800px",
              height: "500px",
              margin: "0 auto",
            }}
          >
            {/*그래프 출력*/}
            <ResponsivePie
              data={chartData}
              margin={{ top: 20, right: 0, bottom: 100, left: 0 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
              }}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000",
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>

        <ButtonWrap>
          <button className="btnLine" onClick={() => setIsDeleteVisible(true)}>
            삭제하기
          </button>
          <Link to={`/myplan/edit?projectId=${projectId}`} className="btnLine">
            수정하기
          </Link>
          <Link to={"/myplan"} className="btnColor">
            목록으로
          </Link>
        </ButtonWrap>
      </div>
      {/* 하단 버튼들 */}
      {isDeleteVisible && (
        <PopupLayout
          isVisible={isDeleteVisible}
          onClose={closeModal}
          title={"만다라트 삭제하기"}
        >
          <form onSubmit={handleDeleteSubmit}>
            <div className="guideText inputBox">
              나의 만다라트 계획표를 삭제하시겠습니까?
            </div>
            <div className="buttonWrap">
              <button
                type="button"
                className="btnPopLine"
                onClick={() => setIsDeleteVisible(false)}
              >
                창닫기
              </button>
              <button type="submit" className="btnPupColor">
                삭제하기
              </button>
            </div>
          </form>
        </PopupLayout>
      )}
    </MandalartDetailView>
  );
}

export default ViewMandalart;
