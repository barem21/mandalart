import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";

const NotFoundContent = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 40px;
  background: #f5f5f5;
  align-items: center;
  z-index: 20;

  .ButtonWrap {
    display: flex;
  }
`;

function NotFoundPage() {
  const navigate = useNavigate();
  //뒤로가기
  const historyBack = () => {
    navigate(-1);
  };

  return (
    <NotFoundContent>
      <div>
        <h1 className="subTitle">요청하신 페이지를 찾을 수 없습니다.</h1>
        <div className="ButtonWrap">
          <button
            type="button"
            className="btnLine"
            onClick={() => historyBack()}
          >
            이전 페이지로
          </button>
          <Link to={"/"} className="btnColor">
            메인 페이지로
          </Link>
        </div>
      </div>
    </NotFoundContent>
  );
}

export default NotFoundPage;
