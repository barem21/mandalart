import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginMember } from "../../apis/member";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SubpageVisual from "../../components/subpageVisual/SubpageVisual";

const LoginWrap = styled.div`
  .loginForm {
    max-width: 600px;
    margin: 0px auto;
    padding: 0px 50px;
  }
  .inputBox {
    margin-bottom: 20px;
  }
  .inputBox label {
    display: inline-block;
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

const ErrorMessage = styled.p`
  margin-left: 10px;
  color: #ff3300;
  font-size: 13px;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  a {
    color: #666;
  }
  span {
    padding: 0px 10px;
    color: #666;
    font-size: 13px;
  }
`;

//yup 관련 설정
const schema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해 주세요.")
    .email("올바른 이메일 형식이 아닙니다."),
  password: yup.string().required("비밀번호를 입렧해 주세요."),
});

function LoginPage() {
  const navigate = useNavigate();

  const onSubmit = async data => {
    try {
      const result = await loginMember(data); //axios 전송하기
      if (result.data) {
        navigate("/"); //로그인 페이지로 이동
      } else {
        alert("회원정보가 잘못되었습니다.\n다시 확인해 주세요.");
      }
    } catch (error) {
      console.log("로그인 실패:", error);
    }
  };

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  return (
    <>
      <SubpageVisual></SubpageVisual>

      <LoginWrap>
        <h1 className="subTitle">회원 로그인</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="loginForm">
            <div className="inputBox">
              <label htmlFor="email">아이디</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="이메일 아이디 입력"
              />
            </div>

            <div className="inputBox">
              <label htmlFor="password">비밀번호</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="비밀번호 입력"
              />
            </div>

            <ButtonWrap>
              <Link to={"/join"}>회원가입</Link>
              <span>/</span>
              <Link to={"/find"}>비밀번호 찾기</Link>
            </ButtonWrap>

            {/* 에러내용 출력 */}
            {errors.password_confirm && (
              <ErrorMessage>({errors.password_confirm?.message})</ErrorMessage>
            )}

            <div>
              <button type="submit" className="btnColor">
                로그인
              </button>
            </div>
          </div>
        </form>
      </LoginWrap>
    </>
  );
}
export default LoginPage;
