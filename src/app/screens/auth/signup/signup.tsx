import React, {useState} from 'react';
import {AppWrapper, BottomSpacer} from '../../../../utils/shared-styles';
import {
  ContentWrapper,
  GreetingText,
  HeroText,
  LoginScreenWrapper,
} from '../auth.style';
import FirstStep from './steps/first-step';
import SecondStep from './steps/second-step';
import ThirdStep from './steps/third-step';
import Header from '../../../components/core/header/header';
import ProgressBar from '../../../components/common/progress-bar/progress-bar';
import {t} from 'i18next';

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [user, setUser] = useState(null);

  return (
    <AppWrapper>
      <LoginScreenWrapper>
        <Header />
        <ContentWrapper>
          <HeroText>
            <GreetingText>{t('signup-header-text')}</GreetingText>
          </HeroText>
          <ProgressBar step={currentStep} nbrSteps={3} />
        </ContentWrapper>

        {currentStep === 1 && (
          <FirstStep
            user={user}
            setUser={setUser}
            handleButton={() => setCurrentStep(2)}
          />
        )}
        {currentStep === 2 && (
          <SecondStep
            user={user}
            setUser={setUser}
            prev={() => setCurrentStep(1)}
            handleButton={() => setCurrentStep(3)}
          />
        )}
        {currentStep === 3 && (
          <ThirdStep
            prev={() => setCurrentStep(2)}
            user={user}
            setUser={setUser}
          />
        )}
        <BottomSpacer size={10} />
      </LoginScreenWrapper>
    </AppWrapper>
  );
};

export default SignUp;
