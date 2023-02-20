import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  return (
    <>
      <Header>
        <ProfileImg src="https://static.vecteezy.com/system/resources/previews/004/244/268/original/cute-dog-cartoon-character-illustration-free-vector.jpg" />
        <ProfileInfo>
          <Row>
            <Username>Ramram</Username>
            <FollowBtn>팔로우</FollowBtn>
          </Row>
          <Row>
            <div>3</div>
            <div>팔로워수</div>
            <div>10</div>
            <div>팔로잉수</div>
          </Row>
          <Row>
            <div>소개글</div>
          </Row>
        </ProfileInfo>
      </Header>

      <Contents>
        <Feed bg="https://mblogthumb-phinf.pstatic.net/20160421_74/ulmia2040_1461218132845QRap9_JPEG/20160421_134429.jpg?type=w800">
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              123
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              100
            </Icon>
          </Icons>
        </Feed>
      </Contents>
    </>
  );
}

export default Profile;
