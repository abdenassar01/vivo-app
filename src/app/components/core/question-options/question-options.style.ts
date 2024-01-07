import styled from "styled-components/native";
import { ThemeType } from "../../../../utils/theme";
import { MainText } from "../../common/text";
import FastImage from "react-native-fast-image";

export const QuestionsOptionsWrapper = styled.View`
  gap: 10px;
  padding-top: 28px;
`;

export const QuestionOptionItem = styled.TouchableOpacity<{
  theme: ThemeType;
  selected: boolean;
  correct: boolean;
}>`
  width: 100%;
  padding: 15px;
  border-width: 0.5px;
  border-color: #979797;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  background-color: ${({ theme, selected, correct }) =>
    !selected ? theme.background : correct ? theme.primary : "#B00020"};
`;

export const OptionSelectedIcon = styled(FastImage)`
  width: 22px;
  height: 22px;
`;

export const OptionText = styled(MainText)<{
  theme: ThemeType;
  selected: boolean;
}>`
  color: ${({ theme, selected }) =>
    selected ? theme.white : theme.secondaryBtnText};
`;
