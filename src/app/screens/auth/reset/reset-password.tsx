import React, { useState } from "react";
import {
  BottomScreenWrapper,
  LoginScreenWrapper,
  SwitchScreensLabel,
  SwitchScreensLink,
  SwitchScreensLinkText,
  SwitchScreensWrapper,
} from "../auth.style";
import { AppWrapper, BottomSpacer } from "../../../../utils/shared-styles";
import ResetFirstStep from "./steps/first-step";
import ResetSecondStep from "./steps/second-step";
import ResetThirdStep from "./steps/third-step";
import Header from "../../../components/core/header/header";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { t } from "i18next";
import { resetPassword } from "../../../services/Auth";
import auth from "@react-native-firebase/auth";
import { User } from "../../../../../types/user";
import Button from "../../../components/common/form-fields/button/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLangStore } from "../../../../stores/lang";

const ResetPassword = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  const { background } = useTheme();
  const [otp, setOtp] = useState<string>("");
  const [confirm, setConfirm] = useState<any>();
  const { currentLang } = useLangStore();

  const getValidationSchemas = () => {
    switch (currentStep) {
      case 1:
        return {
          phone: Yup.string()
            .matches(/^0[5-9]\d{8}$/, t("phone-invalid"))
            .required(t("phone-required")),
        };
      case 2:
        return {};
      case 3:
        return {
          password: Yup.string()
            .min(8, t("password-invalid"))
            .required(t("password-required")),
          pwdConfirm: Yup.string()
            .oneOf([Yup.ref("password")], t("password-invalid"))
            .required(t("repassword-required")),
        };
    }
  };

  const requestOTP = async (phone: string) => {
    console.log("request otp");
    const nbr = `+212${phone.slice(1)}`;

    try {
      const confirmation = await auth().signInWithPhoneNumber(nbr, true);
      setConfirm(confirmation);
      await AsyncStorage.setItem("isResiting", "true");
      if (confirmation) setCurrentStep(2);
      else Alert.alert("An Error Occured!");
    } catch (e: any) {
      console.log(e?.message);
      Alert.alert("An Error Occured!");
    }
  };

  const verifyOTP = async (code: string) => {
    try {
      await confirm.confirm(code);
      console.log("code valide");
      setCurrentStep(3);
    } catch (error) {
      console.log("Invalid code.", error);
      Alert.alert("Invalid code!");
    }
  };

  const next = async (data: User) => {
    switch (currentStep) {
      case 1:
        await requestOTP(data.phone || "");
        break;
      case 2:
        console.log(otp);
        await verifyOTP(otp);
        break;
      case 3:
        await AsyncStorage.removeItem("isResiting");
        const res = await resetPassword(data.password || "");
        if (res.success) {
          console.log("Password Reseted Succesfully!");
          setCurrentStep(1);
        } else Alert.alert(res.error);
        break;
    }
  };

  return (
    <AppWrapper>
      <StatusBar backgroundColor={background} />
      <LoginScreenWrapper>
        <Header />
        <Formik
          initialValues={{
            phone: "",
            password: "",
            pwdConfirm: "",
          }}
          validationSchema={Yup.object(getValidationSchemas() as any)}
          onSubmit={async (data, { setSubmitting }) => {
            setSubmitting(true);
            await next(data);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, handleSubmit }) => (
            <>
              {currentStep === 1 && <ResetFirstStep />}
              {currentStep === 2 && (
                <ResetSecondStep otp={otp} setOtp={setOtp} />
              )}
              {currentStep === 3 && <ResetThirdStep />}

              <BottomScreenWrapper>
                <Button
                  width="100%"
                  text={t("button-reset-text")}
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                />
                <SwitchScreensWrapper lang={currentLang}>
                  <SwitchScreensLabel>
                    {t("dont-have-account")}
                  </SwitchScreensLabel>
                  <SwitchScreensLink onPress={() => navigate("SignUp")}>
                    <SwitchScreensLinkText>
                      {t("register-action-button-text")}
                    </SwitchScreensLinkText>
                  </SwitchScreensLink>
                </SwitchScreensWrapper>
              </BottomScreenWrapper>
            </>
          )}
        </Formik>
        <BottomSpacer size={10} />
      </LoginScreenWrapper>
    </AppWrapper>
  );
};

export default ResetPassword;
