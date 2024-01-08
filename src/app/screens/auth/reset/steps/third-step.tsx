import React from "react";
import { FormWrapper, GreetingText, HeroText } from "../../auth.style";
import { t } from "i18next";
import CustomInput from "../../../../components/common/form-fields/custom-input/CustomInput";

const ResetThirdStep = () => {
  return (
    <FormWrapper>
      <HeroText>
        <GreetingText>{t("reset-new-password-header")}</GreetingText>
      </HeroText>
      <CustomInput
        id="password"
        label={t("password-input-text")}
        placeholder={t("password-input-text")}
        type="password"
      />
      <CustomInput
        id="pwdConfirm"
        label={t("confirm-password-input-text")}
        placeholder={t("confirm-password-input-text")}
        type="password"
      />
    </FormWrapper>
  );
};

export default ResetThirdStep;
