/* routes */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";

import Layout from "./components/Layout";

/* styled-component */
import { ThemeProvider } from "styled-components";

/* apollo - reactive variables */
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar, darkModeVar } from "./apollo";
import { lightTheme, darkTheme, GlobalStyles } from "./styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path={routes.home}
            element={
              isLoggedIn ? (
                <Layout>
                  <Home />
                </Layout>
              ) : (
                <Login />
              )
            }
          />
          <Route
            path={routes.profile}
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path={routes.signUp}
            element={isLoggedIn ? null : <SignUp />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
