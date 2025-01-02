import styled from "@emotion/styled";
import SubpageVisual from "../../components/subpageVisual/SubpageVisual";
import { Link } from "react-router-dom";

const MemberJoinWrap = styled.div`
  padding: 0px 50px;
  h2 {
    margin-bottom: 20px;
  }

  .joinEndForm {
    max-width: 1280px;
    min-width: 1100px;
    margin: 0 auto;
    text-align: center;
    span {
      color: #55ad9b;
      font-weight: 500;
    }
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid #eee;
`;

function JoinEndPage() {
  return (
    <>
      <SubpageVisual></SubpageVisual>

      <MemberJoinWrap>
        <h1 className="subTitle">회원가입 완료</h1>
        <div className="joinEndForm">
          <h2>이메일로 발송된 인증링크 확인 후 회원가입이 완료됩니다.</h2>
          <span>MANDA</span>와 함께 만다라트 계획표에 대해 알아보고
          <br />
          만다라트 계획표를 작성해 봐요!
          <ButtonWrap>
            <Link to={"/"} className="btnLine">
              홈으로
            </Link>
            <Link to={"/login"} className="btnColor">
              로그인
            </Link>
          </ButtonWrap>
        </div>
      </MemberJoinWrap>
    </>
  );
}

export default JoinEndPage;
