import React from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {QuestionScreenWrapper} from './quiz-question.style';
import QuestionCounter from '../../components/core/question-counter/question-counter';
import {MainText} from '../../components/common/text';

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
        <MainText>{}</MainText>
      </QuestionScreenWrapper>
    </AppWrapper>
  );
};

export default QuizQuestion;
