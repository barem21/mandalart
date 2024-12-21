import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { deleteMember, getSession, patchMember } from "../../apis/member";
import PopupLayout from "../../components/PopupLayout";
import SubpageVisual from "../../components/subpageVisual/SubpageVisual";

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
  nick_name: yup
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
  const { userId, nickName, userPic } = sessionData.resultData;

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
      user_id: "",
      upw: "",
      new_upw: "",
      new_upw_confirm: "",
      nick_name: "",
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
      user_id: "",
    },
  });

  //뒤로가기
  const historyBack = () => {
    navigate(-1);
  };

  //닉네임 중복확인
  const userNick = watch("nick_name"); //닉네임 입력상태 추적
  const checkNicknameAvailability = async () => {
    if (userNick.length === 0) {
      setIsNicknameAvailable(null);
      return;
    }
    setIsChecking(true); //중복 검사중

    try {
      const res = { resultData: 1 };
      //const res = await axios.get("http://192.168.0.106:5000/member?nick_name=${userNickname}");
      //console.log(res.data);

      if (res.resultData === 1) {
        setIsNicknameAvailable(true); //사용가능
      } else {
        setIsNicknameAvailable(false); //중복
      }
    } catch (error) {
      console.error("Error nick_name:", error);
      setIsNicknameAvailable(null);
    } finally {
      setIsChecking(false); //종복 검사완료
    }
  };

  //회원정보 수정
  const onSubmit = async data => {
    //console.log(data);
    try {
      const result = await patchMember(data); //axios처리(수정)
      if (result.data) {
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
    //console.log(data);
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
    setValueForm1("user_id", userId);
    setValueForm1("nick_name", nickName);
    setValueForm2("user_id", userId);
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
              <input type="hidden" {...registerForm1("user_id")} />
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
                {...registerForm1("new_upw")}
              />
              {/* 에러내용 출력 */}
              {formError1.new_upw && (
                <ErrorMessage>({formError1.new_upw?.message})</ErrorMessage>
              )}
            </div>

            <div className="inputBox">
              <label htmlFor="new_password_confirm">비밀번호 확인</label>
              <input
                type="password"
                id="new_password_confirm"
                maxLength={16}
                {...registerForm1("new_password_confirm")}
              />
              {/* 에러내용 출력 */}
              {formError1.new_password_confirm && (
                <ErrorMessage>
                  ({formError1.new_password_confirm?.message})
                </ErrorMessage>
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
                {...registerForm1("nick_name")}
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
              {formError1.nick_name && (
                <ErrorMessage>({formError1.nick_name.message})</ErrorMessage>
              )}

              {isChecking && (
                <ErrorMessage>(닉네임 중복체크 중입니다.)</ErrorMessage>
              )}
              {isNicknameAvailable === true && (
                <ErrorMessage>(사용 가능한 닉네임입니다.)</ErrorMessage>
              )}
              {isNicknameAvailable === false && (
                <ErrorMessage>(이미 사용 중인 닉네임입니다.)</ErrorMessage>
              )}
            </div>

            <div className="inputBox borderNone">
              <label htmlFor="profile">프로필 등록</label>
              <div style={{ padding: "10px 0px" }}>
                <input type="file" id="profile" {...registerForm1("profile")} />
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
                  {...registerForm2("user_id")}
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
