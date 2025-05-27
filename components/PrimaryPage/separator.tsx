import React from "react";
import { SeparatorWrapper, SeparatorLine, SeparatorText } from "./styles"; 
interface Props {
  section: "foods" | "places" | "people";
}

const Separator: React.FC<Props> = ({ section }) => {
  return (
    <SeparatorWrapper>
      <SeparatorLine />
      <SeparatorText>List of {section}</SeparatorText>
    </SeparatorWrapper>
  );
};

export default Separator;
