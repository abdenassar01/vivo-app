import React from 'react';
import {
  ConversionSuccessIllustration,
  StepMainText,
  StepWrapper,
} from '../conversion.style';
import {t} from 'i18next';

const ThirdStep = () => {
  return (
    <StepWrapper showsVerticalScrollIndicator={false}>
      <StepMainText>{t('conversion-step-three-text')}</StepMainText>
      <ConversionSuccessIllustration
        resizeMode="stretch"
        source={require('../../../../assets/images/conversion-success.png')}
      />
    </StepWrapper>
  );
};

export default ThirdStep;
