import styled from "@emotion/styled";

const NotFoundContent = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 40px;
  background: #f5f5f5;
  align-items: center;

  h1 {
    margin-bottom: 20px;
  }

  button {
    margin-right: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: #ddd;
    cursor: pointer;
  }
`;

function NotFoundPage() {
  return (
    <NotFoundContent>
      <div>
        <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
        <div>
          <button type="button">이전 페이지로</button>
          <button type="button">메인 페이지로</button>
        </div>
      </div>
    </NotFoundContent>
  );
}

export default NotFoundPage;
