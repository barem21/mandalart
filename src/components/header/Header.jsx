import styled from "@emotion/styled";
import Menual from "./menual";
const HeaderStyle = styled.div`
  display: flex;

  max-width: 1200px;
  height: 100px;
  justify-content: space-between;
  margin: 0 auto;
  background-color: skyblue;
`;
const LogoStyle = styled.div`
  display: flex;
  width: 200px;
  background-color: blue;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <LogoStyle>logo</LogoStyle>
      <Menual />
    </HeaderStyle>
  );
};

export default Header;
