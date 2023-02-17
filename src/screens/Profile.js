import styled from "styled-components";

const Header = styled.div`
  display: flex;
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
  margin-bottom: 20px;
`;

function Profile() {
  return (
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
  );
}

export default Profile;
