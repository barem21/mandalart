import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ShowMandalartList = styled.div`
  min-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1px;
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
  }
  .profileImage img:hover {
    transform: scale(1.05);
  }
  .voteCount {
    position: absolute;
    bottom: 12px;
    right: 12px;
    padding: 4px 10px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    color: #fff;
    font-size: 13px;
  }
  .title {
    padding: 0px 20px;
    text-align: left;
  }
`;

const LoopContent = ({ location, datas }) => {
  //console.log(datas);
  return (
    <ShowMandalartList>
      {datas.map(data => (
        <div className="loopContent" key={data.id}>
          <Link to={`/${location}/view?id=${data.id}`}>
            <div className="profileImage">
              <img src={data.img} alt="" />
              <div className="voteCount">추천 {data.vote}</div>
            </div>
            <p className="title">{data.title}</p>
          </Link>
        </div>
      ))}
    </ShowMandalartList>
  );
};

export default LoopContent;
