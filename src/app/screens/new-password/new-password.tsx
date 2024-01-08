import React from "react";
import {
  FormWrapper,
  FullScreenWrapper,
  GreetingText,
} from "./new-password.style";
import CustomInput from "../../components/common/form-fields/custom-input/CustomInput";
import { t } from "i18next";
import { AppWrapper } from "../../../utils/shared-styles";
import Button from "../../components/common/form-fields/button/button";
import { Formik } from "formik";
import * as Yup from "yup";
import { User } from "types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { resetPassword } from "../../services/Auth";
import Toast from "react-native-toast-message";

const NewPassword = () => {
  const handleResetPassword = async (data: User) => {
    await AsyncStorage.removeItem("isResiting");
    const res = await resetPassword(data.password || "");
    if (res.success) {
      Toast.show({
        type: "success",
        text1: t("success-header"),
        text2: t("reset-password-success-message"),
      });
    } else {
      Toast.show({
        type: "error",
        text1: t("error-header"),
        text2: res.error,
      });
    }
  };

  return (
    <AppWrapper>
      <FullScreenWrapper>
        <GreetingText>{t("reset-new-password-header")}</GreetingText>

        <Formik
          initialValues={{
            phone: "",
            password: "",
            pwdConfirm: "",
          }}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(8, t("password-invalid"))
              .required(t("password-required")),
            pwdConfirm: Yup.string()
              .oneOf([Yup.ref("password")], t("password-invalid"))
              .required(t("repassword-required")),
          } as any)}
          onSubmit={async (data, { setSubmitting }) => {
            setSubmitting(true);
            await handleResetPassword(data);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, handleSubmit }) => (
            <>
              <FormWrapper>
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

              <Button
                width="100%"
                text={t("button-reset-text")}
                onPress={() => console.log("")}
                disabled={isSubmitting}
              />
            </>
          )}
        </Formik>
      </FullScreenWrapper>
    </AppWrapper>
  );
};

export default NewPassword;
