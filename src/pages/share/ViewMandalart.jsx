import styled from "@emotion/styled";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopupLayout from "../../components/PopupLayout";
import { deleteShare, postCopy } from "../../apis/share";

//임시 데이터
const sampleData = [
  {
    id: 1,
    content: "계획표 .. 엄청 꼼꼼하게 작성 잘 하셨네요. 추천합니다!",
    writer: "고길동",
    date: "2024-12-10",
  },
  {
    id: 2,
    content: "이건 뭐 .. 추천~ㅎㅎ",
    writer: "김수한무",
    date: "2024-12-10",
  },
  {
    id: 3,
    content: "추천은 한번 밖에 안되나요? 세표 정도 주고 싶은데 .. OTL",
    writer: "야옹선생",
    date: "2024-12-10",
  },
  {
    id: 4,
    content: "복사해 갑니다~",
    writer: "마르고닮도록",
    date: "2024-12-10",
  },
  {
    id: 5,
    content: "나도 복사!!",
    writer: "둘리",
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
  .detailWrap .viewType {
    display: flex;
  }
  .detailWrap .writeComment {
    gap: 0px;
    padding-top: 30px;
    padding-bottom: 0px;
  }
  .detailWrap .writeComment input {
    width: 100%;
  }
  .detailWrap .writeComment button {
    width: 150px;
  }
  .detailWrap .commentList {
    color: #666;
  }
  .detailWrap .commentList li {
    padding: 10px 10px;
    border-bottom: 1px solid #eee;
  }
  .detailWrap .commentList li:last-child {
    border-bottom: none;
  }
  .detailWrap .commentList .date {
    margin-bottom: 5px;
    color: #aaa;
    font-size: 13px;
  }
  .detailWrap .commentList .date button {
    padding: 0px 5px;
    border: none;
    background: none;
    color: #aaa;
    cursor: pointer;
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

  const editComment = () => {
    alert("댓글 수정하기 팝업 처리");
  };

  const deletComment = () => {
    alert("댓글 삭제하기 팝업 처리");
  };

  return (
    <MandalartDetailView>
      <h1 className="subTitle">만다라트 공유 상세보기</h1>
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
          <label style={{ marginTop: "15px" }}>계획표 보기</label>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "994px",
                margin: "20px 0px 20px 0px",
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

            <div>
              교감과 공감을 표현한 ‘스타 화가’ 1840년 영국 런던에서 태어난
              ‘브리튼 리비에르’는 옥스퍼드대학에서 미술 전공 교수로 활동한
              아버지를 이어
              <br />
              4대째 정통 미술교육을 받은 화가 집안의 사람이었어요. 12살 때부터
              전시회를 열만큼 뛰어난 재능을 자랑했던 그는 아버지가 재직 중인
              옥스퍼드
              <br />
              대학에서 미술을 공부하며 화가로 성장합니다.
              <br />
              <br />
              리비에르가 활동했던 빅토리아 시대에는 주로 종교나 역사, 문학을
              소재로 한 그림이 유행했었어요. 하지만 이런 소재들은 그에게 특별한
              감흥을
              <br />
              주지 못했죠. 그러던 중, 그가 25세가 되던 해에 ‘사람과 교감하는
              반려동물’의 모습에서 영감을 얻어 관련 그림을 그리기 시작합니다.
              리비에르가
              <br />
              표현하는 동물의 모습은 여느 화가들의 묘사와는 매우 달랐어요.
              인형이나 소품처럼 사람 옆에 우두커니 서 있는 동물이 아닌, 사람과의
              교감과
              <br />
              공감을 그림 안에 녹여냈거든요.
              <br />
              <br />
              그의 작품들은 대중들의 마음을 사로잡았고, 그에 힘입어 리비에르는
              스타 화가의 반열*에 오릅니다.
            </div>
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
          <ul className="commentList" style={{ width: "100%" }}>
            {sampleData.length === 0 && <li>등록된 댓글이 없습니다.</li>}

            {sampleData.map(item => (
              <li key={item.id}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="date">
                    {item.writer === "야옹선생" ? (
                      <span style={{ color: "#55ad9b", fontWeight: "600" }}>
                        {item.writer}
                      </span>
                    ) : (
                      item.writer
                    )}{" "}
                    / {item.date}
                  </div>
                  {item.writer === "야옹선생" && (
                    <div className="date">
                      <button
                        type="button"
                        onClick={() => editComment(item.id)}
                      >
                        수정
                      </button>{" "}
                      /{" "}
                      <button
                        type="button"
                        onClick={() => deletComment(item.id)}
                      >
                        삭제
                      </button>
                    </div>
                  )}
                </div>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>

        <ButtonWrap>
          <button className="btnLine" onClick={() => setIsCopyVisible(true)}>
            복사하기
          </button>
          <button className="btnLine" onClick={() => setIsDeleteVisible(true)}>
            삭제하기
          </button>
          <Link to={"/share/edit?id=1"} className="btnLine">
            수정하기
          </Link>
          <Link to={"/share"} className="btnColor">
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
