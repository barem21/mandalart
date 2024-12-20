import styled from "@emotion/styled";

const ShareWriteWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .inputBox {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .inputBox label {
    display: inline-block;
    min-width: 150px;
    margin-bottom: 10px;
  }
  .inputBox input {
    width: 100%;
  }
  button {
    width: 100%;
    margin: 0px;
  }
`;

function WriteMandalart() {
  return (
    <>
      <ShareWriteWrap>
        <h1 className="subTitle">만다라트 공유하기</h1>
        <div>
          <div className="inputBox">
            <label>제목</label>
            <input type="text" name="title" />
          </div>
          <div className="inputBox">
            <label>공유 만다라트 선택</label>
            <select name="share">
              <option>선택해주세요.</option>
              <option value="1">홍길동 님의 6개월 런닝 계획표</option>
              <option>홍길동 님의 3개월 다이어트 플랜</option>
            </select>
          </div>
          <div className="inputBox">
            <label>내용</label>
            <textarea name="content" />
          </div>
        </div>
      </ShareWriteWrap>
    </>
  );
}

export default WriteMandalart;
