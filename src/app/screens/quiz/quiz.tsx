/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/core/header/header";
import { AppWrapper, BottomSpacer } from "../../../utils/shared-styles";
import {
  HelperText,
  OrdersScreenWrapper,
  QuizIcon,
  QuizItem,
  QuizPoint,
  QuizTitle,
  QuizesWrapper,
  StartButtonText,
  StartQuizButton,
  TopSection,
} from "./quiz.style";
import TitleHeader from "../../components/core/title-header/title-header";
import { t } from "i18next";
import Button from "../../components/common/form-fields/button/button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { QuizType, getQuizzes } from "../../services/Quiz";
import { UserAuth } from "../../contexts/AuthContext";
import { useLangStore } from "../../../stores/lang";
import { useQuery } from "react-query";
import ScreenLoader from "../../components/common/loader/screen-loader";
import { MainText } from "../../components/common/text";

const Quiz = () => {
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  const { user } = UserAuth();
  const { currentLang } = useLangStore();

  const { data, isLoading, isError } = useQuery<QuizType[]>(
    ["getting user quizes", user?.id],
    async () => getQuizzes(user?.id || "")
  );

  if (isLoading) return <ScreenLoader />;
  if (isError) return <MainText>error</MainText>;

  return (
    <AppWrapper>
      <Header openDrower />
      <OrdersScreenWrapper
        contentContainerStyle={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <TopSection>
          <TitleHeader title={t("quiz-header-text")} />
          <HelperText>{t("quiz-main-text")}</HelperText>
          <QuizesWrapper>
            {React.Children.toArray(
              data?.map((item) => (
                <QuizItem lang={currentLang}>
                  <QuizTitle>
                    {currentLang === "ar" ? item.ar : item.fr}
                  </QuizTitle>
                  <QuizPoint>
                    +{item.points} {t("points-label")}
                  </QuizPoint>
                  <StartQuizButton
                    onPress={() => navigate("QuizQuestion", { id: item.id })}
                  >
                    <StartButtonText>{t("quiz-button-text")}</StartButtonText>
                  </StartQuizButton>
                </QuizItem>
              ))
            )}
          </QuizesWrapper>
        </TopSection>
        <QuizIcon
          source={require("../../../assets/images/quiz-illustration.png")}
        />
        {data && data?.length > 0 ? (
          <Button
            text={t("quiz-button-text")}
            onPress={() => navigate("QuizQuestion", { id: data[0].id })}
          />
        ) : (
          <BottomSpacer size={50} />
        )}
      </OrdersScreenWrapper>
    </AppWrapper>
  );
};

export default Quiz;
