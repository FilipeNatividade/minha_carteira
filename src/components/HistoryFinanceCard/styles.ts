import styled from "styled-components";

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  align-items: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 10px 0;
  padding: 12px 10px;
  position: relative;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
`;

export const Tag = styled.li<ITagProps>`
  height: 60%;
  position: absolute;
  left: 0;
  width: 10px;

  background-color: ${(props) => props.color};
`;
