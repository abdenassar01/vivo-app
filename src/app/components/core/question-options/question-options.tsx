import React from 'react';
import {
  OptionSelectedIcon,
  OptionText,
  QuestionOptionItem,
  QuestionsOptionsWrapper,
} from './question-options.style';
import {Control, useController} from 'react-hook-form';
import {Option} from '../../../../../types/option';

interface Props {
  name: string;
  control: Control<any>;
  options: Option[];
}

const QuestionOptions = ({options, control, name}: Props) => {
  const {
    field: {onChange, value},
  } = useController({
    name,
    control,
    defaultValue: [],
  });

  const handleOptionPress = (option: Option) => {
    const isExist =
      value.filter((item: Option) => item.id === option.id).length > 0;
    if (isExist) {
      onChange(value.filter((item: Option) => item.id !== option.id));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <QuestionsOptionsWrapper>
      {React.Children.toArray(
        options.map(option => (
          <QuestionOptionItem
            onPress={() => handleOptionPress(option)}
            correct={option.correct}
            selected={
              value.filter((item: Option) => item.id === option.id).length > 0
            }>
            <OptionText
              selected={
                value.filter((item: Option) => item.id === option.id).length > 0
              }>
              خدمة غسيل السيارات
            </OptionText>
            {value.filter((item: Option) => item.id === option.id).length >
              0 && (
              <OptionSelectedIcon
                source={
                  option.correct
                    ? require('../../../../assets/icons/correct.png')
                    : require('../../../../assets/icons/incorrect.png')
                }
              />
            )}
          </QuestionOptionItem>
        )),
      )}
    </QuestionsOptionsWrapper>
  );
};

export default QuestionOptions;
