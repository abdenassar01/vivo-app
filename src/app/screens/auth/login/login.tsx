import React, { useState } from "react";
import { AppWrapper, BottomSpacer } from "../../../../utils/shared-styles";
import {
  BottomScreenWrapper,
  ForgotPasswordSection,
  FormWrapper,
  GreetingText,
  HeroText,
  Illustration,
  LinkText,
  LinkWrapper,
  LoginScreenWrapper,
  PasswordWrapper,
  Scrollable,
  SwitchScreensLabel,
  SwitchScreensLink,
  SwitchScreensLinkText,
  SwitchScreensWrapper,
} from "../auth.style";
import CustomInput from "../../../components/common/form-fields/custom-input/CustomInput";
import Button from "../../../components/common/form-fields/button/button";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../../components/core/header/header";
import { t } from "i18next";
import { Alert } from "react-native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useLangStore } from "../../../../stores/lang";
import { signIn } from "../../../services/Auth";

const Login = () => {
  const { background } = useTheme();
  const { currentLang } = useLangStore();
  const { navigate } = useNavigation<StackNavigationProp<any>>();

  const handleLogin = async (data: any, { setSubmitting }: any) => {
    setSubmitting(true);
    console.log(data);
    const res = await signIn(data.phone, data.password);

    if (res.success) {
      console.log("Logged on Successfully!");
    } else Alert.alert("Phone or Passwords Are Incorrect!");

    setSubmitting(false);
  };

  return (
    <AppWrapper>
      <StatusBar backgroundColor={background} />
      <Scrollable showsVerticalScrollIndicator={false}>
        <LoginScreenWrapper>
          <Header />
          <Illustration
            source={require("../../../../assets/images/login-illustration.png")}
          />
          <Formik
            initialValues={{
              phone: "",
              password: "",
            }}
            validationSchema={Yup.object({
              phone: Yup.string()
                .matches(/^0[5-9]\d{8}$/, t("phone-invalid"))
                .required(t("phone-required")),
              password: Yup.string().required(t("password-required")),
            })}
            onSubmit={handleLogin}
          >
            {({ handleSubmit, isSubmitting }) => (
              <FormWrapper>
                <HeroText>
                  <GreetingText>{t("login-header-text")}</GreetingText>
                </HeroText>
                <CustomInput
                  id="phone"
                  type="tel"
                  label={t("phone-input-text")}
                  placeholder={t("phone-input-text")}
                />
                <PasswordWrapper>
                  <CustomInput
                    id="password"
                    type="password"
                    label={t("password-input-text")}
                    placeholder={t("password-input-text")}
                  />
                  <ForgotPasswordSection>
                    <LinkWrapper onPress={() => navigate("ResetPassword")}>
                      <LinkText>{t("forget-password-text")}</LinkText>
                    </LinkWrapper>
                  </ForgotPasswordSection>
                </PasswordWrapper>
                <BottomScreenWrapper>
                  <Button
                    width="100%"
                    text={t("login-action-button-text")}
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
              </FormWrapper>
            )}
          </Formik>
          <BottomSpacer size={30} />
        </LoginScreenWrapper>
      </Scrollable>
    </AppWrapper>
  );
};

export default Login;
