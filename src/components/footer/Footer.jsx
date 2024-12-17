import styled from "@emotion/styled";
import { FaXTwitter, FaFacebookF, FaGoogle } from "react-icons/fa6";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1200px;
  height: 80px;
  padding: 0px 30px;
  border-top: 1px solid #f0f0f0;
`;
const FooterLeft = styled.div`
  color: #666;
  font-size: 12px;
`;
const FooterRight = styled.div`
  display: flex;
  gap: 10px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 50%;
    color: #666;
    font-size: 13px;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLeft>COPYRIGHT 2024 MY.MANDA. ALL RIGHTS RESERVED.</FooterLeft>
      <FooterRight>
        <button type="button">
          <FaXTwitter />
        </button>
        <button type="button">
          <FaFacebookF />
        </button>
        <button type="button">
          <FaGoogle />
        </button>
      </FooterRight>
    </FooterWrapper>
  );
};

export default Footer;
