import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

//임시 데이터
const SampleData = [
  {
    id: 1,
    title: "홍길동 님의 6개월 런닝 계획표",
    writer: "홍길동",
    date: "2024-12-10",
  },
  {
    id: 2,
    title: "김수한무 님의 한달 독서 계획표",
    writer: "김수한무",
    date: "2024-12-10",
  },
  {
    id: 3,
    title: "야옹선생 님의 1년 헬스 계획표",
    writer: "야옹선생",
    date: "2024-12-10",
  },
  {
    id: 4,
    title: "마르고닮도록 님의 6개월 리액트 공부 계획표",
    writer: "마르고닮도록",
    date: "2024-12-10",
  },
  {
    id: 5,
    title: "마르고닮도록 님의 6개월 리액트 공부 계획표",
    writer: "마르고닮도록",
    date: "2024-12-10",
  },
];

const MandalartDetailView = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .borderNone {
    border-bottom: none !important;
  }
  .share {
    margin-left: 10px;
    color: #55ad9b;
    font-weight: 500;
  }
  .inputBox {
    display: flex;
    align-items: center;
    padding: 15px 0px;
    border-bottom: 1px solid #eee;
  }
  .inputBox label {
    display: inline-block;
    min-width: 160px;
  }
  .writeComment {
    gap: 5px;
  }
  .viewType {
    display: flex;
  }
  .writeComment input {
    width: 100%;
  }
  .writeComment button {
    width: 150px;
  }
  .commentList {
    color: #666;
    font-size: 14px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  border-top: 1px solid #eee;
`;

function DetailMandalart() {
  const [copydata, setcopydata] = useState(false);

  //만다라트 복사하기 버튼 처리
  const handlerCopy = value => {
    setcopydata(value);
  };

  return (
    <>
      <h1 className="subTitle">만다라트 상세보기</h1>
      <MandalartDetailView>
        <div className="inputBox">
          <label>제목</label>
          <span>
            마르고닮도록 님의 6개월 런닝 계획표
            <span className="share">[공유중]</span>
          </span>
        </div>
        <div className="inputBox">
          <label>작성자/작성일</label>
          <span>마르고닮도록 / 2024-12-01</span>
        </div>
        <div className="inputBox borderNone">
          <label>계획표 보기</label>
          <div className="viewType">
            <button className="btnColor">만다라트로 보기</button>
            <button className="btnLine">캘린더로 보기</button>
          </div>
        </div>
        <div className="inputBox">
          <label></label>
          <div>만다라트 계획표 출력</div>
        </div>

        <div className="inputBox" style={{ justifyContent: "center" }}>
          <button className="btnColor">추천 10</button>
        </div>

        <div className="inputBox">
          <label>통계보기</label>
          <div>그래프 출력</div>
        </div>

        <div className="inputBox writeComment borderNone">
          <label>한줄 댓글 작성하기</label>
          <input
            type="text"
            name="comment"
            placeholder="한줄 댓글 내용을 입력하세요."
          />
          <button className="btnLine">등록하기</button>
        </div>

        <div className="inputBox borderNone">
          <label></label>
          <table className="commentList" style={{ width: "100%" }}>
            <colgroup>
              <col width=""></col>
              <col width="120"></col>
              <col width="120"></col>
              <col width="30"></col>
            </colgroup>
            <tbody>
              {SampleData.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td align="center">{item.writer}</td>
                  <td align="center">{item.date}</td>
                  <td align="center">
                    <button type="button">×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ButtonWrap>
          <button className="btnColor" onClick={() => handlerCopy(true)}>
            복사하기
          </button>
          <button className="btnLine">삭제하기</button>
          <button className="btnLine">수정하기</button>
          <Link to={"/share"} className="btnLine">
            목록으로
          </Link>
        </ButtonWrap>

        {copydata && (
          <div
            style={{
              width: "300px",
              padding: "20px",
              border: "2px solid #242424",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h4>만다라트 복사하기</h4>
              <button onClick={() => handlerCopy(false)}>×</button>
            </div>
            <div>
              <div>
                해당 만다라트 계획표를 나의 만다라트로 복사하시겠습니까?
              </div>
              <button type="button">복사하기</button>
            </div>
          </div>
        )}
      </MandalartDetailView>
    </>
  );
}

export default DetailMandalart;
