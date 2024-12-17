import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 1200px;
  height: 100px;
  padding: 0px 30px 0px 50px;
  background-color: #fff;
`;

const TopLeft = styled.div`
  display: flex;
  ul {
    display: flex;
    gap: 50px;
  }
  a {
    font-size: 20px;
    font-weight: 400;
  }
`;

const TopLogo = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  span {
    color: #ccc;
    font-size: 11px;
  }
  a {
    color: #666;
    font-size: 14px;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <TopLeft>
        <TopLogo>
          <Link to={"/"}>my.manda</Link>
        </TopLogo>

        <ul>
          <li>
            <Link to={"/about"}>만다라트란?</Link>
          </li>
          <li>
            <Link to={"/mypage"}>나의 만다라트</Link>
          </li>
          <li>
            <Link to={"/share"}>만다라트 공유</Link>
          </li>
          <li>
            <Link to={"/calendar"}>계획표 캘린더</Link>
          </li>
        </ul>
      </TopLeft>

      <TopRight>
        <Link to={"/login"}>로그인</Link>
        <span>|</span>
        <Link to={"/join"}>회원가입</Link>
      </TopRight>
      {/* <Menual /> */}
    </HeaderStyle>
  );
};

export default Header;
