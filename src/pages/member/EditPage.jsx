import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { deleteMember, patchMember } from "../../apis/member";
import SubpageVisual from "../../components/subpageVisual/SubpageVisual";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import PopupLayout from "../../contexts/PopupLayout";

const MemberJoinWrap = styled.div`
  padding: 0px 50px;

  .joinForm {
    max-width: 75%;
    min-width: 800px;
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
  password: yup.string().required("비밀번호는 필수입니다."),
  /*
  new_password: yup
    .string()
    .max(16, "비밀번호는 최대 16자까지 가능합니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "신규 비밀번호는 영어/숫자/특수문자 포함 8자리 이상으로 입력해주세요.",
    ),
  */
  new_password_confirm: yup
    .string()
    .oneOf([yup.ref("new_password")], "비밀번호가 일치하지 않습니다."),
  nickname: yup
    .string()
    .required("닉네임은 필수입니다.")
    .min(2, "닉네임은 최소 2자 이상 입력해주세요.")
    .max(10, "닉네임은 최대 10자까지 가능합니다."),
});

function EditPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { userInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: userInfo?.userId,
      password: "",
      new_password: "",
      new_password_confirm: "",
      nickname: userInfo?.userNickname,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    try {
      const result = await patchMember(data); //axios 전송하기(수정)
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

  const handleOutSubmit = async data => {
    data.preventDefault(); //submit 동작 방지

    try {
      const result = await deleteMember(data); //axios 전송하기(삭제)
      if (result.data) {
        alert("회원탈퇴가 완료되었습니다.");
        navigate("/");
      } else {
        alert("회원탈퇴가 실패되었습니다.\n다시 시도해 주세요.");
      }
    } catch (error) {
      console.log("회원가입 실패:", error);
    }
  };

  useEffect(() => {
    //console.log(userInfo);
    if (!userInfo.userId) {
      alert("회원 로그인이 필요합니다.");
      navigate("/login");
    }
    return () => {};
  }, []);

  return (
    <>
      <SubpageVisual></SubpageVisual>

      <MemberJoinWrap>
        <h1 className="subTitle">회원정보 수정</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="joinForm">
            <div className="inputBox">
              <label>
                이메일 <span>*</span>
              </label>
              <input type="text" value={userInfo?.userId} readOnly />
            </div>

            <div className="inputBox">
              <label htmlFor="password">
                현재 비밀번호 <span>*</span>
              </label>
              <input
                type="password"
                id="password"
                maxLength={16}
                {...register("password")}
              />
              {/* 에러내용 출력 */}
              {errors.password && (
                <ErrorMessage>({errors.password?.message})</ErrorMessage>
              )}
            </div>

            <div className="inputBox">
              <label htmlFor="new_password">신규 비밀번호</label>
              <input
                type="password"
                id="new_password"
                maxLength={16}
                {...register("new_password")}
              />
              {/* 에러내용 출력 */}
              {errors.new_password && (
                <ErrorMessage>({errors.new_password.message})</ErrorMessage>
              )}
            </div>

            <div className="inputBox">
              <label htmlFor="new_password_confirm">비밀번호 확인</label>
              <input
                type="password"
                id="new_password_confirm"
                maxLength={16}
                {...register("new_password_confirm")}
              />
              {/* 에러내용 출력 */}
              {errors.new_password_confirm && (
                <ErrorMessage>
                  ({errors.new_password_confirm?.message})
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
                {...register("nickname")}
              />
              <button type="button" className="btnLine">
                중복체크
              </button>
              {/* 에러내용 출력 */}
              {errors.nickname && (
                <ErrorMessage>({errors.nickname.message})</ErrorMessage>
              )}
            </div>

            <div className="inputBox borderNone">
              <label htmlFor="profile">프로필 등록</label>
              <input type="file" id="profile" {...register("profile")} />
              {userInfo?.userPic}
            </div>

            <ButtonWrap>
              <button type="button" className="btnLine">
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
            <form onSubmit={handleOutSubmit()}>
              <div className="guideText inputBox">
                회원을 탈퇴하시면 등록하신 만다라트 계획표 및 공유 게시물이 모두
                삭제됩니다. 탈퇴하시겠습니까?
              </div>
              <div className="buttonWrap">
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
