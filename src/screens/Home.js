import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const FeedContainer = styled.div`
  width: 100%;
  max-width: 630px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;
const FeedHeader = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;

  .profile_box {
    width: 30px;
    height: 30px;
    border-radius: 70%;
    overflow: hidden;
  }
  .profile_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .profile_name {
    margin: 0 10px;
    font-weight: 600;
  }
`;

const FeedPhoto = styled.div`
  height: 500px;

  .feed_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const FeedActions = styled.div``;
const Comments = styled.div``;

function Home() {
  return (
    <Container>
      <FeedContainer>
        <FeedHeader>
          <div className="profile_box">
            <img
              className="profile_img"
              src="https://yt3.googleusercontent.com/ytc/AL5GRJUSZHa2spL-y0DiSJyd2hQ5YdJWs-ZzVAcun3ivWQ=s900-c-k-c0x00ffffff-no-rj"
            />
          </div>
          <div className="profile_name">Nickname</div>
          <div>Time</div>
        </FeedHeader>
        <FeedPhoto>
          <img
            className="feed_img"
            src="https://cdnweb01.wikitree.co.kr/webdata/editor/202007/16/img_20200716161918_e69bae9b.webp"
          />
        </FeedPhoto>
        <FeedActions>
          <div>Actions</div>
        </FeedActions>
        <Comments>
          <div>Comments</div>
        </Comments>
      </FeedContainer>
    </Container>
  );
}

export default Home;
