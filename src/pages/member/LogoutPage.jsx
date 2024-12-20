import { useContext, useEffect } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { useNavigate } from "react-router-dom";

//세션 생성
const LOGIN_SESSION_KEY = "login_session";

// 세션을 삭제
function clearSession() {
  sessionStorage.removeItem(LOGIN_SESSION_KEY); // 세션 스토리지에서 삭제
}

function LogoutPage() {
  const { setUserInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();
  clearSession();

  useEffect(() => {
    setUserInfo({
      userId: "",
      userNickname: "",
      userRole: "",
    });
    navigate("/"); //로그인 페이지로 이동

    return () => {};
  }, []);

  return <div>로그아웃</div>;
}

export default LogoutPage;
