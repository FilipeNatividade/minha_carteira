import { FC } from "react";
import Content from "../Content";
import Aside from "../Aside";
import MainHeader from "../MainHeader";
import { Grid } from "./styles";

const Layout: FC = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
};
export default Layout;
