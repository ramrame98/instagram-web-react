import styled from "styled-components";

import Avatar from "components/Avartar";
import Comments from "../components/Comments";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBookmark,
  faComment,
  faHeart as NotSolidHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";

import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 60px;
  max-width: 650px;
`;

const FeedHeader = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const Nickname = styled.div`
  margin-left: 10px;
  font-weight: 600;
`;

const FeedPhoto = styled.img`
  width: 100%;
  max-width: 100%;
`;

const FeedActionContainer = styled.div`
  padding: 12px 15px;
`;

const FeedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-betwwen;
  div {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 20px;
  }
`;

const FeedAction = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const Likes = styled.span`
  font-weight: 600;
  margin-top: 15px;
  display: block;
`;

function Home() {
  return (
    <FeedContainer>
      <FeedHeader>
        <Avatar
          lg
          url="https://static.vecteezy.com/system/resources/previews/004/244/268/original/cute-dog-cartoon-character-illustration-free-vector.jpg"
        />
        <Nickname>Nickname</Nickname>
      </FeedHeader>
      <FeedPhoto src="https://static.vecteezy.com/system/resources/previews/004/244/268/original/cute-dog-cartoon-character-illustration-free-vector.jpg" />

      <FeedActionContainer>
        <FeedWrapper>
          <div>
            <FeedAction>
              <FontAwesomeIcon
                style={{ color: true ? "tomato" : "inherit" }}
                icon={true ? SolidHeart : NotSolidHeart}
              />
            </FeedAction>
            <FeedAction>
              <FontAwesomeIcon icon={faComment} />
            </FeedAction>
            <FeedAction>
              <FontAwesomeIcon icon={faPaperPlane} />
            </FeedAction>
          </div>

          <div>
            <FeedAction>
              <FontAwesomeIcon icon={faBookmark} />
            </FeedAction>
          </div>
        </FeedWrapper>
        <Likes>1 likes</Likes>
        <Comments />
      </FeedActionContainer>
    </FeedContainer>
  );
}

export default Home;
