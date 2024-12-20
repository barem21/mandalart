import styled from "@emotion/styled";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopupLayout from "../../components/PopupLayout";
import { deleteShare, postCopy } from "../../apis/share";

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
  .detailWrap {
    max-width: 1200px;
    margin: 0 auto;
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
    padding: 15px 0px;
    border-bottom: 1px solid #eee;
  }
  .detailWrap .inputBox label {
    display: inline-block;
    min-width: 200px;
  }
  .detailWrap .writeComment {
    gap: 5px;
  }
  .detailWrap .viewType {
    display: flex;
  }
  .detailWrap .writeComment input {
    width: 100%;
  }
  .detailWrap .writeComment button {
    width: 150px;
  }
  .detailWrap .commentList {
    color: #666;
    font-size: 14px;
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
  const divBox = 81; //총 div
  const [isCopyVisible, setIsCopyVisible] = useState(false); //복사하기 팝업
  const [isDeleteVisible, setIsDeleteVisible] = useState(false); //삭제하기 팝업
  const navigate = useNavigate();

  const closeModal = () => {
    setIsCopyVisible(false);
  };

  const handleCopySubmit = async data => {
    data.preventDefault(); //submit 동작 방지

    try {
      const result = await postCopy(data); //axios 전송하기(복사요청)
      if (result.data) {
        alert("만다라트 복제가 완료되었습니다.");
        navigate("/myplan");
      } else {
        alert("만다라트 복제가 실패되었습니다.\n다시 시도해 주세요.");
      }
    } catch (error) {
      console.log("만다라트 복제 실패:", error);
    }
  };

  const handleDeleteSubmit = async data => {
    data.preventDefault(); //submit 동작 방지

    try {
      const result = await deleteShare(data); //axios 전송하기(복사요청)
      if (result.data) {
        alert("만다라트 공유글을 삭제하였습니다.");
        navigate("/share");
      } else {
        alert("만다라트 공유글 삭제가 실패되었습니다.\n다시 시도해 주세요.");
      }
    } catch (error) {
      console.log("만다라트 공유글 삭제 실패:", error);
    }
  };

  return (
    <MandalartDetailView>
      <h1 className="subTitle">공유 만다라트 상세보기</h1>
      <div className="detailWrap">
        <div className="inputBox">
          <label>제목</label>
          <span>마르고닮도록 님의 6개월 런닝 계획표</span>
        </div>
        <div className="inputBox">
          <label>작성자/작성일</label>
          <span>마르고닮도록 / 2024-12-01</span>
        </div>

        <div
          className="inputBox borderNone"
          style={{ alignItems: "flex-start" }}
        >
          <label>계획표 보기</label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "994px",
              border: "2px solid #666",
            }}
          >
            {/* 만다라트 계획표 출력 */}
            {[...Array(divBox)].map((item, index) => {
              return index < divBox ? (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "110px",
                    height: "110px",
                    borderRight: "1px solid #eee",
                    borderBottom: "1px solid #eee",
                    backgroundColor: `${index === 40 ? "#D8EFD3" : ""}`,
                  }}
                >
                  {index + 1}
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>

        <div
          className="inputBox"
          style={{ paddingBottom: "50px", justifyContent: "center" }}
        >
          <label></label>
          <button className="btnColor">추천 10</button>
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
            </colgroup>
            <tbody>
              {SampleData.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td align="center">
                    {item.writer} / {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ButtonWrap>
          <button className="btnColor" onClick={() => setIsCopyVisible(true)}>
            복사하기
          </button>
          <button className="btnLine" onClick={() => setIsDeleteVisible(true)}>
            삭제하기
          </button>
          <Link to={"/share/edit?id=1"} className="btnLine">
            수정하기
          </Link>
          <Link to={"/share"} className="btnLine">
            목록으로
          </Link>
        </ButtonWrap>
      </div>

      {isCopyVisible && (
        <PopupLayout
          isVisible={isCopyVisible}
          onClose={closeModal}
          title={"만다라트 복사하기"}
        >
          <form onSubmit={e => handleCopySubmit(e)}>
            <input type="hidden" name="idx" value="1" />
            <input type="hidden" name="mid" value="test@test.com" />
            <div className="guideText inputBox">
              해당 만다라트 계획표를 나의 만다라트로 복사하시겠습니까?
            </div>
            <div className="buttonWrap">
              <button
                type="button"
                className="btnPopLine"
                onClick={() => setIsCopyVisible(false)}
              >
                취소하기
              </button>
              <button type="submit" className="btnPupColor">
                복사하기
              </button>
            </div>
          </form>
        </PopupLayout>
      )}

      {isDeleteVisible && (
        <PopupLayout
          isVisible={isDeleteVisible}
          onClose={closeModal}
          title={"만다라트 삭제하기"}
        >
          <form onSubmit={e => handleDeleteSubmit(e)}>
            <input type="hidden" name="idx" value="1" />
            <input type="hidden" name="mid" value="test@test.com" />
            <div className="guideText inputBox">
              만다라트 공유글을 삭제하시겠습니까?
            </div>
            <div className="buttonWrap">
              <button
                type="button"
                className="btnPopLine"
                onClick={() => setIsDeleteVisible(false)}
              >
                취소하기
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
