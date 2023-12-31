import React from "react";
import {
  FormWrapper,
  GreetingText,
  HelperText,
  HeroText,
  ResetStep,
} from "../../auth.style";
import { t } from "i18next";
import CustomInput from "../../../../components/common/form-fields/custom-input/CustomInput";

const ResetFirstStep = () => {
  return (
    <FormWrapper>
      <HeroText>
        <GreetingText>{t("reset-header-text1")} </GreetingText>
        <GreetingText>{t("reset-header-text2")}</GreetingText>
        <HelperText>{t("reset-main-text")}</HelperText>
      </HeroText>
      <CustomInput
        label={t("phone-input-text")}
        id="phone"
        placeholder={t("phone-input-placeholder")}
      />
    </FormWrapper>
  );
};

export default ResetFirstStep;
