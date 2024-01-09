import React, { useEffect, useState } from "react";
import { AppWrapper, BottomSpacer } from "../../../../utils/shared-styles";
import {
  ButtonsWrapper,
  ContentWrapper,
  GreetingText,
  HeroText,
  LoginScreenWrapper,
  SignUpStep,
  HelperText,
} from "../auth.style";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../../components/common/form-fields/custom-input/CustomInput";
import SecondStep from "./steps/second-step";
import ThirdStep from "./steps/third-step";
import FourthStep from "./steps/fourth-step";
import Header from "../../../components/core/header/header";
import ProgressBar from "../../../components/common/progress-bar/progress-bar";
import { t } from "i18next";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { UserAuth } from "../../../contexts/AuthContext";
import { User } from "../../../../../types/user";
import { Alert } from "react-native";
import { useLangStore } from "../../../../stores/lang";
import Button from "../../../components/common/form-fields/button/button";
import { signup } from "../../../services/Auth";
import auth from "@react-native-firebase/auth";
import { NavigationProp } from "@react-navigation/native";
import { isUserRegistered } from "../../../services/Auth";
import { ErrorMessage } from "../../../components/common/form-fields/custom-input/CustomInput.style";
import Toast from "react-native-toast-message";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const SignUp = ({ navigation }: RouterProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { background } = useTheme();
  const [avatar, setAvatar] = useState("");
  const [cinPhoto, setCinPhoto] = useState("");
  const [confirm, setConfirm] = useState<any>();
  const [error, setError] = useState<any>();
  const { user, setUser } = UserAuth();
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
        return {
          otp: Yup.string()
            .matches(/^\d{6}$/, t("otp-invalid"))
            .required(t("otp-required")),
        };
      case 3:
        return {
          email: Yup.string().email(t("email-invalid")),
          password: Yup.string()
            .min(8, t("password-invalid"))
            .required(t("password-required")),
          pwdConfirm: Yup.string()
            .oneOf([Yup.ref("password")], t("password-not-match"))
            .required(t("repassword-required")),
        };
      case 4:
        return {
          fullname: Yup.string()
            .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, t("fullname-required"))
            .required(t("fullname-required")),
          cin: Yup.string().required(t("cni-required")),
        };
    }
  };

  const goBack = () => {
    switch (currentStep) {
      case 1:
        navigation.navigate("Login");
        break;
      case 2:
        changeStep(1);
        break;
      case 3:
        changeStep(2);
        break;
      case 4:
        changeStep(3);
        break;
    }
  };

  const changeStep = (step: number) => {
    setCurrentStep(step);
  };

  const requestOTP = async (phone: string) => {
    console.log("request otp");
    const nbr = `+212${phone.slice(1)}`;

    try {
      const confirmation = await auth().signInWithPhoneNumber(nbr, true);
      console.log(confirmation);
      setConfirm(confirmation);
      if (confirmation) changeStep(2);
      else
        Toast.show({
          type: "error",
          text1: t("error-header"),
          text2: t("general-error"),
        });
    } catch (e: any) {
      console.log(e?.message);
      error(e?.message);
      Toast.show({
        type: "error",
        text1: t("error-header"),
        text2: t("general-error"),
      });
    }
  };

  const verifyOTP = async (code: string) => {
    try {
      await confirm.confirm(code);
      console.log("code valide");
      changeStep(3);
    } catch (error) {
      console.log("Invalid code.");
      Toast.show({
        type: "error",
        text1: t("error-header"),
        text2: t("invalid-otp"),
      });
    }
  };

  const next = async (data: User) => {
    switch (currentStep) {
      case 1:
        const isRegistred = await isUserRegistered(data.phone || "");

        if (!isRegistred) {
          await requestOTP(data.phone || "");
        } else {
          Toast.show({
            type: "error",
            text1: t("error-header"),
            text2: t("user-alredy-registred-error"),
          });
        }

        break;
      case 2:
        await verifyOTP(data.otp || "");
        break;
      case 3:
        changeStep(4);
        break;
      case 4:
        const res3 = await signup({
          ...data,
          avatar,
          cinPhoto,
        });
        if (res3.success) {
          setUser(res3.data);
          Toast.show({
            type: "success",
            text1: t("success-header"),
            text2: t("register-success-message"),
          });
          changeStep(1);
        } else {
          Toast.show({
            type: "error",
            text1: t("error-header"),
            text2: res3.error,
          });
        }
        break;
    }
  };

  return (
    <AppWrapper>
      <StatusBar backgroundColor={background} />
      <Formik
        initialValues={{
          fullname: "",
          phone: "",
          otp: "",
          email: "",
          password: "",
          pwdConfirm: "",
          cin: "",
        }}
        validationSchema={Yup.object(getValidationSchemas() as any)}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          await next(data);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <LoginScreenWrapper>
            <Header />
            <ContentWrapper>
              <HeroText>
                <GreetingText>{t("signup-header-text")}</GreetingText>
              </HeroText>
              <ProgressBar step={currentStep} nbrSteps={4} />
            </ContentWrapper>
            <SignUpStep>
              {currentStep === 1 ? (
                <>
                  <CustomInput
                    id="phone"
                    label={t("phone-input-text")}
                    placeholder={t("phone-input-text")}
                  />
                  <ErrorMessage>{error}</ErrorMessage>
                </>
              ) : currentStep === 2 ? (
                <SecondStep />
              ) : currentStep === 3 ? (
                <ThirdStep />
              ) : (
                <FourthStep
                  avatar={avatar}
                  cinPhoto={cinPhoto}
                  setAvatar={setAvatar}
                  setCinPhoto={setCinPhoto}
                />
              )}
              <ButtonsWrapper lang={currentLang}>
                {currentStep !== 4 && (
                  <Button
                    text={t("button-previous-text")}
                    btnTheme="secondary"
                    width="42%"
                    onPress={() => goBack()}
                  />
                )}
                <Button
                  width={currentStep === 4 ? "100%" : "56%"}
                  text={t("button-next-text")}
                  disabled={isSubmitting}
                  onPress={handleSubmit}
                />
                <BottomSpacer size={10} />
              </ButtonsWrapper>
            </SignUpStep>
            <BottomSpacer size={10} />
          </LoginScreenWrapper>
        )}
      </Formik>
    </AppWrapper>
  );
};

export default SignUp;
