import React from 'react';
import {
  ConversionHeader,
  Label,
  StepMainText,
  StepWrapper,
  ValueText,
} from '../conversion.style';
import {t} from 'i18next';
import PointsProgressChart from '../../../components/core/chart/points-progress-chart';

const FirstStep = () => {
  return (
    <StepWrapper showsVerticalScrollIndicator={false}>
      <StepMainText>{t('conversion-step-one-text')}</StepMainText>
      <PointsProgressChart progress={100} />
      <ConversionHeader>
        <Label>{t('amount-Conversion-label')}</Label>
        <ValueText>1200 {t('currency-unit-text')}</ValueText>
      </ConversionHeader>
    </StepWrapper>
  );
};

export default FirstStep;
