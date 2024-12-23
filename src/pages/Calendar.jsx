import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import PopupLayout from "../components/PopupLayout";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { getSession } from "../apis/member";
import styled from "@emotion/styled";

//세션 생성
const LOGIN_SESSION_KEY = "login_session";

// 일정 데이터를 상태로 관리
const events = [
  {
    id: 1,
    title: "👍 샘플데이터 입니다.",
    start: "2024-12-25",
    end: "2024-12-31",
    description: "샘플 데이터 상세보기 입니다.",
    color: "#ff6600",
    background: "#ff6600",
  },
  {
    id: 2,
    title: "👍 샘플2데이터 입니다.",
    start: "2024-12-20",
    end: "2024-12-26",
    description: "샘플 데이터 상세보기 입니다.",
    color: "#0b46e7",
    background: "#0b46e7",
  },
];

const CalendarWrap = styled.div`
  max-width: 1280px;
  min-width: 1200px;
  margin: 0 auto;
  padding: 0px 50px;
`;

const Calendar = () => {
  const navigate = useNavigate();
  const sessionData = getSession(LOGIN_SESSION_KEY);

  // 수정 폼을 위한 상태
  const [issModalVisible, setIsModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({
    title: "",
    start: "",
    end: "",
    description: "",
    id: null, // 이벤트 ID 추가
  });

  const closeModal = () => {
    setIsModalVisible(false);
  };

  /*
  // 날짜 클릭 시 새로운 일정을 추가하는 함수
  const handleDateClick = info => {
    setSelectedEvent({
      title: "",
      start: info.dateStr,
      end: info.dateStr, // 종료일은 기본적으로 시작일과 동일
      description: "",
      id: null, // 새로운 일정이므로 ID는 null
    });
    setIsModalVisible(true); // 모달을 열기
  };
  */

  // 일정 클릭 시 수정 폼을 띄우는 함수
  const handleEventClick = info => {
    console.log(info);

    setSelectedEvent({
      title: info.event.title,
      start: info.event.startStr,
      end: info.event.endStr,
      background: info.event.extendedProps.background,
      description: info.event.extendedProps.description,
      id: info.event.id, // 수정할 이벤트의 ID를 가져옴
    });
    setIsModalVisible(true); // 수정 모달 열기
  };

  // 입력값 변경 처리
  const handleInputChange = e => {
    const { name, value } = e.target;
    setSelectedEvent({
      ...selectedEvent,
      [name]: value,
    });
  };

  // 수정된 일정 저장
  const handleSubmit = () => {
    //일정 수정폼 전송
    setIsModalVisible(false); // 모달 닫기
  };

  useEffect(() => {
    if (!sessionData) {
      alert("회원 로그인이 필요합니다.");
      navigate("/login?url=/calendar");
      return;
    }
    return () => {};
  }, [sessionData, navigate]);

  return (
    <CalendarWrap>
      <h1 className="subTitle">계획표 캘린더</h1>
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
        // dateClick={handleDateClick}
        eventClick={handleEventClick} // 일정 클릭 시 수정 모달 열기
      />

      {/* 수정 또는 추가 일정 모달 */}
      <PopupLayout
        isVisible={issModalVisible}
        onClose={closeModal}
        title={selectedEvent.id ? "" : "등록하기"}
      >
        <form>
          <div className="inputBox">
            <label htmlFor="title">일정 제목</label>
            <input
              type="text"
              id="title"
              value={selectedEvent.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="start">시작일</label>
            <input
              type="date"
              id="start"
              value={selectedEvent.start}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="end">종료일</label>
            <input
              type="date"
              id="end"
              value={selectedEvent.end}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="description">간단 설명</label>
            <textarea
              id="description"
              value={selectedEvent.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputBox">
            <label>색상 선택</label>
            <div
              style={{
                position: "relative",
                width: "30px",
                height: "30px",
                background: "none",
                border: "1px solid #eee",
                borderRadius: "100px",
                overflow: "hidden",
              }}
            >
              <input
                type="color"
                name="background"
                value={selectedEvent.background}
                onChange={handleInputChange}
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "-10px",
                  width: "70px",
                  height: "50px",
                  background: "none",
                  border: "none",
                }}
              />
            </div>
          </div>

          <div className="buttonWrap">
            <button
              type="button"
              className="btnLine"
              onClick={() => closeModal()}
            >
              취소하기
            </button>
            <button
              type="button"
              className="btnColor"
              onClick={() => handleSubmit()}
            >
              수정하기
            </button>
          </div>
        </form>
      </PopupLayout>
    </CalendarWrap>
  );
};

export default Calendar;
