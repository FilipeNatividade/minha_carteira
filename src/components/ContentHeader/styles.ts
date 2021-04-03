import styled from "styled-components";

interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  > h2 {
    color: ${(props) => props.theme.colors.white};

    &::after {
      border-bottom: 7px solid ${(props) => props.lineColor};
      content: "";
      display: block;
      width: 50px;
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
`;
