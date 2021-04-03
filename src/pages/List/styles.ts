import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
`;

export const Content = styled.div``;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .tag-filter {
    background: none;
    color: ${(props) => props.theme.colors.white};
    font-size: 18px;
    font-weight: bold;
    margin: 0 10px 30px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
  .tag-filter-recurrent::after {
    border: 5px solid ${(props) => props.theme.colors.warning};
    content: "";
    display: block;
    margin: 5px auto;
    width: 50px;
  }

  .tag-filter-eventual::after {
    border: 5px solid ${(props) => props.theme.colors.succerss};
    content: "";
    display: block;
    margin: 5px auto;
    width: 50px;
  }
`;
