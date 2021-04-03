import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  background-color: ${(props) => props.theme.colors.secundary};
  display: flex;
  grid-area: MH;
  justify-content: space-between;
  padding: 20px;
`;

export const Profile = styled.div`
  color: ${(props) => props.theme.colors.white};
`;
export const Welcome = styled.h3``;
export const UserName = styled.span``;
