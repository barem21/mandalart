import styled from "@emotion/styled";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import LoopContent from "../../components/mandalart/LoopContent";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getSession } from "../../apis/member";
import { getShare, searchShare } from "../../apis/share";

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

function ListMandalart() {
  const [isShare, setIsShare] = useState([]);
  const sessionData = getSession(LOGIN_SESSION_KEY);
  const {
    handleSubmit: handleSubmitSearch,
    register: registerSearch,
    setValue: setValueSearch,
  } = useForm({
    defaultValues: {
      userId: "",
      orderFilter: "",
      searchFilter: "",
      searchText: "",
    },
    mode: "all",
  });

  //공유 만다라트 가져오기
  const getSharedMandalart = async () => {
    try {
      const result = await getShare({
        userId: sessionData?.userId,
        subLocation: "/",
      }); //axios
      setIsShare(result.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  //공유 만다라트 검색하기
  const onSubmitSearch = async data => {
    try {
      const result = await searchShare(data); //axios
      console.log(result);
      setIsShare(result.resultData);
    } catch (error) {
      console.log("검색 실패:", error);
    }
  };

  //정렬순서 변경
  const changeSort = value => {
    setValueSearch("orderFilter", value);
    handleSubmitSearch(onSubmitSearch)();
  };

  useEffect(() => {
    getSharedMandalart();
  }, []);

  useEffect(() => {
    setValueSearch("userId", sessionData && sessionData.userId);
    setValueSearch("orderFilter", "0"); //최신순 기본
    setValueSearch("searchFilter", "1"); //제목 기본
  }, []);

  return (
    <>
      <h1 className="subTitle">만다라트 공유</h1>
      <form onSubmit={handleSubmitSearch(onSubmitSearch)}>
        <input type="hidden" {...registerSearch("userId")} />
        <BoardTop>
          <div className="sortType">
            <span>[전체 : {isShare?.length}건]</span>
            <input
              type="radio"
              value="0"
              id="date"
              onClick={e => changeSort(e.target.value)}
              {...registerSearch("orderFilter")}
            />
            <label htmlFor="date">최신순</label>

            <input
              type="radio"
              value="1"
              id="vote"
              onClick={e => changeSort(e.target.value)}
              {...registerSearch("orderFilter")}
            />
            <label htmlFor="vote">좋아요 순</label>

            <input
              type="radio"
              value="2"
              id="comment"
              onClick={e => changeSort(e.target.value)}
              {...registerSearch("orderFilter")}
            />
            <label htmlFor="comment">댓글순</label>
          </div>

          <div className="boardSearch">
            <select {...registerSearch("searchFilter")}>
              <option value="1">제목</option>
              <option value="2">내용</option>
              <option value="3">제목+내용</option>
              <option value="4">닉네임</option>
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
            {sessionData && (
              <Link to={"/share/add"} className="btnColor">
                + 등록하기
              </Link>
            )}
          </div>
        </BoardTop>
      </form>

      <LoopContent location={"share"} datas={isShare} />
    </>
  );
}

export default ListMandalart;
