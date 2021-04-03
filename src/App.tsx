import { FC } from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import dark from "./styles/themes/dark";
import List from "./pages/List";

const App: FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  );
};
export default App;
