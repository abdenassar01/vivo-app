import React, {useState} from 'react';
import {
  AppWrapper,
  AppWrapperWithoutPadding,
  BottomSpacer,
} from '../../../../utils/shared-styles';
import {
  ContentWrapper,
  GreetingText,
  HelperText,
  HeroText,
  LoginScreenWrapper,
  SwitchScreensLabel,
  SwitchScreensLink,
  SwitchScreensLinkText,
  SwitchScreensWrapper,
} from '../auth.style';
import FirstStep from './steps/first-step';
import SecondStep from './steps/second-step';
import ThirdStep from './steps/third-step';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Header from '../../../components/core/header/header';
import ProgressBar from '../../../components/common/progress-bar/progress-bar';

const SignUp = () => {
  const {navigate} = useNavigation<StackNavigationProp<any>>();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [user, setUser] = useState(null);

  return (
    <AppWrapper>
      <LoginScreenWrapper>
        <Header />
        <ContentWrapper>
          <HeroText>
            <GreetingText>Créer votre compte </GreetingText>
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
