import styled from "@emotion/styled";

const MainLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: #eee;

  .mainSlide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background: #ccc;
  }
  .mainContent {
    display: flex;
    align-items: center;
  }
  .mainContent div {
    width: 33.3%;
    text-align: center;
  }
`;

const Main = () => {
  return (
    <MainLayout>
      <div className="mainSlide">이미지 슬라이드</div>
      <div className="mainContent">
        <div>공지사항</div>
        <div>갤러리</div>
        <div>배너</div>
      </div>
    </MainLayout>
  );
};

export default Main;
