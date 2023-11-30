import React from 'react';
import {
  CountdownText,
  QuestionCounterWrapper,
  QuestionMainText,
  QuestionSecondaryText,
} from './question-counter.style';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {useTheme} from 'styled-components/native';
import {t} from 'i18next';

type Props = {
  questionNbr: number;
  numberOfQuestions: number;
  onComplete: () => void;
};

const QuestionCounter = ({
  numberOfQuestions,
  onComplete,
  questionNbr,
}: Props) => {
  const theme = useTheme();

  return (
    <QuestionCounterWrapper>
      <QuestionMainText>
        {t('question-label')} {questionNbr} /{' '}
        <QuestionSecondaryText>{numberOfQuestions}</QuestionSecondaryText>
      </QuestionMainText>
      <CountdownCircleTimer
        colors={[theme.primary, '#A30000']}
        colorsTime={[20, 0]}
        isPlaying
        onComplete={onComplete}
        size={56}
        strokeWidth={4}
        duration={20}
        trailColor="#F3F4F6">
        {({remainingTime}) => <CountdownText>{remainingTime}s</CountdownText>}
      </CountdownCircleTimer>
    </QuestionCounterWrapper>
  );
};

export default QuestionCounter;
