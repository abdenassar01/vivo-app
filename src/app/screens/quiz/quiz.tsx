/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/core/header/header";
import { AppWrapper } from "../../../utils/shared-styles";
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
import { getQuizzes } from "../../services/Quiz";
import { UserAuth } from "../../contexts/AuthContext";
import { Swing } from "react-native-animated-spinkit";
import { useTheme } from "styled-components";
import { useLangStore } from "../../../stores/lang";

const Quiz = () => {
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  const { user } = UserAuth();
  const [data, setData] = useState<any[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isMounted = useRef(true);
  const { primary } = useTheme();
  const { currentLang } = useLangStore();

  useEffect(() => {
    isMounted.current = true;

    const fetchData = async () => {
      const res = await getQuizzes(user?.id || "");
      if (isMounted.current) {
        setIsLoading(false);
        setData(res);
        console.log(res);
      }
    };

    fetchData();
    return () => {
      isMounted.current = false;
    };
  }, [user]);

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
            {isLoading ? (
              <Swing size={40} color={primary} />
            ) : (
              React.Children.toArray(
                data?.map((item) => (
                  <QuizItem>
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
              )
            )}
          </QuizesWrapper>
          {/* quizes */}
        </TopSection>
        <QuizIcon
          source={require("../../../assets/images/quiz-illustration.png")}
        />
        {data && (
          <Button
            text={t("quiz-button-text")}
            onPress={() => navigate("QuizQuestion", { id: data[0].id })}
          />
        )}
      </OrdersScreenWrapper>
    </AppWrapper>
  );
};

export default Quiz;
