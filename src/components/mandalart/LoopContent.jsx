import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ShowMandalartList = styled.div`
  min-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1px;
  .noData {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;
  }
  .loopContent {
    width: calc(25% - 1px);
    margin-bottom: 30px;
  }
  .profileImage {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 10px;
    max-height: 280px;
    background-color: #eee;
    font-size: 0px;
    overflow: hidden;
  }
  .profileImage img {
    max-width: fit-content;
    object-fit: cover;
    transition: all 0.3s;
    opacity: 0.9;
  }
  .loopContent:hover img {
    opacity: 1;
    transform: scale(1.05);
  }
  .loopContent:hover .title {
    color: #000;
  }
  .voteCount {
    position: absolute;
    bottom: 12px;
    right: 0px;
    padding: 4px 15px;
    background: rgba(0, 0, 0, 0.35);
    border-radius: 50px 0px 0px 50px;
    color: #fff;
    font-size: 13px;
  }
  .title {
    padding: 0px 20px;
    text-align: left;
    transition: all 0.3s;
  }
  .title .shared {
    margin-left: 5px;
    font-weight: 500;
    color: #55ad9b;
  }
  .date {
    padding: 0px 20px;
    text-align: left;
    color: #aaa;
    font-size: 14px;
  }
`;

const LoopContent = ({ location, datas, viewCnt = 30 }) => {
  //console.log(datas);
  return (
    <ShowMandalartList>
      {datas.length === 0 && (
        <div className="noData">등록된 만다라트가 없습니다.</div>
      )}
      {datas.map(
        (item, index) =>
          index < viewCnt && (
            <div className="loopContent" key={index}>
              <Link to={`/${location}/view?projectId=${item.projectId}`}>
                <div className="profileImage">
                  <img
                    src={
                      item.pic
                        ? `http://112.222.157.156:5211/pic/project/${item.projectId}/${item.pic}`
                        : "share_mandalart2.png"
                    }
                    alt=""
                  />
                  {location === "share" && (
                    <div className="voteCount">좋아요 {item.likeCnt}</div>
                  )}
                </div>
                <p className="title">
                  {item.title}
                  {item.sharedFg === 1 && (
                    <span className="shared">[공유중]</span>
                  )}
                </p>
                <p className="date">{item.createDate}</p>
              </Link>
            </div>
          ),
      )}
    </ShowMandalartList>
  );
};

export default LoopContent;
