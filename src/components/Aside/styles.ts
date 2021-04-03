import styled from "styled-components";

export const Container = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.gray};
  background-color: ${(props) => props.theme.colors.secundary};
  display: flex;
  flex-direction: column;
  grid-area: AS;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-around;
  height: 70px;
  padding: 0 30px;
`;

export const LogImg = styled.img`
  height: 40px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  height: 90%;
  margin: 0 auto;
  padding: 50px 0;
  width: 70%;
`;

export const MenuItemLink = styled.a`
  align-items: center;
  color: ${(props) => props.theme.colors.info};
  display: flex;
  margin: 7px 0;
  text-decoration: none;
  transition: 3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;
