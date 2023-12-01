import React from 'react';
import {
  AppWrapperWithoutPadding,
  WithHorisontalPadding,
  WithPadding,
  WithVerticalPadding,
} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {
  CongratsImage,
  CongratsText,
  NbrPoints,
  PointsLabel,
  QuizSuccessScreenWrapper,
  TextWrapper,
  WinnerName,
} from './quiz-success.style';
import {t} from 'i18next';
import Button from '../../components/common/form-fields/button/button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const QuizSuccess = () => {
  const {navigate} = useNavigation<StackNavigationProp<any>>();

  return (
    <AppWrapperWithoutPadding>
      <WithHorisontalPadding>
        <WithVerticalPadding>
          <Header openDrower />
        </WithVerticalPadding>
      </WithHorisontalPadding>
      <QuizSuccessScreenWrapper
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <CongratsText>{t('congrats-text')}</CongratsText>
        <WinnerName>Mohamed BAHA</WinnerName>
        <CongratsImage
          resizeMode="stretch"
          source={require('../../../assets/images/quiz-sucess.png')}
        />
        <TextWrapper>
          <PointsLabel>{t('points-wining')}</PointsLabel>
          <NbrPoints>200 {t('points-label')}</NbrPoints>
        </TextWrapper>
        <WithPadding>
          <Button onPress={() => navigate('Home')} text={t('home-nav-label')} />
        </WithPadding>
      </QuizSuccessScreenWrapper>
    </AppWrapperWithoutPadding>
  );
};

export default QuizSuccess;
