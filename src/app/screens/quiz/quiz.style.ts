import styled from "styled-components/native";
import {
  Heading,
  MainText,
  SecondaryHeading,
} from "../../components/common/text";
import FastImage from "react-native-fast-image";
import { TouchableOpacity } from "react-native";
import { ThemeType } from "src/utils/theme";

export const OrdersScreenWrapper = styled.ScrollView`
  padding: 24px 0;
`;

export const TopSection = styled.View``;

export const HelperText = styled(MainText)`
  opacity: 0.8;
`;

export const QuizIcon = styled(FastImage)`
  width: 206px;
  height: 209.84px;
`;

export const QuizesWrapper = styled.View`
  padding-top: 20px;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const QuizItem = styled.TouchableOpacity<{
  theme: ThemeType;
  lang: string;
}>`
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ lang }) => (lang === "ar" ? "row-reverse" : "row")};
  padding: 5px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.border};
`;

export const QuizTitle = styled(MainText)<{ theme: ThemeType }>`
  width: 35%;
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;

export const QuizPoint = styled(Heading)<{ theme: ThemeType }>`
  width: 30%;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

export const StartQuizButton = styled(TouchableOpacity)<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.primary};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  min-height: 40px;
  width: 33%;
`;

export const StartButtonText = styled(Heading)<{ theme: ThemeType }>`
  font-size: 10px;
  color: ${({ theme }) => theme.secondaryBackground};
`;
