import React from "react";
import {
  OptionSelectedIcon,
  OptionText,
  QuestionOptionItem,
  QuestionsOptionsWrapper,
} from "./question-options.style";
import { Control, useController } from "react-hook-form";

interface Props {
  name: string;
  control: Control<any>;
  options: string[];
}

const QuestionOptions = ({ options, control, name }: Props) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: options[0],
  });

  return (
    <QuestionsOptionsWrapper>
      {React.Children.toArray(
        options.map((option) => (
          <QuestionOptionItem
            onPress={() => onChange(option)}
            selected={value === option}
          >
            <OptionText selected={value === option}>{option}</OptionText>
            {value === option && (
              <OptionSelectedIcon
                source={require("../../../../assets/icons/correct.png")}
              />
            )}
          </QuestionOptionItem>
        ))
      )}
    </QuestionsOptionsWrapper>
  );
};

export default QuestionOptions;
