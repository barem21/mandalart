import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoopContent from "../../components/mandalart/LoopContent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//임시 데이터
const SampleData = [
  {
    id: 1,
    img: "share_mandalart.png",
    title: "홍길동 님의 6개월 런닝 계획표",
    vote: 10,
  },
  {
    id: 2,
    img: "share_mandalart2.png",
    title: "김수한무 님의 한달 독서 계획표",
    vote: 5,
  },
  {
    id: 3,
    img: "share_mandalart.png",
    title: "야옹선생 님의 1년 헬스 계획표",
    vote: 1,
  },
  {
    id: 4,
    img: "share_mandalart2.png",
    title: "배워서남주자 님의 6개월 리액트 공부 계획표",
    vote: 13,
  },
  {
    id: 5,
    img: "share_mandalart2.png",
    title: "마르고닮도록 님의 3개월 다이어트 계획표",
    vote: 7,
  },
];

const schema = yup.object({
  title: yup
    .string()
    .required("제목은 필수입니다.")
    .min(5, "제목은 최소 5글자 이상 입력해야 합니다."),
});

const BoardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 0px 30px 0px 50px;
  select {
    margin-right: 5px;
  }
  input {
    margin-right: 3px;
  }
  .boardSearch {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 30px;
`;

const ModalPopup = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  .modalWrap {
    position: relative;
    min-width: 360px;
    padding: 30px;
    border-radius: 10px;
    background-color: #fff;
  }
  .inputBox {
    padding-bottom: 20px;
  }
  .inputBox label {
    display: block;
    margin-bottom: 5px;
  }
  .inputBox input {
    width: 100%;
  }
  .inputBox textarea {
    width: 100%;
    height: 70px;
  }
  .buttonWrap {
    display: flex;
    gap: 10px;
  }
  .buttonWrap button {
    width: 50%;
  }
`;

const ErrorMessage = styled.p`
  margin-left: 10px;
  margin-top: 5px;
  color: #ff3300;
  font-size: 13px;
`;

function Mypage() {
  const [addData, setAddData] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleAdd = value => {
    setAddData(value);
  };

  const onSubmit = () => {
    try {
      navigate("/myplan/add");
    } catch (error) {
      console.log("만다라트 생성 실패:", error);
    }
  };

  return (
    <>
      <h1 className="subTitle">나의 만다라트</h1>
      <BoardTop>
        <p className="">등록된 만라다트 계획표 : {SampleData?.length}건</p>

        <form>
          <div className="boardSearch">
            <select name="type">
              <option value="1">제목</option>
              <option value="2">내용</option>
              <option value="3">제목+내용</option>
              <option value="4">작성자</option>
            </select>
            <input
              type="text"
              name="search"
              maxLength="20"
              placeholder="검색어를 입력하세요."
            />
            <button type="submit" className="btnLine">
              검색
            </button>
          </div>
        </form>
      </BoardTop>

      <LoopContent datas={SampleData} />

      <ButtonWrap>
        <button
          type="button"
          className="btnColor"
          onClick={() => handleAdd(true)}
        >
          + 신규 등록하기
        </button>
      </ButtonWrap>

      {addData && (
        <ModalPopup onClick={() => handleAdd(null)}>
          <div className="modalWrap" onClick={e => e.stopPropagation()}>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputBox">
                  <label htmlFor="title">만다라트 제목 입력</label>
                  <input
                    type="text"
                    id="title"
                    className="popupInput"
                    placeholder="제목을 입력하세요."
                    {...register("title")}
                  />
                  {/* 에러내용 출력 */}
                  {errors.title && (
                    <ErrorMessage>({errors.title.message})</ErrorMessage>
                  )}
                </div>

                <div className="inputBox">
                  <label htmlFor="content">만다라트 간단 설명</label>
                  <textarea
                    name="content"
                    id="content"
                    className="popupTextarea"
                    placeholder="간단설명을 입력하세요."
                  ></textarea>
                </div>

                <div className="buttonWrap">
                  <button
                    type="button"
                    className="btnPopLine"
                    onClick={() => handleAdd(false)}
                  >
                    창닫기
                  </button>
                  <button type="submit" className="btnPupColor">
                    등록하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ModalPopup>
      )}
    </>
  );
}

export default Mypage;
