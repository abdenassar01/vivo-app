import React from 'react';
import {
  QuestionImage,
  QuestionItemWrapper,
  QuestionText,
} from './question-item.style';

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
    </QuestionItemWrapper>
  );
};

export default QuestionItem;
