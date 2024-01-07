import React from "react";
import {
  BorderedWrapper,
  Label,
  StepMainText,
  StepWrapper,
  ValueText,
} from "../conversion.style";
import { t } from "i18next";

function SecondStep({ points, total }: { points: number; total: number }) {
  return (
    <StepWrapper showsVerticalScrollIndicator={false}>
      <StepMainText>{t("conversion-step-two-text")}</StepMainText>
      <BorderedWrapper>
        <Label>{t("number-points-conversion-text")}</Label>
        <ValueText>
          {points} {t("points-unit-text")}
        </ValueText>
      </BorderedWrapper>
      <BorderedWrapper>
        <Label>{t("amount-Conversion-label")}</Label>
        <ValueText>
          {total} {t("currency-unit-text")}
        </ValueText>
      </BorderedWrapper>
    </StepWrapper>
  );
}

export default SecondStep;
