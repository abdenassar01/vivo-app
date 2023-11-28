import React from 'react';
import {t} from 'i18next';
import {
  OnBoardingContent,
  OnBoardingHeading,
  OnBoardingText,
  OnBoardingWrapper,
} from './onboarding.style';
import Button from '../../components/common/form-fields/button/button';

const Onboarding = () => {
  return (
    <OnBoardingWrapper
      source={require('../../../assets/images/onboarding.png')}
      // eslint-disable-next-line react-native/no-inline-styles
      imageStyle={{width: '100%', height: 470}}>
      <OnBoardingContent>
        <OnBoardingHeading>{t('welcome-header')}</OnBoardingHeading>
        <OnBoardingText>{t('Welcome-text')}</OnBoardingText>
        <Button
          onPress={() => console.log('Save onBoarding state')}
          text={t('button-next-text')}
          width="100%"
        />
      </OnBoardingContent>
    </OnBoardingWrapper>
  );
};

export default Onboarding;
