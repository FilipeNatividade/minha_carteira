import { FC } from "react";
import { Container } from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const SelectIput: FC<ISelectInputProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </Container>
  );
};
export default SelectIput;
