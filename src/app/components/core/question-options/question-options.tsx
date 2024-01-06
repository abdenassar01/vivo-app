import React, { useState } from "react";
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
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  correctAnswer?: number;
}

const QuestionOptions = ({
  options,
  control,
  name,
  setDisabled,
  disabled,
  correctAnswer = 0,
}: Props) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });

  return (
    <QuestionsOptionsWrapper>
      {React.Children.toArray(
        options.map((option) => (
          <QuestionOptionItem
            onPress={() => {
              if (!disabled) {
                onChange(option);
                setDisabled(true);
              }
            }}
            selected={value === option}
            correct={option === options[correctAnswer]}
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
