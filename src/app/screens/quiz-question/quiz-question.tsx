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
        <QuestionCounter
          numberOfQuestions={4}
          questionNbr={1}
          onComplete={() => console.log('update')}
        />
      </QuestionScreenWrapper>
    </AppWrapper>
  );
};

export default QuizQuestion;
