/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Header from '../../components/core/header/header';
import {AppWrapper} from '../../../utils/shared-styles';
import {
  HelperText,
  OrdersScreenWrapper,
  QuizIcon,
  TopSection,
} from './quiz.style';
import TitleHeader from '../../components/core/title-header/title-header';
import {t} from 'i18next';
import Button from '../../components/common/form-fields/button/button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Quiz = () => {
  const {navigate} = useNavigation<StackNavigationProp<any>>();

  return (
    <AppWrapper>
      <Header openDrower />
      <OrdersScreenWrapper
        contentContainerStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}>
        <TopSection>
          <TitleHeader title={t('quiz-header-text')} />
          <HelperText>{t('quiz-main-text')}</HelperText>
        </TopSection>
        <QuizIcon
          source={require('../../../assets/images/quiz-illustration.png')}
        />
        <Button
          text={t('quiz-button-text')}
          onPress={() => navigate('QuizQuestion')}
        />
      </OrdersScreenWrapper>
    </AppWrapper>
  );
};

export default Quiz;
