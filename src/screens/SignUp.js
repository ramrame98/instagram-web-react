import { darkModeVar } from "apollo";
import styled from "styled-components";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  boder: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
`;

const TopBox = styled(WhiteBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 40px 25px 40px;
  margin-bottom: 10px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    justify-items: center;
    align-items: center;
  }
  h2 {
    color: rgb(142, 142, 142);
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    margin-bottom:10px;
}
  }
`;

const BottomBox = styled(WhiteBox)`
  padding: 20px 0px;
  text-align: center;

  a {
    margin-left: 5px;
    color: #0095f6;
    text-decoration: none;
  }
`;

const Logo = styled.div`
  background-image: url("https://static.cdninstagram.com/rsrc.php/v3/yr/r/NL0hPV-L09m.png");
  background-position: 0px 0px;
  background-size: 176px 186px;
  width: 174px;
  height: 50px;
  background-repeat: no-repeat;
  display: inline-block;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid rgb(219, 219, 219);
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.div`
  width: 100%;
  border: none;
  border-radius: 8px;
  margin-top: 12px;
  background-color: #0095f6;
  opacity: 0.7;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
`;

const Separator = styled.div`
  width: 100%;
  margin: 20px 0px 15px 0px;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }

  span {
    margin: 0px 20px;
    font-weight: 600;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const FacebookLogin = styled.div`
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #0095f6;
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

function SignUp() {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <Logo></Logo>

          <form>
            <h2>친구들의 사진과 동영상을 보려면 가입하세요.</h2>

            <FacebookLogin>
              <FontAwesomeIcon icon={faFacebookSquare} />
              <span>Facebook으로 로그인</span>
            </FacebookLogin>

            <Separator>
              <div></div>
              <span>OR</span>
              <div></div>
            </Separator>

            <Input type="email" placeholder="휴대폰 번호 또는 이메일 주소" />
            <Input type="name" placeholder="성명" />
            <Input type="username" placeholder="사용자 이름" />
            <Input type="password" placeholder="비밀번호" />
            <Button type="submit" value="Log In">
              가입
            </Button>
          </form>
        </TopBox>

        <BottomBox>
          <span>계정이 있으신가요?</span>
          <Link to="/">로그인</Link>
        </BottomBox>
      </Wrapper>
    </Container>
  );
}

export default SignUp;
