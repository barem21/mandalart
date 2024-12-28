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
    position: relative;
    margin-bottom: 10px;
    font-size: 0px;
    overflow: hidden;
  }
  .profileImage img {
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
  .date {
    padding: 0px 20px;
    text-align: left;
    color: #aaa;
    font-size: 12px;
  }
`;

const LoopContent = ({ location, datas }) => {
  //console.log(datas);
  return (
    <ShowMandalartList>
      {datas.length === 0 && (
        <div className="noData">등록된 만다라트가 없습니다.</div>
      )}
      {datas.map((item, index) => (
        <div className="loopContent" key={index}>
          <Link to={`/${location}/view?projectId=${item.projectId}`}>
            <div className="profileImage">
              <img src={item.pic ? item.pic : "share_mandalart2.png"} alt="" />
              {location === "share" && (
                <div className="voteCount">추천 {item.sharedFg}</div>
              )}
            </div>
            <p className="title">{item.title}</p>
            <p className="date">{item.createDate}</p>
          </Link>
        </div>
      ))}
    </ShowMandalartList>
  );
};

export default LoopContent;
