import React, {useState} from 'react';
import {LoginScreenWrapper} from '../auth.style';
import {AppWrapper, BottomSpacer} from '../../../../utils/shared-styles';
import ResetFirstStep from './steps/first-step';
import ResetSecondStep from './steps/second-step';
import ResetThirdStep from './steps/third-step';
import Header from '../../../components/core/header/header';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components';

const ResetPassword = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const {navigate} = useNavigation<StackNavigationProp<any>>();
  const {background} = useTheme();

  return (
    <AppWrapper>
      <StatusBar backgroundColor={background} />
      <LoginScreenWrapper>
        <Header />
        {currentStep === 1 && (
          <ResetFirstStep handleButton={() => setCurrentStep(2)} />
        )}
        {currentStep === 2 && (
          <ResetSecondStep handleButton={() => setCurrentStep(3)} />
        )}
        {currentStep === 3 && (
          <ResetThirdStep handleButton={() => navigate('SignupSuccess')} />
        )}

        <BottomSpacer size={10} />
      </LoginScreenWrapper>
    </AppWrapper>
  );
};

export default ResetPassword;
