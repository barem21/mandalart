import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import LoopContent from "../components/mandalart/LoopContent";
import "swiper/css";
import { useEffect, useState } from "react";
import { getSession } from "../apis/member";
import { getShare } from "../apis/share";

const LOGIN_SESSION_KEY = "login_session";

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
    margin-left: 10px;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: -1px;
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
    margin-bottom: 15px;
    padding: 0px 5% 0px 5%;
  }
  .mainContent .titleWrap h4 {
    font-size: 36px;
    font-weight: 300;
    letter-spacing: -3px;
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
  const [isShare, setIsShare] = useState([]);
  const sessionData = getSession(LOGIN_SESSION_KEY);

  //공유 만다라트 가져오기
  const getSharedMandalart = async () => {
    try {
      const result = await getShare({
        userId: sessionData?.userId,
        subLocation: "/",
      }); //axios
      setIsShare(result.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    getSharedMandalart();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainLayout>
      <div className="mainSlide">
        <div
          style={{
            position: "absolute",
            top: "-40%",
            left: "60%",
          }}
        >
          <img id="reload" src="flower.png" alt="" />
        </div>

        <div className="welcomeText">
          <p className="wt1">Welcome to</p>
          <p className="wt2">MANDA</p>
          <p className="wt3">
            여러분도 한 해의 계획을 세우고, 목표를 달성하고 싶다면
            <br />
            만다라트 계획표를 만들어 보는 것은 어떨까요?
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
            <img src="main_swiper1.jpg" alt="mainVisual_1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="main_swiper2.jpg" alt="mainVisual_2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="main_swiper3.jpg" alt="mainVisual_3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="main_swiper1.jpg" alt="mainVisual_1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="main_swiper2.jpg" alt="mainVisual_2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="main_swiper3.jpg" alt="mainVisual_3" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mainContent">
        <div className="titleWrap">
          <h4>
            <span style={{ color: "#55ad9b", fontWeight: "700" }}>
              만다라트
            </span>{" "}
            공유하기
          </h4>
          <Link to={"/share"} className="btnMore">
            + 더보기
          </Link>
        </div>

        <LoopContent location={"share"} datas={isShare} viewCnt={4} />
      </div>
    </MainLayout>
  );
}

export default Index;
