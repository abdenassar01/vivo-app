import React from 'react';
import {
  QuestionImage,
  QuestionItemWrapper,
  QuestionText,
} from './question-item.style';
import QuestionOptions from '../question-options/question-options';
import {Question} from '../../../../../types/question';
import {Control} from 'react-hook-form';
import i18next from 'i18next';

type Props = {
  question: Question;
  conrol: Control<any>;
  name: string;
};

const QuestionItem = ({
  question: {options, text, image, textAr},
  conrol,
  name,
}: Props) => {
  return (
    <QuestionItemWrapper>
      <QuestionText>{i18next.language === 'fr' ? text : textAr}</QuestionText>
      <QuestionImage
        resizeMode="stretch"
        defaultSource={require('../../../../assets/images/question-default.png')}
        source={
          image
            ? {uri: image}
            : require('../../../../assets/images/question-default.png')
        }
      />
      <QuestionOptions control={conrol} options={options} name={name} />
    </QuestionItemWrapper>
  );
};

export default QuestionItem;
