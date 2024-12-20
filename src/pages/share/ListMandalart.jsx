import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import LoopContent from "../../components/mandalart/LoopContent";

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
    title: "마르고닮도록 님의 6개월 리액트 공부 계획표",
    vote: 13,
  },
  {
    id: 5,
    img: "share_mandalart2.png",
    title: "마르고닮도록 님의 6개월 리액트 공부 계획표",
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

function ListMandalart() {
  return (
    <>
      <h1 className="subTitle">만다라트 공유</h1>
      <BoardTop>
        <p className="">등록된 만라다트 계획표 : {sampleData?.length}건</p>

        <form>
          <div className="boardSearch">
            <select name="type">
              <option value="1">제목</option>
              <option value="2">내용</option>
              <option value="3">제목+내용</option>
              <option value="4">작성자</option>
            </select>
            <input
              type="text"
              name="search"
              maxLength="20"
              placeholder="검색어를 입력하세요."
            />
            <button type="submit" className="btnLine">
              검색
            </button>
          </div>
        </form>
      </BoardTop>

      <LoopContent datas={sampleData} />

      <ButtonWrap>
        <Link to={"/share/add"} className="btnColor">
          + 신규 등록하기
        </Link>
      </ButtonWrap>
    </>
  );
}

export default ListMandalart;
