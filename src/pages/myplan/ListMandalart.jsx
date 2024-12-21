import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoopContent from "../../components/mandalart/LoopContent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//import { UserInfoContext } from "../../contexts/UserInfoContext";
import PopupLayout from "../../components/PopupLayout";
import { getSession } from "../../apis/member";

//세션 생성
const LOGIN_SESSION_KEY = "login_session";

//임시 데이터
const sampleData = [
  {
    id: 1,
    img: "share_mandalart.png",
    title: "홍길동 님의 6개월 런닝 계획표",
    vote: 10,
  },
  {
    id: 2,
    img: "share_mandalart2.png",
    title: "김수한무 님의 한달 독서 계획표",
    vote: 5,
  },
  {
    id: 3,
    img: "share_mandalart.png",
    title: "야옹선생 님의 1년 헬스 계획표",
    vote: 1,
  },
  {
    id: 4,
    img: "share_mandalart2.png",
    title: "배워서남주자 님의 6개월 리액트 공부 계획표",
    vote: 13,
  },
  {
    id: 5,
    img: "share_mandalart2.png",
    title: "마르고닮도록 님의 3개월 다이어트 계획표",
    vote: 7,
  },
];

const BoardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 0px 30px 0px 50px;
  select {
    margin-right: 5px;
  }
  input {
    margin-right: 3px;
  }
  .sortType {
    display: flex;
    gap: 20px;
  }
  .sortType span {
    margin-right: 10px;
  }
  .sortType input[type="radio"] {
    display: none;
  }
  .sortType label {
    color: #999;
    cursor: pointer;
  }
  .sortType input[type="radio"]:checked + label {
    border-bottom: 1px solid #242424;
    color: #242424;
  }
  .boardSearch {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 30px;
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  color: #ff3300;
  font-size: 13px;
`;

const schema = yup.object({
  title: yup
    .string()
    .required("제목을 입력해 주세요.")
    .min(5, "최소 5글자 이상 제목을 입력해 주세요."),
});

function MyPlan() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  //const { userInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();
  const sessionData = getSession(LOGIN_SESSION_KEY);

  const {
    handleSubmit: handleSubmit,
    register: register,
    setValue: setValue,
    formState: { errors: errors },
  } = useForm({
    defaultValues: {
      user_id: "",
      title: "",
      content: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit: handleSubmitSearch,
    register: registerSearch,
    setValue: setValueSearch,
  } = useForm({
    defaultValues: {
      user_id: "",
      sort: "date",
      type: "1",
      search: "",
    },
    mode: "all",
  });

  const onSubmit = data => {
    console.log(data);
    try {
      //만다라트 생성 데이터 처리
      //axios post
      navigate("/myplan/add");
    } catch (error) {
      console.log("만다라트 생성 실패:", error);
    }
  };

  const onSubmitSearch = data => {
    console.log(data);
    try {
      //검색결과 데이터 처리
      //axios post
    } catch (error) {
      console.log("검색 실패:", error);
    }
  };

  //모달닫기
  const closeModal = () => {
    setIsModalVisible(false);
  };

  //정렬순서 변경
  const changeSort = value => {
    setValueSearch("sort", value);
    handleSubmitSearch(onSubmitSearch)();
  };

  useEffect(() => {
    if (!sessionData) {
      alert("회원 로그인이 필요합니다.");
      navigate("/login?url=/myplan");
      return;
    }
    return () => {};
  }, [sessionData, navigate]);

  useEffect(() => {
    setValue("user_id", sessionData && sessionData.resultData.userId);
  }, [sessionData, setValue]);

  useEffect(() => {
    setValueSearch("user_id", sessionData && sessionData.resultData.userId);
  }, [setValueSearch, sessionData]);

  return (
    <>
      <h1 className="subTitle">나의 만다라트</h1>
      <form onSubmit={handleSubmitSearch(onSubmitSearch)}>
        <BoardTop>
          <div className="sortType">
            <span>[전체 : {sampleData?.length}건]</span>
            <input
              type="radio"
              value="date"
              id="date"
              onClick={e => changeSort(e.target.value)}
              {...registerSearch("sort")}
            />
            <label htmlFor="date">최신순</label>

            <input
              type="radio"
              value="title"
              id="vote"
              onClick={e => changeSort(e.target.value)}
              {...registerSearch("sort")}
            />
            <label htmlFor="vote">제목순</label>
          </div>

          <div className="boardSearch">
            <select {...registerSearch("type")}>
              <option value="1">제목</option>
              <option value="2">내용</option>
              <option value="3">제목+내용</option>
              <option value="4">작성자</option>
            </select>
            <input
              type="text"
              maxLength="20"
              placeholder="검색어를 입력하세요."
              {...registerSearch("search")}
            />
            <button type="submit" className="btnLine">
              검색
            </button>
          </div>
        </BoardTop>
      </form>

      <LoopContent location={"myplan"} datas={sampleData} />

      <ButtonWrap>
        <button
          type="button"
          className="btnColor"
          onClick={() => setIsModalVisible(true)}
        >
          + 신규 등록하기
        </button>
      </ButtonWrap>

      {isModalVisible && (
        <PopupLayout isVisible={isModalVisible} onClose={closeModal} title={""}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" {...register("user_id")} />
            <div className="inputBox">
              <label htmlFor="title">만다라트 제목 입력</label>
              <input
                type="text"
                id="title"
                maxLength={20}
                className="popupInput"
                placeholder="제목을 입력하세요."
                {...register("title")}
              />
              {/* 에러내용 출력 */}
              {errors.title && (
                <ErrorMessage>({errors.title.message})</ErrorMessage>
              )}
            </div>

            <div className="inputBox">
              <label htmlFor="content">만다라트 간단 설명</label>
              <textarea
                id="content"
                className="popupTextarea"
                placeholder="간단설명을 입력하세요."
                {...register("content")}
              ></textarea>
            </div>

            <div className="buttonWrap">
              <button
                type="button"
                className="btnPopLine"
                onClick={() => setIsModalVisible(false)}
              >
                창닫기
              </button>
              <button type="submit" className="btnPupColor">
                등록하기
              </button>
            </div>
          </form>
        </PopupLayout>
      )}
    </>
  );
}

export default MyPlan;
