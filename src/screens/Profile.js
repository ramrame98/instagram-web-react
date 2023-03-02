import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { getUserFeeds } from "../api";
import { useLocation, useParams } from "react-router-dom";

import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const ProfileImg = styled.img`
  margin-left: 50px;
  height: 160px;
  width: 160px;
  border-radius: 50%;
  margin-right: 80px;
  background-color: #2c2c2c;
`;

const ProfileInfo = styled.div``;

const Username = styled.h3`
  font-size: 28px;
  font-weight: 600;
`;

const FollowBtn = styled.span`
  cursor: pointer;
  background-color: #3399ff;
  color: white;
  font-weight: 600;
  border-radius: 3px;
  padding: 5px 15px;
  margin-left: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const Contents = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
`;

const Feed = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Icons = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Icon = styled.span`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin: 0 5px;
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`;

function Profile() {
  // const data = useLocation();
  // console.log("data", data);

  const { username } = useParams();
  console.log("username", username);

  const { data } = useQuery(["feeds/", username], getUserFeeds);
  console.log("data", data);

  return (
    <>
      <Header>
        <ProfileImg src={data[0].user.profileImg} />
        <ProfileInfo>
          <Row>
            <Username>{data[0].user.username}</Username>
            <FollowBtn>팔로우</FollowBtn>
          </Row>
          <Row>
            <div>3</div>
            <div>팔로워수</div>
            <div>10</div>
            <div>팔로잉수</div>
          </Row>
          <Row>
            <div>{data[0].user.profileIntroduce}</div>
          </Row>
        </ProfileInfo>
      </Header>

      <Contents>
        {data?.map((feed) => (
          <Feed bg={feed.contentImg}>
            <Icons>
              <Icon>
                <FontAwesomeIcon icon={faHeart} />
                {feed.likesNum}
              </Icon>
              <Icon>
                <FontAwesomeIcon icon={faComment} />
                {feed.reviewsNum}
              </Icon>
            </Icons>
          </Feed>
        ))}
      </Contents>
    </>
  );
}

export default Profile;
