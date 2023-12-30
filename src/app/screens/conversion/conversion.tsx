import React, { useEffect, useState } from "react";
import { AppWrapper } from "../../../utils/shared-styles";
import Header from "../../components/core/header/header";
import {
  ButtonsWrapper,
  ConversionHeader,
  ConversionScreenWrapper,
  GreetingText,
} from "./conversion.style";
import ProgressBar from "../../components/common/progress-bar/progress-bar";
import { t } from "i18next";
import Button from "../../components/common/form-fields/button/button";
import FirstStep from "./steps/first-step";
import SecondStep from "./steps/second-step";
import ThirdStep from "./steps/third-step";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useLangStore } from "../../../stores/lang";
import { UserAuth } from "../../contexts/AuthContext";
import { Default, getDefaults } from "../../services/Default";
import { addTransfer } from "../../services/Transfers";
import { useQuery } from "react-query";
import { Alert } from "react-native";

const Conversion = () => {
  const { navigate, goBack } = useNavigation<StackNavigationProp<any>>();
  const { currentLang } = useLangStore();
  const [total, setTotal] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { user } = UserAuth();
  const { data } = useQuery<any>(["reviews", user?.id], () => getDefaults());

  const stepHeaders = [
    t("conversion-second-header-step1"),
    t("conversion-second-header-step2"),
    t("conversion-second-header-step3"),
  ];

  const buttonsText = [
    {
      next: t("button-next-text"),
      prev: t("button-previous-text"),
    },
    {
      next: t("conversion-button-validate-text"),
      prev: t("button-previous-text"),
    },
    {
      next: t("button-next-text"),
      prev: t("home-nav-label"),
    },
  ];

  const next = async () => {
    if (currentStep == 2) {
      await addTransfer(user?.id || "", user?.points || 0, total)
        .then(() => setCurrentStep(3))
        .catch((err) => {
          Alert.alert(err);
        });
    } else setCurrentStep(2);
  };

  useEffect(() => {
    if (user?.points) setTotal(user?.points * data[0]?.moneyPerPoint);
  }, [data, user]);

  return (
    <AppWrapper>
      <Header openDrower />
      <ConversionScreenWrapper
        contentContainerStyle={{
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <ConversionHeader>
          <GreetingText>{t("conversion-header-text")}</GreetingText>
          <ProgressBar
            nbrSteps={3}
            step={currentStep}
            headerText={stepHeaders[currentStep - 1]}
          />
        </ConversionHeader>
        {currentStep === 1 ? (
          <FirstStep points={user?.points || 0} total={total} />
        ) : currentStep === 2 ? (
          <SecondStep points={user?.points || 0} total={total} />
        ) : (
          <ThirdStep />
        )}

        <ButtonsWrapper lang={currentLang}>
          {currentStep === 3 ? (
            <Button
              btnTheme="secondary"
              onPress={() => navigate("Home")}
              text={t("home-nav-label")}
            />
          ) : (
            <>
              <Button
                btnTheme="secondary"
                width="42%"
                onPress={() =>
                  currentStep === 1 || currentStep === 3
                    ? goBack()
                    : setCurrentStep((prev) => prev - 1)
                }
                text={buttonsText[currentStep - 1].prev}
              />
              {currentStep !== 3 && user?.points != 0 && (
                <Button
                  onPress={next}
                  width="56%"
                  text={t("button-next-text")}
                />
              )}
            </>
          )}
        </ButtonsWrapper>
      </ConversionScreenWrapper>
    </AppWrapper>
  );
};

export default Conversion;
