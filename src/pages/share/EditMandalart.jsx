import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as yup from "yup";
import { getSession } from "../../apis/member";
import { getMyplan } from "../../apis/myplan";
import { editShare, getMandalartData } from "../../apis/share";

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
});

function EditMandalart() {
  const navigate = useNavigate();

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
    setValue,
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

  const [myList, setMyList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const projectId = searchParams.get("projectId"); //개별 데이터로 뜯기
  const sessionData = getSession(LOGIN_SESSION_KEY);

  //내 만다라트 가져오기
  const getMandalart = async () => {
    try {
      const result = await getMyplan({
        userId: sessionData.userId,
        subLocation: "/",
      }); //axios
      //console.log(result.resultData);
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
      const result = await editShare(data);
      //console.log(result);
      if (result.resultData === 1) {
        alert("공유 만다라트 수정이 완료되었습니다.");
        navigate("/share");
      } else {
        alert("공유 만다라트 수정이 실패되었습니다.\n다시 시도해 주세요.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMandalart();
    setValue("userId", sessionData.userId && sessionData.userId);
    setValue("projectId", projectId);
  }, []);

  useEffect(() => {
    //만다라트 정보 호출
    const getMandalartInfo = async () => {
      try {
        const result = await getMandalartData(projectId, sessionData?.userId); //axios
        setValue("title", result.resultData.title);
        setValue("content", result.resultData.content);
      } catch (error) {
        console.log("검색 실패:", error);
      }
    };
    getMandalartInfo(); //만다라트 가져오기
  }, []);

  return (
    <>
      <ShareWriteWrap>
        <h1 className="subTitle">만다라트 공유하기</h1>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <input type="hidden" {...register("userId")} />
          <input type="hidden" {...register("projectId")} />
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
                      <option key={index} value={item.projectId}>
                        {item.title}
                      </option>
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
              수정하기
            </button>
          </ButtonWrap>
        </form>
      </ShareWriteWrap>
    </>
  );
}

export default EditMandalart;
