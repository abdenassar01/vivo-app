import React from "react";
import {
  AppWrapperWithoutPadding,
  WithHorisontalPadding,
  WithPadding,
} from "../../../utils/shared-styles";
import Header from "../../components/core/header/header";
import {
  CongratsImage,
  CongratsText,
  NbrPoints,
  PointsLabel,
  QuizSuccessScreenWrapper,
  TextWrapper,
  WinnerName,
} from "./quiz-success.style";
import { t } from "i18next";
import Button from "../../components/common/form-fields/button/button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { UserAuth } from "../../contexts/AuthContext";

const QuizSuccess = () => {
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  const {
    params: { points },
  } = useRoute<any>();

  const { user } = UserAuth();

  return (
    <AppWrapperWithoutPadding>
      <WithHorisontalPadding>
        <Header openDrower />
      </WithHorisontalPadding>
      <QuizSuccessScreenWrapper
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <WithHorisontalPadding>
          <CongratsText>{t("congrats-text")}</CongratsText>
        </WithHorisontalPadding>
        <WinnerName>{user?.fullname}</WinnerName>
        <CongratsImage
          resizeMode="stretch"
          source={require("../../../assets/images/quiz-sucess.png")}
        />
        <TextWrapper>
          <PointsLabel>{t("points-wining")}</PointsLabel>
          <NbrPoints>
            {points} {t("points-label")}
          </NbrPoints>
        </TextWrapper>
        <WithPadding>
          <Button
            width="100%"
            onPress={() => navigate("Home", { revalidate: true })}
            text={t("home-nav-label")}
          />
        </WithPadding>
      </QuizSuccessScreenWrapper>
    </AppWrapperWithoutPadding>
  );
};

export default QuizSuccess;
