import { useEffect } from "react";

const SnsShare = () => {
  const link = "http://localhost:5173";
  const link2 = "http://localhost:5173/share";

  const snsLists = [
    {
      name: "faceBook",
      reactIcon: "FaXTwitter",
    },
    {
      name: "naver",
      reactIcon: "FaFacebookF",
    },
    {
      name: "kakao",
      reactIcon: "FaGoogle",
    },
  ];

  //faceBook
  const shareFaceBook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${link}`,
      "페이스북 공유하기",
      "width=600,height=800,location=no,status=no,scrollbars=yes",
    );
  };

  //naver
  const shareNaver = () => {
    window.open(
      `https://share.naver.com/web/shareView?url=${link}&title=네이버 공유하기`,
    );
  };

  //kakao
  const shareKakao = () => {
    if (window.Kakao === undefined) {
      return;
    }

    if (window.Kakao) {
      //카카오 스크립트가 로드된 경우
      const kakao = window.Kakao;

      //인증이 안되어있는 경우 인증한다.
      if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_APP_KAKAO_MAP_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
      }

      kakao.Share.sendDefault({
        objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
        content: {
          title: "title", // 인자값으로 받은 title(공유톡에서 나타남)
          description: "설명 #딸기 #카페", // 인자값으로 받은 title(공유톡에서 나타남)
          imageUrl:
            "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png", //공유받은 메시지 위에 뜨는 대표사진
          link: {
            mobileWebUrl: link2, // 인자값으로 받은 route(uri 형태)/카카오는 개발자에서 허용한 도메인만 가능
            webUrl: link2,
          },
        },
        buttons: [
          {
            title: "사이트로 이동",
            link: {
              mobileWebUrl: link2,
              webUrl: link2,
            },
          },
        ],
      });
    }
  };

  //kakao
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <>
      {snsLists.map(item => (
        <button
          type="button"
          onClick={
            item.name === "faceBook"
              ? shareFaceBook
              : item.name === "naver"
                ? shareNaver
                : item.name === "kakao"
                  ? shareKakao
                  : ""
          }
          key={item.name}
        >
          {item.reactIcon}
        </button>
      ))}
    </>
  );
};

export default SnsShare;
