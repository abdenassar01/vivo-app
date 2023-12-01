import React from 'react';
import {
  OptionSelectedIcon,
  OptionText,
  QuestionOptionItem,
  QuestionsOptionsWrapper,
} from './question-options.style';

const QuestionOptions = () => {
  return (
    <QuestionsOptionsWrapper>
      <QuestionOptionItem correct selected>
        <OptionText selected>خدمة غسيل السيارات</OptionText>
        <OptionSelectedIcon
          source={require('../../../../assets/icons/correct.png')}
        />
      </QuestionOptionItem>
      <QuestionOptionItem correct={false} selected>
        <OptionText selected>خدمة غسيل السيارات</OptionText>
        <OptionSelectedIcon
          source={require('../../../../assets/icons/correct.png')}
        />
      </QuestionOptionItem>
      <QuestionOptionItem correct={false} selected={false}>
        <OptionText selected={false}>خدمة غسيل السيارات</OptionText>
        <OptionSelectedIcon
          source={require('../../../../assets/icons/correct.png')}
        />
      </QuestionOptionItem>
    </QuestionsOptionsWrapper>
  );
};

export default QuestionOptions;
