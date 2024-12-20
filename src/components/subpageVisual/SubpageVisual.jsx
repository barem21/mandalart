import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

const SubVisualTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 150px;
  font-size: 0px;
  overflow: hidden;
  img {
    object-fit: cover;
    max-width: none;
  }
`;

const SubpageVisual = () => {
  const location = useLocation(); //현재 페이지 확인
  //console.log(location.pathname);
  let subVisual = "";
  switch (location.pathname) {
    case "/about":
      subVisual = "top_about.png";
      break;
    default:
      subVisual = "top_member.png";
  }

  return (
    <SubVisualTop>
      <img src={subVisual} alt="" />
    </SubVisualTop>
  );
};

export default SubpageVisual;
