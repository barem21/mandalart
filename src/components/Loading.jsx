import styled from "@emotion/styled";
import { FadeLoader } from "react-spinners";

const LoadingDiv = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const Loading = () => {
  return (
    <LoadingDiv>
      <FadeLoader color="#fff" width={10} height={30} margin={20} />
    </LoadingDiv>
  );
};

export default Loading;
