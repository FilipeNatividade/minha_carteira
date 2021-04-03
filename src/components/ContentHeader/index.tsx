import { FC } from "react";
import { Container, TitleContainer, Controllers } from "./styles";

interface IContenHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: FC<IContenHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h2>{title}</h2>
      </TitleContainer>
      <Controllers>{children}</Controllers>
    </Container>
  );
};
export default ContentHeader;
