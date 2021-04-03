import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  align-items: center;
  display: flex;
`;

export const ToggleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 0.8rem;
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning,
    height: 15,
    width: 30,
    handleDiameter: 13,
  })
)<ReactSwitchProps>`
  margin: 0 7px;
`;
