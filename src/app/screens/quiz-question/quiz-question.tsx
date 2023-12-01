import React from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {ButtonsWrapper, QuestionScreenWrapper} from './quiz-question.style';
import QuestionCounter from '../../components/core/question-counter/question-counter';
import QuestionItem from '../../components/core/question-item/question-item';
import Button from '../../components/common/form-fields/button/button';
import {t} from 'i18next';
import {useForm} from 'react-hook-form';

const options = [
  {
    text: 'Essence Sans Plomb 95',
    textAr: 'خدمة غسيل السيارات',
    correct: true,
    id: Math.random(),
  },
  {
    text: 'Essence Sans Plomb 95',
    textAr: 'تأجير السيارات',
    correct: false,
    id: Math.random(),
  },
  {
    text: 'Service de lavage de voiture',
    textAr: 'توصيل الوقود إلى المنزل',
    correct: false,
    id: Math.random(),
  },
];

const QuizQuestion = () => {
  const {control} = useForm<any>();

  return (
    <AppWrapper>
      <Header openDrower />
      <QuestionScreenWrapper>
        <QuestionCounter
          numberOfQuestions={4}
          questionNbr={1}
          onComplete={() => console.log('update')}
        />
        <QuestionItem
          conrol={control}
          name="selectedOptions"
          question={{
            text: "Quel est le grade d'essence le plus élevé disponible à la station Shell?",
            textAr: 'ما هي الخدمات الإضافية التي تقدمها محطة Shell للعملاء؟',
            options: options,
            image: 'https://i.imgur.com/KpwmFBA.png',
          }}
        />
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
