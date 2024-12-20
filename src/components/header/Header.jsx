import styled from "@emotion/styled";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { getSession } from "../../apis/member";

//세션 생성
const LOGIN_SESSION_KEY = "login_session";

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 1200px;
  height: 100px;
  padding: 0px 30px 0px 50px;
  background-color: #fff;
`;

const HeaderLeft = styled.div`
  display: flex;
`;
const HeaderLogo = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  a {
    margin-top: -5px;
    color: #55ad9b;
    font-size: 24px;
    font-weight: 900;
    letter-spacing: -1px;
  }
`;
const HeaderNav = styled.div`
  display: flex;
  gap: 50px;
  a {
    font-size: 20px;
    font-weight: 400;
  }
  .active {
    color: #55ad9b;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  a {
    color: #666;
    font-size: 14px;
  }
  .vLine {
    color: #ccc;
    font-size: 11px;
  }
  .userInfo {
    margin-right: 20px;
    color: #666;
    font-size: 14px;
  }
  .userInfo span {
    color: #55ad9b;
    font-weight: 700;
  }
`;

const Header = () => {
  //const { userInfo } = useContext(UserInfoContext);
  const location = useLocation(); //현재 페이지 확인
  const sessionData = getSession(LOGIN_SESSION_KEY);
  //console.log(sessionData);

  return (
    <HeaderWrap>
      <HeaderLeft>
        <HeaderLogo>
          <Link to={"/"}>my.manda</Link>
        </HeaderLogo>

        <HeaderNav>
          <Link
            to={"/about"}
            className={location.pathname === "/about" ? "active" : ""}
          >
            만다라트란?
          </Link>
          <Link
            to={"/myplan"}
            className={location.pathname === "/myplan" ? "active" : ""}
          >
            나의 만다라트
          </Link>
          <Link
            to={"/share"}
            className={location.pathname === "/share" ? "active" : ""}
          >
            만다라트 공유
          </Link>
          <Link
            to={"/calendar"}
            className={location.pathname === "/calendar" ? "active" : ""}
          >
            계획표 캘린더
          </Link>
        </HeaderNav>
      </HeaderLeft>

      <HeaderRight>
        {sessionData ? (
          <>
            <p className="userInfo">
              <span>{sessionData.resultData.nickName}</span>님, 환영합니다.
            </p>
            <Link to={"/logout"}>로그아웃</Link>
            <span className="vLine">|</span>
            <Link to={"/modify"}>정보수정</Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>로그인</Link>
            <span className="vLine">|</span>
            <Link to={"/join"}>회원가입</Link>
          </>
        )}
      </HeaderRight>
    </HeaderWrap>
  );
};

export default Header;
