import { FC } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectIput from "../../components/SelectInput";
import { Container } from "./styles";

const Dashboard: FC = () => {
  const options = [
    { value: "valor 1", label: "label 1" },
    { value: "valor 2", label: "label 2" },
    { value: "valor 3", label: "label 3" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff">
        <SelectIput options={options} />
      </ContentHeader>
    </Container>
  );
};
export default Dashboard;
