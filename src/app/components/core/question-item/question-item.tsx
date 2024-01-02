import React from "react";
import {
  QuestionImage,
  QuestionItemWrapper,
  QuestionText,
} from "./question-item.style";
import QuestionOptions from "../question-options/question-options";
import { Question } from "../../../../../types/question";
import { Control } from "react-hook-form";
import { useLangStore } from "../../../../stores/lang";

type Props = {
  question: Question;
  conrol: Control<any>;
  name: string;
  image?: string;
};

const QuestionItem = ({
  question: { ar, fr, arAnswers, frAnswers },
  conrol,
  name,
  image,
}: Props) => {
  const { currentLang } = useLangStore();

  return (
    <QuestionItemWrapper>
      <QuestionText>{currentLang === "fr" ? fr : ar}</QuestionText>
      <QuestionImage
        resizeMode="stretch"
        defaultSource={require("../../../../assets/images/question-default.png")}
        source={
          image || require("../../../../assets/images/question-default.png")
        }
      />
      <QuestionOptions
        control={conrol}
        options={currentLang === "fr" ? frAnswers : arAnswers}
        name={name}
      />
    </QuestionItemWrapper>
  );
};

export default QuestionItem;
