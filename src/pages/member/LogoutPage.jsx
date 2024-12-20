import { useContext, useEffect } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { useNavigate } from "react-router-dom";

function LogoutPage() {
  const { setUserInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();

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
