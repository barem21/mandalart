import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { FaXTwitter, FaFacebookF, FaGoogle } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
//import SnsShare from "../ShareSns";

const FooterWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1200px;
  height: 80px;
  margin-top: 60px;
  padding: 0px 30px;
  border-top: 1px solid #f0f0f0;
  .btnGoTop {
    position: absolute;
    bottom: 65px;
    right: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid #eee;
    border-radius: 50%;
    background-color: #fff;
    color: #aaa;
    font-size: 20px;
    cursor: pointer;
    z-index: 10;
  }
`;
const FooterLeft = styled.div`
  color: #666;
  font-size: 12px;
  span {
    color: #55ad9b;
  }
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
    background: #f5f5f5;
    border: 0px solid #eee;
    border-radius: 50%;
    color: #666;
    font-size: 13px;
    cursor: pointer;
  }
`;

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  //상단으로 이동
  const handleClickGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    //스크롤시 특정 div에 다다르면 버튼 출력
    const handleIntersection = entries => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.95,
    });
    const target = document.getElementById("FooterWrap");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <FooterWrap id="FooterWrap">
      <FooterLeft>
        COPYRIGHT BY <span>MANDA</span>. ALL RIGHTS RESERVED.
      </FooterLeft>
      <FooterRight>
        {/* <SnsShare /> */}

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

      {isVisible && (
        <button
          type="button"
          className="btnGoTop"
          onClick={() => handleClickGoTop()}
        >
          <IoIosArrowUp />
        </button>
      )}
    </FooterWrap>
  );
};

export default Footer;
