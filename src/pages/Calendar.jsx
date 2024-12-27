import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import PopupLayout from "../components/PopupLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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

//schema 먼저 생성
const addSchema = yup.object({
  title: yup.string().required("제목을 입력해 주세요."),
  content: yup.string().required("간단 소개글을 입력해 주세요."),
  /*
  pic: yup
    .mixed()
    .test("fileType", "이미지(jpg, png) 파일만 첨부가능합니다.", value => {
      return value && ["image/jpeg", "image/png"].includes(value[0]?.type);
    })
    .test("filesize", "파일 크기는 500KB 이하만 가능합니다.", value => {
      return value && value[0]?.size <= 0.5 * 1024 * 1024; // 500KB 이하
    }),
  */
});

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addSchema),
    defaultValues: {
      mid: "",
      title: "",
      content: "",
      pic: "",
    },
    mode: "all",
  });

  const handleSubmitForm = data => {
    alert("ok");
    //모아둔 전송할 데이터(axios.post전송)
    console.log(data);
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
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <input type="hidden" value="1" {...register("idx")} />
          <input type="hidden" value="test@test.com" {...register("mid")} />
          <div className="inputBox">
            <label htmlFor="titlePop">
              실천목표 입력<span>*</span>
            </label>
            <input
              type="text"
              id="titlePop"
              value={selectedEvent.title}
              {...register("title")}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="startDate">시작일</label>
            <input
              type="date"
              value={selectedEvent.start}
              id="startDate"
              {...register("startDate")}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="endDate">종료일</label>
            <input
              type="date"
              value={selectedEvent.end}
              id="endDate"
              {...register("endDate")}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="contentPop">세부내용 작성</label>
            <textarea
              id="contentPop"
              value={selectedEvent.description}
              placeholder="내용을 입력하세요."
              {...register("content")}
            ></textarea>
          </div>
          <div className="inputBox" style={{ display: "flex" }}>
            <label style={{ minWidth: "auto", margin: "0px 20px 0px 0px" }}>
              달성 여부
            </label>
            <input
              type="radio"
              value="0"
              id="value0"
              {...register("success")}
              checked
            />
            &nbsp;
            <label htmlFor="value0" style={{ minWidth: "auto", margin: "0px" }}>
              진행중
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              value="1"
              id="value1"
              {...register("success")}
            />
            &nbsp;
            <label htmlFor="value1" style={{ minWidth: "auto", margin: "0px" }}>
              달성 완료
            </label>
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
