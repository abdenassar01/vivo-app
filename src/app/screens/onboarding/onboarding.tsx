import React from 'react';
import {t} from 'i18next';
import {
  OnBoardingContent,
  OnBoardingHeading,
  OnBoardingText,
  OnBoardingWrapper,
} from './onboarding.style';
import Button from '../../components/common/form-fields/button/button';
import {useOnBoardingStore} from '../../../stores/onboarding';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';

const Onboarding = () => {
  const {setOnBoarding} = useOnBoardingStore();
  const theme = useTheme();

  return (
    <OnBoardingWrapper
      source={require('../../../assets/images/onboarding.png')}
      // eslint-disable-next-line react-native/no-inline-styles
      imageStyle={{width: '100%', height: 470}}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.primary} />
      <OnBoardingContent>
        <OnBoardingHeading>{t('welcome-header')}</OnBoardingHeading>
        <OnBoardingText>{t('Welcome-text')}</OnBoardingText>
        <Button
          onPress={() => setOnBoarding(true)}
          text={t('button-next-text')}
          width="100%"
        />
      </OnBoardingContent>
    </OnBoardingWrapper>
  );
};

export default Onboarding;
