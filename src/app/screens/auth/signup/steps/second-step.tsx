import React from "react";
import { t } from "i18next";
import CustomInput from "../../../../components/common/form-fields/custom-input/CustomInput";

const SecondStep = () => {
  return (
    <CustomInput
      id="otp"
      label={t("otp-label")}
      placeholder={t("otp-placeholder")}
    />
  );
};

export default SecondStep;
