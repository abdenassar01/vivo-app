import React from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {QuestionScreenWrapper} from './quiz-question.style';
import QuestionCounter from '../../components/core/question-counter/question-counter';

const QuizQuestion = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <QuestionScreenWrapper>
        <QuestionCounter />
      </QuestionScreenWrapper>
    </AppWrapper>
  );
};

export default QuizQuestion;
