import styled from "@emotion/styled";
import SubpageVisual from "../components/subpageVisual/SubpageVisual";

const AboutMandalartWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  min-width: 1200px;
  margin: 0 auto;
  padding: 0px 40px;
  .textBox {
    margin-bottom: 60px;
  }
  h4 {
    margin-bottom: 20px;
    line-height: 140%;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: -1px;
  }
  p {
    color: #666;
    letter-spacing: -1px;
  }
`;

function About() {
  return (
    <>
      <SubpageVisual></SubpageVisual>
      <h1 className="subTitle">만다라트란?</h1>
      <AboutMandalartWrap>
        <div>
          <div className="textBox">
            <h4>
              만다라트(MANDAL-ART),
              <br />
              목표를 달성하는 기술
            </h4>
            <p>
              일본의 디자이너 마쓰무라 아스오가 개발한 계획법으로
              <br />
              아이디어를 생성해 나가는 방식이 불교의 만다라(Mandala),
              <br />
              즉 연꽃과 유사한 형태이기 때문에 만타라트(Mandal-Art)라는 이름으로
              <br />
              불리게 되었다고 합니다.
              <br />
              1개의 핵심 목표를 중심으로 8개의 하위 목표,
              <br />
              그리고 하위 목표를 달성하기 위한 64개의 세부 계획으로 이루어져
              있습니다.
            </p>
          </div>
          <div>
            <h4>만다라트 계획표의 장점</h4>
            <p>
              1. 목표 구체화 : 핵심 목표를 세부 목표와 실행 계획으로 나누어
              구체화하여 달성 가능성을 높입니다.
              <br />
              2. 전략적 사고 : 세부 목표와 실행 계획을 연결하여 전략적인 사고를
              촉진합니다.
              <br />
              3. 집중력 향상 : 계획표를 통해 목표 달성에 집중할 수 있도록
              도와줍니다.
              <br />
              4. 동기 부여 : 계획표를 작성하고 실행하는 과정 자체가 동기를
              부여합니다.
              <br />
              5. 창의력 발휘 : 9x9칸의 구조를 통해 다양한 아이디어를 자유롭게
              발상할 수 있습니다.
            </p>
          </div>
        </div>
        <img src="about_mandalart.png" alt="" />
      </AboutMandalartWrap>
    </>
  );
}

export default About;
