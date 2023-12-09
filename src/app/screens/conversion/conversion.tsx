import React, {useState} from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {
  ButtonsWrapper,
  ConversionHeader,
  ConversionScreenWrapper,
  GreetingText,
} from './conversion.style';
import ProgressBar from '../../components/common/progress-bar/progress-bar';
import {t} from 'i18next';
import Button from '../../components/common/form-fields/button/button';
import FirstStep from './steps/first-step';
import SecondStep from './steps/second-step';
import ThirdStep from './steps/third-step';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const Conversion = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const {navigate, goBack} = useNavigation<StackNavigationProp<any>>();

  const stepHeaders = [
    t('conversion-second-header-step1'),
    t('conversion-second-header-step2'),
    t('conversion-second-header-step3'),
  ];

  return (
    <AppWrapper>
      <Header openDrower />
      <ConversionScreenWrapper
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <ConversionHeader>
          <GreetingText>{t('conversion-header-text')}</GreetingText>
          <ProgressBar
            nbrSteps={3}
            step={currentStep}
            headerText={stepHeaders[currentStep - 1]}
          />
        </ConversionHeader>
        {currentStep === 1 ? (
          <FirstStep />
        ) : currentStep === 2 ? (
          <SecondStep />
        ) : (
          <ThirdStep />
        )}

        <ButtonsWrapper>
          {currentStep === 3 ? (
            <Button
              btnTheme="secondary"
              onPress={() => navigate('Home')}
              text={t('home-nav-label')}
            />
          ) : (
            <>
              <Button
                btnTheme="secondary"
                width="42%"
                onPress={
                  currentStep === 1
                    ? goBack
                    : () => setCurrentStep(prev => prev - 1)
                }
                text={t('button-previous-text')}
              />
              <Button
                onPress={() => setCurrentStep(prev => prev + 1)}
                width="56%"
                text={t('button-next-text')}
              />
            </>
          )}
        </ButtonsWrapper>
      </ConversionScreenWrapper>
    </AppWrapper>
  );
};

export default Conversion;
