import styled from "@emotion/styled";
import { ResponsivePie } from "@nivo/pie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopupLayout from "../../components/PopupLayout";
import { deleteMyplan } from "../../apis/myplan";
import GridLevel0View from "../mandalarttt/GridLevel0View";

const MandalartDetailView = styled.div`
  .detailWrap {
    max-width: 1200px;
    margin: 0 auto;
    border-top: 1px solid #242424;
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
    padding: 20px 0px;
    border-bottom: 1px solid #eee;
  }
  .detailWrap .inputBox label {
    display: inline-block;
    min-width: 200px;
  }
  .detailWrap .viewType {
    display: flex;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 40px;
  border-top: 1px solid #eee;
`;

//데이터 가져오기
const chartData = [
  {
    id: "몸 만들기",
    label: "몸 만들기",
    value: 300,
    color: "",
  },
  {
    id: "제구",
    label: "제구",
    value: 110,
    color: "",
  },
  {
    id: "구위",
    label: "구위",
    value: 110,
    color: "",
  },
  {
    id: "맨탈",
    label: "맨탈",
    value: 80,
    color: "",
  },
  {
    id: "스피드 160km/h",
    label: "스피드 160km/h",
    value: 50,
    color: "",
  },
  {
    id: "인간성",
    label: "인간성",
    value: 120,
    color: "",
  },
  {
    id: "운",
    label: "운",
    value: 50,
    color: "",
  },
  {
    id: "변화구",
    label: "변화구",
    value: 150,
    color: "",
  },
];

function ViewMandalart() {
  const divBox = 81; //총 div
  const [isDeleteVisible, setIsDeleteVisible] = useState(false); //삭제하기 팝업
  const navigate = useNavigate();

  const closeModal = () => {
    setIsDeleteVisible(false);
  };

  const handleDeleteSubmit = async data => {
    data.preventDefault(); //submit 동작 방지

    try {
      const result = await deleteMyplan(data); //axios 전송하기(삭제요청)
      if (result.data) {
        alert("나의 만다라트 계획표를 삭제하였습니다.");
        navigate("/myplan");
      } else {
        alert(
          "나의 만다라트 계획표 삭제가 실패되었습니다.\n다시 시도해 주세요.",
        );
      }
    } catch (error) {
      console.log("나의 만다라트 계획표 삭제 실패:", error);
    }
  };

  return (
    <MandalartDetailView>
      <h1 className="subTitle">나의 만다라트 상세보기</h1>
      <div className="detailWrap">
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
        <div
          className="inputBox borderNone"
          style={{ alignItems: "flex-start" }}
        >
          <label>계획표 보기</label>
          <div className="viewType">
            <button className="btnColor">만다라트로 보기</button>
            <button className="btnLine">캘린더로 보기</button>
          </div>
        </div>
        <div className="inputBox">
          <label></label>
          <div
            style={{
              gap: "20px",
            }}
          >
            {/* 만다라트 계획표 출력 */}

            <div>
              <GridLevel0View />
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

        <div className="inputBox borderNone">
          <label>통계보기</label>
          <div
            style={{
              minWidth: "800px",
              height: "500px",
              margin: "0 auto",
            }}
          >
            {/*그래프 출력*/}
            <ResponsivePie
              data={chartData}
              margin={{ top: 20, right: 0, bottom: 100, left: 0 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
              }}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000",
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>

        <ButtonWrap>
          <button className="btnLine" onClick={() => setIsDeleteVisible(true)}>
            삭제하기
          </button>
          <Link to={"/myplan/edit?id=1"} className="btnLine">
            수정하기
          </Link>
          <Link to={"/myplan"} className="btnColor">
            목록으로
          </Link>
        </ButtonWrap>
      </div>
      {/* 하단 버튼들 */}
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
                창닫기
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
