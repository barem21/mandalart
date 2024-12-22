import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearSession } from "../../apis/member";

//세션 생성
const LOGIN_SESSION_KEY = "login_session";

function LogoutPage() {
  const navigate = useNavigate();
  clearSession(LOGIN_SESSION_KEY); //세션 삭제

  useEffect(() => {
    navigate("/"); //홈으로 이동

    return () => {};
  }, [navigate]);

  return (
    <div>
      <h1 className="subTitle">로그아웃</h1>
    </div>
  );
}

export default LogoutPage;
