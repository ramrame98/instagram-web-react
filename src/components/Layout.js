import styled from "styled-components";
import Header from "./Header";

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 930px;
  margin-top: 25px;
`;

function Layout({ children }) {
  console.log(children);

  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}

export default Layout;
