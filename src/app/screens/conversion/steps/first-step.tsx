import React from "react";
import {
  ConversionHeader,
  Label,
  StepMainText,
  StepWrapper,
  ValueText,
} from "../conversion.style";
import { t } from "i18next";
import PointsProgressChart from "../../../components/core/chart/points-progress-chart";

function FirstStep({ points, total }: { points: number; total: number }) {
  return (
    <StepWrapper showsVerticalScrollIndicator={false}>
      <StepMainText>{t("conversion-step-one-text")}</StepMainText>
      <PointsProgressChart points={points} progress={100} />
      <ConversionHeader>
        <Label>{t("amount-Conversion-label")}</Label>
        <ValueText>
          {total || 0} {t("currency-unit-text")}
        </ValueText>
      </ConversionHeader>
    </StepWrapper>
  );
}

export default FirstStep;
