import styled from "@emotion/styled";
import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import PopupLayout from "../../components/PopupLayout";
import { deleteMyplan, getMyPlanData } from "../../apis/myplan";
import { getSession } from "../../apis/member";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

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
  .viewCalendar {
    margin-bottom: 30px;
  }
  .fc-h-event {
    border: none;
  }
  .fc-h-event .fc-event-main {
    padding-left: 10px;
    color: #444;
    font-weight: 500;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 40px;
  border-top: 1px solid #eee;
`;

function ViewCalendar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const projectId = searchParams.get("projectId"); //개별 데이터로 뜯기
  const sessionData = getSession(LOGIN_SESSION_KEY);

  //const [events, setEvents] = useState([]);
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
      setMyPlanView(result.resultData); //불러온 만다라트 정보 담기
      setMandalartView(result.resultData.mandalart); //불러온 만다라트 따로 담기
    } catch (error) {
      console.log("검색 실패:", error);
    }
  };

  // 랜덤색상 생성
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 128 + 127);
    const g = Math.floor(Math.random() * 128 + 127);
    const b = Math.floor(Math.random() * 128 + 127);
    return `rgb(${r},${g},${b})`;
  };

  //데이터 변환
  const transformData = data => {
    return {
      id: data.mandalartId,
      title: data.title,
      start: data.startDate || null,
      end: data.finishDate || null,
      description: data.contents || null,
      backgroundColor: getRandomColor(),
    };
  };
  const events = mandalartView
    .filter(item => item.depth === 1)
    .map(transformData);
  //console.log(events);

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
            <Link
              to={`/myplan/view?projectId=${projectId}`}
              className="btnLine"
            >
              만다라트로 보기
            </Link>
            <Link
              to={`/myplan/calendar?projectId=${projectId}`}
              className="btnColor"
            >
              캘린더로 보기
            </Link>
          </div>
        </div>

        <div className="inputBox borderNone">
          <label></label>
          <div
            style={{
              gap: "20px",
            }}
          >
            {/* 캘린더 출력 */}
            <div className="viewCalendar">
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: "prev,next",
                  center: "title",
                  right: "today",
                }}
                nowIndicator={true}
                events={events}
                locale="ko"
                height="auto"
                eventDidMount={info => {
                  if (info.event.end) {
                    info.el.style.borderRadius = "5px";
                  }
                }}
              />
            </div>

            <div>{myPlanView.content}</div>
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

export default ViewCalendar;
