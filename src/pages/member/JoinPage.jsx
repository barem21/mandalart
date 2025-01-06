import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import * as yup from "yup";
import { joinMember } from "../../apis/member";
import SubpageVisual from "../../components/subpageVisual/SubpageVisual";

const MemberJoinWrap = styled.div`
  padding: 0px 50px;

  .joinForm {
    max-width: 1280px;
    min-width: 1100px;
    margin: 0 auto;
    border-top: 1px solid #242424;
  }

  label {
    display: inline-block;
    min-width: 160px;
  }
  .inputBox {
    display: flex;
    align-items: center;
    padding: 15px 0px;
    border-bottom: 1px solid #eee;
  }
  label span {
    color: #ff3300;
    font-weight: 600;
  }
  .inputBox input {
    min-width: 300px;
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

const Agreements = styled.div`
  margin: 40px 0px;
  border: none;
  h2 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 400;
  }
  .privercy {
    height: 200px;
    margin-bottom: 10px;
    padding: 20px;
    border: 1px solid #ddd;
    color: #666;
    font-size: 14px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .checkAgree {
    display: flex;
    align-items: center;
  }
  .checkAgree label {
    margin-right: 5px;
  }
  .checkAgree input {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;

const LoadingWrap = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  border-top: 1px solid #eee;
`;

//yup 관련 설정
//1. schema를 먼저 설정한다.
const schema = yup.object({
  userId: yup
    .string()
    .required("이메일은 필수입니다.")
    .email("올바른 이메일 형식이 아닙니다.")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "올바른 이메일 형식이 아닙니다.",
    ),
  upw: yup
    .string()
    .required("비밀번호는 필수입니다.")
    .min(8, "비밀번호는 최소 8자 이상입니다.")
    .max(16, "비밀번호는 최대 16자까지 가능합니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "비밀번호는 영어/숫자/특수문자 포함 8자리 이상으로 입력해 주세요.",
    ),
  upw_confirm: yup
    .string()
    .required("비밀번호 확인은 필수입니다.")
    .oneOf([yup.ref("upw")], "비밀번호가 일치하지 않습니다."),
  nickName: yup
    .string()
    .required("닉네임은 필수입니다.")
    .min(4, "닉네임은 최소 4글자 이상 입력해 주세요.")
    .max(10, "닉네임은 최대 10자까지 가능합니다."),
  policy: yup.boolean().oneOf([true], "필수"),
});

function JoinPage() {
  const [isUserIdChecking, setIsUserIdChecking] = useState(false);
  const [isUserIdAvailable, setIsUserIdAvailable] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userId: "",
      upw: "",
      upw_confirm: "",
      nickName: "",
      policy: false,
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  //뒤로가기
  const historyBack = () => {
    navigate(-1);
  };

  //아이디(이메일) 중복확인
  const userId = watch("userId"); //이메일 입력상태 추적
  const checkUserIdAvailability = async () => {
    if (userId.length === 0) {
      setIsUserIdAvailable(null);
      return;
    }
    setIsUserIdChecking(true); //중복 검사중

    try {
      //const res = { resultData: 0 };
      const res = await axios.get(`api/user/email?userId=${userId}`);
      //console.log(res.data.resultData);

      if (res.data.resultData === 1) {
        setIsUserIdAvailable(true); //사용가능
      } else {
        setIsUserIdAvailable(false); //중복
      }
    } catch (error) {
      console.error("Error user_id:", error);
      setIsUserIdAvailable(null);
    } finally {
      setIsUserIdChecking(false); //종복 검사완료
    }
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
      //console.log(res.data);

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

  const onSubmit = async data => {
    if (isUserIdAvailable === false) {
      alert(
        "이미 사용중인 아이디입니다.\n아이디 중복체크를 다시 진행해 주세요.",
      );
      return;
    }
    if (isNicknameAvailable === false) {
      alert(
        "이미 사용중인 닉네임입니다.\n닉네임 중복체크를 다시 진행해 주세요.",
      );
      return;
    }

    try {
      setIsLoading(true);
      const result = await joinMember(data); //axios 전송하기(등록)
      if (result.data) {
        navigate("/joinEnd");
      } else {
        //회원가입 실패
        alert("회원가입이 실패되었습니다.\n다시 시도해 주세요.");
      }
      setIsLoading(false);
    } catch (error) {
      console.log("회원가입 실패:", error);
    }
  };

  return (
    <>
      <SubpageVisual></SubpageVisual>

      <MemberJoinWrap>
        <h1 className="subTitle">회원가입</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="joinForm">
            <div className="inputBox">
              <label htmlFor="email">
                이메일 <span>*</span>
              </label>
              <input
                type="text"
                id="email"
                maxLength={30}
                {...register("userId")}
              />
              <button
                type="button"
                className="btnLine"
                onClick={e => checkUserIdAvailability(e)}
                disabled={isUserIdChecking}
              >
                중복체크
              </button>
              {/* 에러내용 출력 */}
              {errors.userId && (
                <ErrorMessage>({errors.userId?.message})</ErrorMessage>
              )}

              {/*
              {isUserIdChecking && (
                <ErrorMessage>(이메일 중복체크 중입니다.)</ErrorMessage>
              )}
              */}

              {isUserIdAvailable === true && (
                <ErrorMessage>(사용 가능한 이메일입니다.)</ErrorMessage>
              )}
              {isUserIdAvailable === false && (
                <ErrorMessageRed>
                  (이미 사용 중인 이메일입니다.)
                </ErrorMessageRed>
              )}
            </div>

            <div className="inputBox">
              <label htmlFor="password">
                비밀번호 <span>*</span>
              </label>
              <input
                type="password"
                id="password"
                maxLength={16}
                {...register("upw")}
              />
              {/* 에러내용 출력 */}
              {errors.upw && (
                <ErrorMessage>({errors.upw?.message})</ErrorMessage>
              )}
            </div>

            <div className="inputBox">
              <label htmlFor="password_confirm">
                비밀번호 확인 <span>*</span>
              </label>
              <input
                type="password"
                id="password_confirm"
                maxLength={16}
                {...register("upw_confirm")}
              />
              {/* 에러내용 출력 */}
              {errors.upw_confirm && (
                <ErrorMessage>({errors.upw_confirm?.message})</ErrorMessage>
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
                disabled={isChecking}
                {...register("nickName")}
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
              {errors.nickName && (
                <ErrorMessage>({errors.nickName?.message})</ErrorMessage>
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

            <div className="inputBox">
              <label htmlFor="profile">프로필 등록</label>
              <div style={{ padding: "10px 0px" }}>
                <input type="file" id="profile" {...register("pic")} />
              </div>
            </div>

            <Agreements>
              <h2>[필수] 개인정보처리방침</h2>
              <div className="privercy">
                개인정보 취급방침
                <br />
                <br />
                1. 개인정보 수집 항목
                <br />
                해당 서비서는 회원가입, 서비스 제공 등을 위해 다음과 같은
                개인정보를 수집합니다.
                <br />
                <br />
                필수 항목: 이메일 주소, 닉네임
                <br />
                선택 항목: 없음
                <br />
                <br />
                2. 개인정보 수집 및 이용 목적
                <br />
                당사는 수집한 개인정보를 다음의 목적을 위해 사용합니다.
                <br />
                - 회원 가입 및 관리
                <br />
                - 고객 서비스 제공 및 피드백 처리
                <br />
                <br />
                3. 개인정보 보유 및 이용 기간
                <br />
                당사는 개인정보를 수집한 목적을 달성할 때까지 보유합니다.
                <br />
                회원 탈퇴 시 또는 서비스 이용을 중지한 경우, 관련 법령에 따라
                일정 기간 보유할 수 있습니다.
                <br />
                <br />
                4. 개인정보 제공
                <br />
                당사는 원칙적으로 사용자의 개인정보를 제3자에게 제공하지
                않습니다. 다만, 법령에 의하거나, 서비스 제공에 필요한 경우 (예:
                배송업체, 결제 서비스 제공업체 등) 필요한 최소한의 정보를 제공할
                수 있습니다.
                <br />
                <br />
                5. 개인정보 보호
                <br />
                당사는 개인정보 보호를 위해 안전한 기술적, 관리적 조치를 취하고
                있습니다.
                <br />
                <br />
                개인정보 암호화 및 접근 제어
                <br />
                내부 개인정보 관리자의 교육
                <br />
                6. 이용자 및 법정대리인의 권리와 행사 방법
                <br />
                <br />
                사용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며,
                개인정보 삭제를 요청할 수 있습니다.
                <br />
                개인정보 수집 및 이용에 동의한 경우에도 언제든지 철회할 수
                있습니다.
                <br />
                <br />
                7. 개인정보 처리방침 변경
                <br />
                이 개인정보 처리방침은 관련 법령 및 회사 정책에 따라 변경될 수
                있으며, 변경 시에는 즉시 공지합니다.
                <br />
                <br />
                8. 연락처
                <br />
                회사명: [회사명]
                <br />
                전화번호: [전화번호]
                <br />
                이메일: [이메일 주소]
                <br />
                주소: [회사 주소]
              </div>

              <div className="checkAgree">
                <input type="checkbox" id="agreement" {...register("policy")} />
                <label htmlFor="agreement">
                  개인정보 취급방침에 동의합니다.
                </label>

                {/* 에러내용 출력 */}
                {errors.policy && (
                  <ErrorMessage>({errors.policy?.message})</ErrorMessage>
                )}
              </div>
            </Agreements>

            <ButtonWrap>
              <button type="button" className="btnLine" onClick={() => reset()}>
                다시작성
              </button>
              <button
                type="button"
                className="btnLine"
                onClick={() => historyBack()}
              >
                취소하기
              </button>
              <button type="submit" className="btnColor">
                회원가입하기
              </button>
            </ButtonWrap>
          </div>
        </form>

        {isLoading && (
          <LoadingWrap>
            <FadeLoader color="#fff" width={10} height={30} margin={20} />
          </LoadingWrap>
        )}
      </MemberJoinWrap>
    </>
  );
}

export default JoinPage;
