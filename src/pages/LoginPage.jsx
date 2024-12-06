import styled from "@emotion/styled";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

const LoginForm = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .loginForm {
    width: 300px;
    margin: 0px auto;
  }
  input {
    width: 100%;
    height: 36px;
    margin: 2px 0px;
    padding-left: 5px;
    border: 1px solid #ddd;
  }
  button {
    width: 100%;
    height: 36px;
    margin: 2px 0px;
    border: none;
    cursor: pointer;
  }
`;

function LoginPage() {
  return (
    <Router>
      <LoginForm>
        <h1>회원 로그인</h1>
        <div className="loginForm">
          <input type="text" name="id" placeholder="이메일" />
          <input type="text" name="id" placeholder="비밀번호" />
          <div>
            <button type="button">로그인</button>
          </div>
        </div>
        <div>
          <Link to="/">회원가입</Link>
          <Link to="/">아이디/비밀번호 찾기</Link>
        </div>

        <Routes>
          <Route path="/" />
          <Route path="/" />
        </Routes>
      </LoginForm>
    </Router>
  );
}
export default LoginPage;
