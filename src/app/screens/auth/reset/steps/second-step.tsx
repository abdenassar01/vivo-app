/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import {
  BottomScreenWrapper,
  CentredView,
  FormWrapper,
  GreetingText,
  HeroText,
  ResetStep,
} from "../../auth.style";
import { useTheme } from "styled-components";
import { Swing } from "react-native-animated-spinkit";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { t } from "i18next";
import CustomInput from "../../../../components/common/form-fields/custom-input/CustomInput";

type Props = {
  otp: string;
  setOtp: (otp: string) => void;
};

const ResetSecondStep = ({ otp, setOtp }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const theme = useTheme();

  return (
    <FormWrapper>
      <HeroText>
        <GreetingText>{t("otp-header-text")}</GreetingText>
      </HeroText>
      <CentredView>
        {loading ? (
          <Swing size={60} color={theme.primary} />
        ) : (
          <OTPInputView
            style={{
              width: "80%",
              height: 70,
            }}
            pinCount={6}
            autoFocusOnLoad
            editable
            codeInputFieldStyle={{
              borderColor: theme.border,
              color: theme.secondaryBtnText,
              fontSize: 30,
              fontFamily: "Poppins-Bold",
              borderWidth: 0.6,
              width: 57.82,
              height: 74.5,
              borderRadius: 12,
            }}
            codeInputHighlightStyle={{
              borderColor: theme.primary,
            }}
            keyboardAppearance="dark"
            onCodeFilled={(code) => {
              setOtp(code);
            }}
          />
        )}
      </CentredView>
    </FormWrapper>
  );
};

export default ResetSecondStep;
