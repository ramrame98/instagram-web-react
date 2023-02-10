import { darkModeVar } from "apollo";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div``;

function Login() {
  return (
    <Container>
      <Title>인스타그램</Title>
      <div>
        <form>
          <input type="email" />
          <input type="password " />
          <input type="submit" />
        </form>
      </div>
      <button onClick={() => darkModeVar(true)}>Dark Mode</button>
      <button onClick={() => darkModeVar(false)}>Light Mode</button>
    </Container>
  );
}

export default Login;
