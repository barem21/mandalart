import styled from "@emotion/styled";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoopContent from "../../components/mandalart/LoopContent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PopupLayout from "../../components/PopupLayout";
import { getSession } from "../../apis/member";
import { getMyplan, postMyplan, searchMyplan } from "../../apis/myplan";

const LOGIN_SESSION_KEY = "login_session";

const BoardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1200px;
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
  .boardSearch svg {
    margin-top: 2px;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  color: #55ad9b;
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
  const [myList, setMyList] = useState([]);
  const navigate = useNavigate();
  const sessionData = getSession(LOGIN_SESSION_KEY);

  const {
    handleSubmit: handleSubmit,
    register: register,
    setValue: setValue,
    formState: { errors: errors },
  } = useForm({
    defaultValues: {
      userId: "",
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
      userId: "",
      sort: "date",
      type: "1",
      searchText: "",
    },
    mode: "all",
  });

  //내 만다라트 가져오기
  const getMandalart = async () => {
    try {
      const result = await getMyplan({
        userId: sessionData.userId,
        subLocation: "",
      }); //axios
      setMyList(result.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  //내 만다라트 등록하기
  const onSubmit = async data => {
    try {
      const result = await postMyplan(data); //axios post
      //console.log(result.resultData);

      if (result.resultData.projectId) {
        navigate(`/myplan/edit?projectId=${result.resultData.projectId}`);
      }
    } catch (error) {
      console.log("만다라트 생성 실패:", error);
    }
  };

  //내 만다라트 검색
  const onSubmitSearch = async data => {
    try {
      const result = await searchMyplan(data); //axios get

      //리턴값 첫번째 자리 확인(첫자리가 4라면 우리를 의심하자(오타 등))
      const resultStatus = result.statusCode.toString().charAt(0);
      //console.log(result.resultData);

      //정상호출
      if (resultStatus === "2") {
        setMyList(result.resultData);
      }
      //호출실패
      if (resultStatus === "4") {
        setMyList([]);
      }
    } catch (error) {
      console.log("검색 실패:", error);
    }
  };

  //모달닫기
  const closeModal = () => {
    setValue("title", "");
    setValue("content", "");
    setIsModalVisible(false);
  };

  //정렬순서 변경
  const changeSort = value => {
    setValueSearch("sort", value);
    handleSubmitSearch(onSubmitSearch)();
  };
  // 등록하기 클릭시 데이터 전송

  useEffect(() => {
    if (!sessionData?.userId) {
      alert("회원 로그인이 필요합니다.");
      navigate("/login?url=/myplan");
      return;
    }
    return () => {};
  }, [sessionData, navigate]);

  useEffect(() => {
    setValue("userId", sessionData?.userId && sessionData.userId);
  }, [sessionData, setValue]);

  useEffect(() => {
    setValueSearch("userId", sessionData?.userId && sessionData.userId);
  }, [setValueSearch, sessionData]);

  useEffect(() => {
    getMandalart();
  }, []);

  return (
    <>
      <h1 className="subTitle">나의 만다라트</h1>
      <form onSubmit={handleSubmitSearch(onSubmitSearch)}>
        <input type="hidden" {...registerSearch("userId")} />
        <BoardTop>
          <div className="sortType">
            <span>[전체 : {myList?.length}건]</span>
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
            </select>
            <input
              type="text"
              maxLength="20"
              placeholder="검색어를 입력하세요."
              {...registerSearch("searchText")}
            />
            <button type="submit" className="btnLine">
              <IoSearch />
              &nbsp;검색
            </button>

            <button
              type="button"
              className="btnColor"
              onClick={() => setIsModalVisible(true)}
            >
              + 등록하기
            </button>
          </div>
        </BoardTop>
      </form>

      <LoopContent location={"myplan"} datas={myList} />

      {isModalVisible && (
        <PopupLayout isVisible={isModalVisible} onClose={closeModal} title={""}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" {...register("userId")} />
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
                onClick={e => closeModal(e)}
              >
                취소하기
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
