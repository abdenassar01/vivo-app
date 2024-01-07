import React, { useState } from "react";
import { AppWrapper } from "../../../utils/shared-styles";
import Header from "../../components/core/header/header";
import { ButtonsWrapper, QuestionScreenWrapper } from "./quiz-question.style";
import QuestionCounter from "../../components/core/question-counter/question-counter";
import QuestionItem from "../../components/core/question-item/question-item";
import Button from "../../components/common/form-fields/button/button";
import { t } from "i18next";
import { useForm } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { addQuiz, getQuiz } from "../../services/Quiz";
import { UserAuth } from "../../contexts/AuthContext";
import { useQuery } from "react-query";
import { Quiz } from "types/question";
import ScreenLoader from "../../components/common/loader/screen-loader";
import { MainText } from "../../components/common/text";
import { useLangStore } from "../../../stores/lang";

type FormValues = { selectedOption: string };

const QuizQuestion = () => {
  const [answers, setAnswers] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const { control, handleSubmit } = useForm<any>();
  const { navigate } = useNavigation<StackNavigationProp<any>>();
  const { user, setUser } = UserAuth();
  const [disabled, setDisabled] = useState<boolean>(false);
  const { currentLang } = useLangStore();
  const {
    params: { id },
  } = useRoute<any>();

  const { data, isLoading, isError } = useQuery<Quiz>(
    ["quiz", user?.id],
    async () => getQuiz(id || "")
  );

  const onSubmit = (formValues: FormValues) => {
    next(
      formValues.selectedOption ===
        (currentLang === "fr"
          ? data?.questions[index]?.frAnswers[
              data?.questions[index]?.correctAnswer
            ]
          : data?.questions[index]?.frAnswers[
              data?.questions[index]?.correctAnswer
            ])
    );
  };

  const next = (isCorrect: boolean) => {
    if (data) {
      if (isCorrect) setAnswers(answers + 1);
      if (index < data.questions.length - 1) {
        setIndex(index + 1);
        setDisabled(false);
      } else {
        const points =
          parseInt(user?.points?.toString() || "0") +
          parseInt(data?.points.toString() || "0");
        addQuiz(user?.id || "", id || "", points);
        setUser({ ...user, points: points });
        navigate("QuizSuccess", { points: data?.points });
      }
    }
  };

  if (isLoading) return <ScreenLoader />;
  if (isError) return <MainText>error</MainText>;

  return (
    <AppWrapper>
      <Header openDrower />
      <QuestionScreenWrapper>
        <QuestionCounter
          numberOfQuestions={data?.questions.length || 0}
          questionNbr={index + 1}
          onComplete={handleSubmit(onSubmit)}
        />
        <QuestionItem
          disabled={disabled}
          setDisabled={setDisabled}
          conrol={control}
          name="selectedOption"
          image={data?.thumbnail}
          question={{
            ar: data?.questions[index]?.ar || "",
            fr: data?.questions[index]?.fr || "",
            arAnswers: data?.questions[index]?.arAnswers || [],
            frAnswers: data?.questions[index]?.frAnswers || [],
            correctAnswer: data?.questions[index]?.correctAnswer || 0,
          }}
        />
      </QuestionScreenWrapper>
      <ButtonsWrapper>
        <Button
          text={t("button-previous-text")}
          btnTheme="secondary"
          width="42%"
          onPress={() => navigate("Quiz")}
        />
        <Button
          width="56%"
          text={t("button-next-text")}
          onPress={handleSubmit(onSubmit)}
        />
      </ButtonsWrapper>
    </AppWrapper>
  );
};

export default QuizQuestion;
