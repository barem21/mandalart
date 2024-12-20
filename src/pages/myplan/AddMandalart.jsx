import { useContext, useEffect } from "react";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { useNavigate } from "react-router-dom";

function AddMandalart() {
  const { userInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userInfo);
    if (!userInfo.userId) {
      alert("회원 로그인이 필요합니다.");
      navigate("/login");
    }
    return () => {};
  }, []);

  return (
    <div>
      <h1 className="subTitle">나의 만다라트</h1>
      <div>WriteMandalart</div>
    </div>
  );
}

export default AddMandalart;
