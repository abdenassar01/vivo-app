import React from 'react';
import {
  QuestionImage,
  QuestionItemWrapper,
  QuestionText,
} from './question-item.style';
import QuestionOptions from '../question-options/question-options';

const QuestionItem = () => {
  return (
    <QuestionItemWrapper>
      <QuestionText>
        ما هي الخدمات الإضافية التي تقدمها محطة Shell للعملاء؟
      </QuestionText>
      <QuestionImage
        resizeMode="stretch"
        defaultSource={require('../../../../assets/images/question-default.png')}
        source={require('../../../../assets/images/question-default.png')}
      />
      <QuestionOptions />
    </QuestionItemWrapper>
  );
};

export default QuestionItem;
