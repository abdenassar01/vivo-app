import React from "react";
import { t } from "i18next";
import CustomInput from "../../../../components/common/form-fields/custom-input/CustomInput";

const ThirdStep = () => {
  return (
    <>
      <CustomInput
        id="email"
        type="email"
        label={t("email-input-text")}
        placeholder={t("email-input-placeholder")}
      />
      <CustomInput
        id="password"
        type="password"
        label={t("password-input-text")}
        placeholder={t("password-input-text")}
      />
      <CustomInput
        id="pwdConfirm"
        label={t("confirm-password-input-text")}
        placeholder={t("confirm-password-input-text")}
        type="password"
      />
    </>
  );
};

export default ThirdStep;
