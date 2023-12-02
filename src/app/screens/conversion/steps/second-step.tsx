import React from 'react';
import {
  BorderedWrapper,
  Label,
  StepMainText,
  StepWrapper,
  ValueText,
} from '../conversion.style';
import {t} from 'i18next';

const SecondStep = () => {
  return (
    <StepWrapper showsVerticalScrollIndicator={false}>
      <StepMainText>{t('conversion-step-two-text')}</StepMainText>
      <BorderedWrapper>
        <Label>{t('number-points-conversion-text')}</Label>
        <ValueText>26881 {t('points-unit-text')}</ValueText>
      </BorderedWrapper>
      <BorderedWrapper>
        <Label>{t('amount-Conversion-label')}</Label>
        <ValueText>1200 {t('currency-unit-text')}</ValueText>
      </BorderedWrapper>
    </StepWrapper>
  );
};

export default SecondStep;
