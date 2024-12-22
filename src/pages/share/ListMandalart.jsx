import styled from "@emotion/styled";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import LoopContent from "../../components/mandalart/LoopContent";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
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
    date: "2024-12-01",
  },
  {
    id: 2,
    img: "share_mandalart2.png",
    title: "김수한무 님의 한달 독서 계획표",
    vote: 5,
    date: "2024-12-01",
  },
  {
    id: 3,
    img: "share_mandalart.png",
    title: "야옹선생 님의 1년 헬스 계획표",
    vote: 1,
    date: "2024-12-01",
  },
  {
    id: 4,
    img: "share_mandalart2.png",
    title: "마르고닮도록 님의 6개월 리액트 공부 계획표",
    vote: 13,
    date: "2024-12-01",
  },
  {
    id: 5,
    img: "share_mandalart2.png",
    title: "마르고닮도록 님의 6개월 리액트 공부 계획표",
    vote: 7,
    date: "2024-12-01",
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
  .boardSearch svg {
    margin-top: 2px;
  }
`;

function ListMandalart() {
  const sessionData = getSession(LOGIN_SESSION_KEY);
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

  const onSubmitSearch = data => {
    console.log(data);
    try {
      //검색결과 데이터 처리
      //axios post
    } catch (error) {
      console.log("검색 실패:", error);
    }
  };

  //정렬순서 변경
  const changeSort = value => {
    setValueSearch("sort", value);
    handleSubmitSearch(onSubmitSearch)();
  };

  useEffect(() => {
    setValueSearch("user_id", sessionData && sessionData.resultData.userId);
  }, [setValueSearch, sessionData]);

  return (
    <>
      <h1 className="subTitle">만다라트 공유</h1>
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
              value="vote"
              id="vote"
              onClick={e => changeSort(e.target.value)}
              {...registerSearch("sort")}
            />
            <label htmlFor="vote">추천순</label>
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
              <IoSearch />
              &nbsp;검색
            </button>

            <Link to={"/share/add"} className="btnColor">
              + 등록하기
            </Link>
          </div>
        </BoardTop>
      </form>

      <LoopContent location={"share"} datas={sampleData} />
    </>
  );
}

export default ListMandalart;
