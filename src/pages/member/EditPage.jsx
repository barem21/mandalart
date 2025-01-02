import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { deleteMember, getSession, editMember } from "../../apis/member";
import PopupLayout from "../../components/PopupLayout";
import SubpageVisual from "../../components/subpageVisual/SubpageVisual";
import axios from "axios";

//세션 생성
const LOGIN_SESSION_KEY = "login_session";

const MemberJoinWrap = styled.div`
  padding: 0px 50px;

  .joinForm {
    max-width: 1280px;
    min-width: 1100px;
    margin: 0 auto;
    border-top: 1px solid #242424;
  }

  .joinForm label {
    display: inline-block;
    min-width: 160px;
  }
  .joinForm .inputBox {
    display: flex;
    align-items: center;
    padding: 15px 0px;
    border-bottom: 1px solid #eee;
  }
  .joinForm label span {
    color: #ff3300;
    font-weight: 600;
  }
  .joinForm .inputBox input {
    min-width: 300px;
  }
  .joinForm .borderNone {
    border-bottom: none !important;
  }
`;
const ErrorMessage = styled.p`
  margin-left: 10px;
  color: #55ad9b;
  font-size: 13px;
`;
const ErrorMessageRed = styled.p`
  margin-left: 10px;
  color: #ff3300;
  font-size: 13px;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 40px;
  border-top: 1px solid #eee;
  .btnMemberOut {
    position: absolute;
    left: 0px;
    border: none;
    background: none;
    color: #666;
    cursor: pointer;
  }
`;

//yup 관련 설정
//1. schema를 먼저 설정한다.
const schema = yup.object({
  upw: yup
    .string()
    .required("비밀번호는 필수입니다.")
    .min(8, "비밀번호는 8자리 이상입니다."),
  /*
  new_password: yup
    .string()
    .max(16, "비밀번호는 최대 16자까지 가능합니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "신규 비밀번호는 영어/숫자/특수문자 포함 8자리 이상으로 입력해주세요.",
    ),
  */
  new_upw_confirm: yup
    .string()
    .oneOf([yup.ref("new_upw")], "비밀번호가 일치하지 않습니다."),
  nickName: yup
    .string()
    .required("닉네임은 필수입니다.")
    .min(2, "닉네임은 최소 2자 이상 입력해주세요.")
    .max(10, "닉네임은 최대 10자까지 가능합니다."),
});

function EditPage() {
  //  Todo 1: 사용자가 중복체크 성공시 저장한 닉네임 (Todo: 아이디어는 useRef 활용예정)

  const [isChecking, setIsChecking] = useState(false);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  const sessionData = getSession(LOGIN_SESSION_KEY);
  const { userId, nickName, userPic } = sessionData;

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const {
    register: registerForm1,
    handleSubmit: handleSubmitForm1,
    setValue: setValueForm1,
    watch,
    formState: { errors: formError1 },
  } = useForm({
    defaultValues: {
      userId: "",
      upw: "",
      newUpw: "",
      checkUpw: "",
      nickName: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const {
    register: registerForm2,
    handleSubmit: handleSubmitForm2,
    setValue: setValueForm2,
  } = useForm({
    defaultValues: {
      userId: "",
    },
  });

  //뒤로가기
  const historyBack = () => {
    navigate(-1);
  };

  //닉네임 중복확인
  const userNick = watch("nickName"); //닉네임 입력상태 추적
  const checkNicknameAvailability = async () => {
    if (userNick.length === 0) {
      setIsNicknameAvailable(null);
      return;
    }
    setIsChecking(true); //중복 검사중

    try {
      const res = await axios.get(`api/user/nickName?nickName=${userNick}`);
      console.log(res.data);

      if (res.data.resultData === 1) {
        setIsNicknameAvailable(true); //사용가능
      } else {
        setIsNicknameAvailable(false); //중복
      }
    } catch (error) {
      console.error("Error nickName:", error);
      setIsNicknameAvailable(null);
    } finally {
      setIsChecking(false); //종복 검사완료
    }
  };

  //회원정보 수정
  const onSubmit = async data => {
    if (isNicknameAvailable === null && userNick !== sessionData?.nickName) {
      alert("닉네임 중복체크를 진행해 주세요.");
      return;
    }
    if (isNicknameAvailable === false) {
      alert(
        "이미 사용중인 닉네임입니다.\n닉네임 중복체크를 다시 진행해 주세요.",
      );
      return;
    }

    try {
      const result = await editMember(data); //axios처리(수정)
      if (result.resultData === 1) {
        alert("회원정보 수정이 완료되었습니다.");
        navigate("/");
      } else {
        //회원정보 수정 실패
        alert("회원정보 수정이 실패되었습니다.\n다시 시도해 주세요.");
      }
    } catch (error) {
      console.log("회원정보 수정 실패:", error);
    }
  };

  //회원탈퇴
  const onSubmit2 = async data => {
    try {
      const result = await deleteMember(data); //axios처리(삭제)
      if (result.data) {
        alert("회원탈퇴가 완료되었습니다.");
        navigate("/logout");
      } else {
        alert("회원탈퇴가 실패되었습니다.\n다시 시도해 주세요.");
      }
    } catch (error) {
      console.log("회원가입 실패:", error);
    }
  };

  useEffect(() => {
    if (!sessionData) {
      alert("회원 로그인이 필요합니다.");
      navigate("/login");
    }
    return () => {};
  }, []);

  useEffect(() => {
    setValueForm1("userId", userId);
    setValueForm1("nickName", nickName);
    setValueForm2("userId", userId);
    return () => {};
  }, []);

  return (
    <>
      <SubpageVisual></SubpageVisual>

      <MemberJoinWrap>
        <h1 className="subTitle">회원정보 수정</h1>
        <form onSubmit={handleSubmitForm1(onSubmit)}>
          <div className="joinForm">
            <div className="inputBox">
              <label>
                이메일 <span>*</span>
              </label>
              <p style={{ padding: "10px 0px", color: "#999" }}>{userId}</p>
              <input type="hidden" {...registerForm1("userId")} />
            </div>

            <div className="inputBox">
              <label htmlFor="password">
                현재 비밀번호 <span>*</span>
              </label>
              <input
                type="password"
                id="password"
                maxLength={16}
                {...registerForm1("upw")}
              />
              {/* 에러내용 출력 */}
              {formError1.upw && (
                <ErrorMessage>({formError1.upw?.message})</ErrorMessage>
              )}
            </div>

            <div className="inputBox">
              <label htmlFor="new_password">신규 비밀번호</label>
              <input
                type="password"
                id="new_password"
                maxLength={16}
                {...registerForm1("newUpw")}
              />
              {/* 에러내용 출력 */}
              {formError1.newUpw && (
                <ErrorMessage>({formError1.newUpw?.message})</ErrorMessage>
              )}
            </div>

            <div className="inputBox">
              <label htmlFor="new_password_confirm">비밀번호 확인</label>
              <input
                type="password"
                id="new_password_confirm"
                maxLength={16}
                {...registerForm1("checkUpw")}
              />
              {/* 에러내용 출력 */}
              {formError1.checkUpw && (
                <ErrorMessage>({formError1.checkUpw?.message})</ErrorMessage>
              )}
            </div>

            <div className="inputBox">
              <label htmlFor="nickname">
                닉네임 <span>*</span>
              </label>
              <input
                type="text"
                id="nickname"
                maxLength={10}
                {...registerForm1("nickName")}
              />
              <button
                type="button"
                className="btnLine"
                onClick={e => checkNicknameAvailability(e)}
                disabled={isChecking}
              >
                중복체크
              </button>
              {/* 에러내용 출력 */}
              {formError1.nickName && (
                <ErrorMessage>({formError1.nickName.message})</ErrorMessage>
              )}

              {/*
              {isChecking && (
                <ErrorMessage>(닉네임 중복체크 중입니다.)</ErrorMessage>
              )}
              */}

              {isNicknameAvailable === true && (
                <ErrorMessage>(사용 가능한 닉네임입니다.)</ErrorMessage>
              )}
              {isNicknameAvailable === false && (
                <ErrorMessageRed>
                  (이미 사용 중인 닉네임입니다.)
                </ErrorMessageRed>
              )}
            </div>

            <div className="inputBox borderNone">
              <label htmlFor="profile">프로필 등록</label>
              <div style={{ padding: "10px 0px" }}>
                <input type="file" id="profile" {...registerForm1("pic")} />
              </div>
              {userPic}
            </div>

            <ButtonWrap>
              <button
                type="button"
                className="btnLine"
                onClick={() => historyBack()}
              >
                취소하기
              </button>
              <button type="submit" className="btnColor">
                정보수정하기
              </button>
              <button
                type="button"
                className="btnMemberOut"
                onClick={() => setIsModalVisible(true)}
              >
                회원탈퇴→
              </button>
            </ButtonWrap>
          </div>
        </form>

        {isModalVisible && (
          <PopupLayout
            isVisible={isModalVisible}
            onClose={closeModal}
            title={"회원탈퇴하기"}
          >
            <form onSubmit={handleSubmitForm2(onSubmit2)}>
              <div className="guideText inputBox">
                회원을 탈퇴하시면 등록하신 만다라트 계획표 및 공유 게시물이 모두
                삭제됩니다. 탈퇴하시겠습니까?
              </div>
              <div className="buttonWrap">
                <input
                  type="hidden"
                  {...registerForm2("userId")}
                  value={userId}
                />
                <button
                  type="button"
                  className="btnPopLine"
                  onClick={() => setIsModalVisible(false)}
                >
                  창닫기
                </button>
                <button type="submit" className="btnPupColor">
                  탈퇴하기
                </button>
              </div>
            </form>
          </PopupLayout>
        )}
      </MemberJoinWrap>
    </>
  );
}

export default EditPage;
