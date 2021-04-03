import { FC } from "react";
import imageLogo from "../../assets/logo.svg";
import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./styles";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

const Aside: FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={imageLogo} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="#">
          <MdDashboard /> Dashboard
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdArrowUpward /> Entrada
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdArrowDownward /> Saída
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdExitToApp /> Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};
export default Aside;
