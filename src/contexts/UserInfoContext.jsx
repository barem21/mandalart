import { createContext, useState } from "react";

export const UserInfoContext = createContext();
export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userNickname: "",
    usrPic: "",
    userRole: "guest",
  });
  //return (값, 기능 목록 등...);
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {/* 지역범위 */}
      {children}
    </UserInfoContext.Provider>
  );
};
