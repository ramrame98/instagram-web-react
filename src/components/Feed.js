import styled from "styled-components";

import Avatar from "components/Avartar";
import Comments from "../components/Comments";
import { Link } from "react-router-dom";

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
  justify-content: space-between;
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

function Feed({
  id,
  contentImg,
  caption,
  user,
  likesNum,
  reviewsNum,
  isLiked,
  reviews,
}) {
  return (
    <FeedContainer key={id}>
      <FeedHeader>
        <Avatar lg url={user.profileImg} />
        <Link to={`/profile/${user.username}`}>
          <Nickname>{user.username}</Nickname>
        </Link>
      </FeedHeader>
      <FeedPhoto src={contentImg} />

      <FeedActionContainer>
        <FeedWrapper>
          <div>
            <FeedAction>
              <FontAwesomeIcon
                style={{ color: true ? "tomato" : "inherit" }}
                icon={isLiked ? SolidHeart : NotSolidHeart}
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
        <Likes>{likesNum} likes</Likes>

        <Comments
          key={id}
          author={user.username} // 작성자
          caption={caption} // 작성내용
          reviews={reviews} // 댓글들 (댓글작성자, 댓글내용)
          commentNumber={reviewsNum} // 댓글 갯수
        />
      </FeedActionContainer>
    </FeedContainer>
  );
}

export default Feed;
