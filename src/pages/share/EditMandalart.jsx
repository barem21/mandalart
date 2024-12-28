import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const ShareWriteWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .writeWrap {
    border-top: 1px solid #242424;
  }
  .writeWrap {
    border-top: 1px solid #242424;
  }
  .writeWrap .inputBox input[type="text"] {
    width: 95%;
  }
  .writeWrap .inputBox textarea {
    width: 95%;
    height: 300px;
    padding: 15px 10px;
    resize: vertical;
  }
  .writeWrap button {
    width: 100%;
    margin: 0px;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  color: #55ad9b;
  font-size: 13px;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  border-top: 1px solid #eee;
`;

//schema 먼저 생성
const addSchema = yup.object({
  title: yup.string().required("제목을 입력해 주세요."),
  share: yup.string().required("공유할 만다라트 계획표를 선택해 주세요."),
  content: yup.string().required("간단 소개글을 입력해 주세요."),
  /*
  pic: yup
    .mixed()
    .test("fileType", "이미지(jpg, png) 파일만 첨부가능합니다.", value => {
      return value && ["image/jpeg", "image/png"].includes(value[0]?.type);
    })
    .test("filesize", "파일 크기는 500KB 이하만 가능합니다.", value => {
      return value && value[0]?.size <= 0.5 * 1024 * 1024; // 500KB 이하
    }),
  */
});

function EditMandalart() {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addSchema),
    defaultValues: {
      mid: "",
      title: "",
      share: "",
      content: "",
      pic: "",
    },
    mode: "all",
  });

  //내 만다라트 가져오기
  const getMandalart = async () => {
    try {
      const res = await axios.get(
        `api/project?searchFilter=1&userId=test@40gmail.com&page=1&size=30`,
      );
      console.log("목록보기 결과 : ", res.data);
      //return res.data; //결과 리턴
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  //뒤로가기
  const historyBack = () => {
    navigate(-1);
  };

  const handleSubmitForm = data => {
    alert("ok");
    //모아둔 전송할 데이터(axios.post전송)
    console.log(data);
  };

  useEffect(() => {
    getMandalart();
  }, []);

  return (
    <>
      <ShareWriteWrap>
        <h1 className="subTitle">만다라트 공유하기</h1>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="writeWrap">
            <div className="inputBox">
              <label>
                제목 <span>*</span>
              </label>
              <div style={{ width: "100%" }}>
                <input type="text" {...register("title")} />
                {errors.title?.message && (
                  <ErrorMessage>({errors.title?.message})</ErrorMessage>
                )}
              </div>
            </div>
            <div className="inputBox">
              <label htmlFor="share">
                공유 만다라트 선택 <span>*</span>
              </label>
              <div style={{ width: "100%" }}>
                <select id="share" {...register("share")}>
                  <option value="">선택해주세요.</option>
                  <option value="1">홍길동 님의 6개월 런닝 계획표</option>
                  <option value="2">홍길동 님의 3개월 다이어트 플랜</option>
                </select>
                {errors.share?.message && (
                  <ErrorMessage>({errors.share?.message})</ErrorMessage>
                )}
              </div>
            </div>
            <div className="inputBox">
              <label>
                간단 소개글 <span>*</span>
              </label>
              <div style={{ width: "100%" }}>
                <textarea
                  id="content"
                  placeholder="간단 소개글을 입력해 주세요."
                  {...register("content")}
                ></textarea>
                {errors.content?.message && (
                  <ErrorMessage>({errors.content?.message})</ErrorMessage>
                )}
              </div>
            </div>

            <div className="inputBox borderNone">
              <label htmlFor="profile">섬네일 등록</label>
              <div style={{ padding: "10px 0px" }}>
                <input type="file" id="profile" {...register("profile")} />
              </div>
            </div>
          </div>

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
              등록하기
            </button>
          </ButtonWrap>
        </form>
      </ShareWriteWrap>
    </>
  );
}

export default EditMandalart;
