import React from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {ButtonsWrapper, QuestionScreenWrapper} from './quiz-question.style';
import QuestionCounter from '../../components/core/question-counter/question-counter';
import QuestionItem from '../../components/core/question-item/question-item';
import Button from '../../components/common/form-fields/button/button';
import {t} from 'i18next';

const QuizQuestion = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <QuestionScreenWrapper>
        <QuestionCounter
          numberOfQuestions={4}
          questionNbr={1}
          onComplete={() => console.log('update')}
        />
        <QuestionItem />
      </QuestionScreenWrapper>
      <ButtonsWrapper>
        <Button
          text={t('button-previous-text')}
          btnTheme="secondary"
          width="42%"
          onPress={() => console.log('redirect login')}
        />
        <Button
          width="56%"
          text={t('button-next-text')}
          onPress={() => console.log('next question')}
        />
      </ButtonsWrapper>
    </AppWrapper>
  );
};

export default QuizQuestion;
