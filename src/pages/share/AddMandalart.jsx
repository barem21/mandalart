import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { getSession } from "../../apis/member";
import { getMyplan } from "../../apis/myplan";
import { postShare } from "../../apis/share";

const LOGIN_SESSION_KEY = "login_session";

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
  .ql-editor {
    height: 250px;
  }
  /*
  .writeWrap button {
    width: 100%;
    margin: 0px;
  }
  */
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
  border-top: 0px solid #eee;
`;

//schema 먼저 생성
const addSchema = yup.object({
  title: yup.string().required("제목을 입력해 주세요."),
  projectId: yup.string().required("공유할 만다라트 계획표를 선택해 주세요."),
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

function WriteMandalart() {
  const [myList, setMyList] = useState([]);
  const navigate = useNavigate();
  const sessionData = getSession(LOGIN_SESSION_KEY);

  // 모듈 활용
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [
          {
            color: [
              "#000000",
              "#e60000",
              "#ff9900",
              "#ffff00",
              "#008a00",
              "#0066cc",
              "#9933ff",
              "#ffffff",
              "#facccc",
              "#ffebcc",
              "#ffffcc",
              "#cce8cc",
              "#cce0f5",
              "#ebd6ff",
              "#bbbbbb",
              "#f06666",
              "#ffc266",
              "#ffff66",
              "#66b966",
              "#66a3e0",
              "#c285ff",
              "#888888",
              "#a10000",
              "#b26b00",
              "#b2b200",
              "#006100",
              "#0047b2",
              "#6b24b2",
              "#444444",
              "#5c0000",
              "#663d00",
              "#666600",
              "#003700",
              "#002966",
              "#3d1466",
              "custom-color",
            ],
          },
          { background: [] },
        ],
      ],
    },
  };

  const {
    control,
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addSchema),
    defaultValues: {
      userId: "",
      title: "",
      projectId: "",
      content: "",
    },
    mode: "all",
  });

  //내 만다라트 가져오기
  const getMandalart = async () => {
    try {
      const result = await getMyplan({
        userId: sessionData.userId,
        subLocation: "/",
      }); //axios
      setMyList(result.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  //뒤로가기
  const historyBack = () => {
    navigate(-1);
  };

  const handleSubmitForm = async data => {
    try {
      const result = await postShare(data);
      if (result.resultData === 1) {
        alert("공유 만다라트 등록이 완료되었습니다.");
        navigate("/share");
      } else {
        alert("공유 만다라트 등록이 실패되었습니다.\n다시 시도해 주세요.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMandalart();
  }, []);

  useEffect(() => {
    setValue("userId", sessionData.userId && sessionData.userId);
  }, [sessionData, setValue]);

  return (
    <>
      <ShareWriteWrap>
        <h1 className="subTitle">만다라트 공유</h1>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <input type="hidden" {...register("userId")} />
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
                <select id="share" {...register("projectId")}>
                  <option value="">선택해주세요.</option>
                  {myList.map((item, index) => {
                    return (
                      item.sharedFg === 0 && (
                        <option key={index} value={item.projectId}>
                          {item.title}
                        </option>
                      )
                    );
                  })}
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
                <Controller
                  name="content" // name을 지정하여 React Hook Form과 연결
                  control={control}
                  rules={{ required: "간단 소개글을 입력해 주세요." }} // validation
                  render={({ field }) => (
                    <ReactQuill
                      modules={modules}
                      {...field}
                      placeholder="간단 소개글을 입력해 주세요."
                    />
                  )}
                />
                {errors.content?.message && (
                  <ErrorMessage>({errors.content?.message})</ErrorMessage>
                )}
              </div>
            </div>

            {/*
            <div className="inputBox borderNone">
              <label htmlFor="profile">섬네일 등록</label>
              <div style={{ padding: "10px 0px" }}>
                <input type="file" id="profile" {...register("profile")} />
              </div>
            </div>
            */}
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

export default WriteMandalart;
