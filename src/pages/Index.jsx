import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import LoopContent from "../components/mandalart/LoopContent";
import "swiper/css";

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
    title: "마르고닮도록 님의 6개월 리액트 공부 계획표",
    vote: 1,
  },
];

const MainLayout = styled.div`
  min-width: 1200px;
  .welcomeText {
    position: absolute;
    left: 10%;
    top: -220px;
    line-height: 110%;
    font-size: 128px;
    letter-spacing: -8px;
    z-index: 10;
  }
  .welcomeText .wt1 {
    font-weight: 100;
  }
  .welcomeText .wt2 {
    margin-bottom: 20px;
    color: #55ad9b;
    font-weight: 900;
  }
  .welcomeText .wt3 {
    color: #fff;
    font-weight: 300;
    font-size: 20px;
    letter-spacing: 0px;
    line-height: 140%;
  }

  .mainSlide {
    position: relative;
    margin-top: 20%;
    margin-bottom: 60px;
  }
  .mainSlide img {
    max-width: 100%;
    min-height: 360px;
    object-fit: cover;
    border-radius: 0px 100px 0px 100px;
    overflow: hidden;
  }
  .mainContent .titleWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .mainContent .titleWrap .btnMore {
    color: #999;
    font-weight: 400;
  }
  .mainContent h4 {
    font-size: 20px;
    font-weight: 700;
  }
  .mainContent div {
    text-align: center;
  }
`;

function Index() {
  return (
    <MainLayout>
      <div className="mainSlide">
        <div className="welcomeText">
          <p className="wt1">Welcome to</p>
          <p className="wt2">MY.MANDA</p>
          <p className="wt3">
            여러분도 한 해의 계획을 세우고, 목표를 달성하고 싶다면
            <br />
            오타니 선수처럼 만다라트 계획표를 만들어 보는 것은 어떨까요?
            <br />
            만다라트 계획표를 통해 여려분의 꿈과 목표를 달성하시기를 바랍니다.
          </p>
        </div>

        <Swiper
          navigation={true}
          slidesPerView={1.1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="visualSlide"
        >
          <SwiperSlide>
            <img src="main_swiper1.png" alt="mainVisual_1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="main_swiper2.png" alt="mainVisual_2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="main_swiper3.png" alt="mainVisual_3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="main_swiper1.png" alt="mainVisual_1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="main_swiper2.png" alt="mainVisual_2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="main_swiper3.png" alt="mainVisual_3" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mainContent">
        <div className="titleWrap">
          <h4>만다라트 공유하기</h4>
          <Link to={"/share"} className="btnMore">
            + 더보기
          </Link>
        </div>

        <LoopContent datas={SampleData} />
      </div>
    </MainLayout>
  );
}

export default Index;
