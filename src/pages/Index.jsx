import styled from "@emotion/styled";

const MainLayout = styled.div`
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
    text-align: center;
  }
`;

function Index() {
  return (
    <MainLayout>
      <div className="mainSlide">비주얼 슬라이드</div>
      <div className="mainContent">
        <div>만다라트 공유하기</div>
      </div>
    </MainLayout>
  );
}

export default Index;
