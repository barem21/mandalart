import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import { getSession } from "../../apis/member";
import { useEffect, useState } from "react";

//세션 생성
const LOGIN_SESSION_KEY = "login_session";

const HeaderWrap = styled.header`
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
    font-size: 32px;
    font-family: "Pacifico", serif;
    letter-spacing: -1px;
  }
`;
const HeaderNav = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  transition: all 0.3s;
  a {
    font-size: 20px;
    font-weight: 400;
    transition: all 0.3s;
  }
  a:hover {
    color: #55ad9b;
  }
  .active {
    color: #55ad9b;
  }
  @media all and (max-width: 1200px) {
    gap: 35px;
    letter-spacing: -1px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .profileImg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border: 1px solid #eee;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 30px;
      object-fit: cover;
    }
  }
  a {
    color: #666;
    font-size: 14px;
    transition: all 0.3s;
  }
  a:hover {
    color: #55ad9b;
  }
  .active {
    color: #55ad9b;
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
  const location = useLocation(); //현재 페이지 확인
  const sessionData = getSession(LOGIN_SESSION_KEY);
  //const { nickName } = sessionData.resultData;

  //프로그래스 바
  const [progressBar, setProgressBar] = useState(0);

  const handleScroll = () => {
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercent = (scrollPosition / documentHeight) * 100;
    setProgressBar(scrollPercent);
  };

  let activeMyplan;
  let activeShare;
  switch (location.pathname) {
    case "/myplan":
    case "/myplan/view":
    case "/myplan/calendar":
    case "/myplan/add":
    case "/myplan/edit":
      activeMyplan = "active";
      break;
    case "/share":
    case "/share/view":
    case "/share/add":
    case "/share/edit":
      activeShare = "active";
      break;
    default:
  }

  useEffect(() => {
    setProgressBar(0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrap>
      <div
        className="progress-bar"
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "4px",
          zIndex: "20",
        }}
      >
        <div
          className="bar"
          style={{
            background: "#55ad9b",
            width: `${progressBar}%`,
            height: "100%",
          }}
        ></div>
      </div>

      <HeaderLeft>
        <HeaderLogo>
          <Link to={"/"}>manda</Link>
        </HeaderLogo>

        <HeaderNav>
          <Link
            to={"/about"}
            className={location.pathname === "/about" ? "active" : ""}
          >
            만다라트란?
          </Link>
          <Link to={"/myplan"} className={activeMyplan}>
            나의 만다라트
          </Link>
          <Link to={"/share"} className={activeShare}>
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
            <div className="profileImg">
              <img
                src={
                  sessionData?.pic
                    ? `http://112.222.157.156:5211/pic/user/${sessionData?.userId}/${sessionData?.pic}`
                    : `no_image.png`
                }
                alt=""
              />
            </div>
            <p className="userInfo">
              <span>{sessionData?.nickName}</span>님, 환영합니다.
            </p>
            <Link to={"/logout"}>로그아웃</Link>
            <span className="vLine">|</span>
            <Link
              to={"/modify"}
              className={location.pathname === "/modify" ? "active" : ""}
            >
              정보수정
            </Link>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className={location.pathname === "/login" ? "active" : ""}
            >
              로그인
            </Link>
            <span className="vLine">|</span>
            <Link
              to={"/join"}
              className={location.pathname === "/join" ? "active" : ""}
            >
              회원가입
            </Link>
          </>
        )}
      </HeaderRight>
    </HeaderWrap>
  );
};

export default Header;
