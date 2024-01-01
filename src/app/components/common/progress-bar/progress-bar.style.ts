import styled from "styled-components/native";
import { ThemeType } from "../../../../utils/theme";
import { MainText, SecondaryHeading } from "../text";
import { Dimensions } from "react-native";

export const ProgressBarWrapper = styled.View<{
  theme: ThemeType;
  lang: string;
}>`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ lang }) => (lang === "ar" ? "row-reverse" : "row")};
`;

export const ProgressBarHeaderText = styled(SecondaryHeading)<{
  theme: ThemeType;
}>`
  color: ${({ theme }) => theme.primary};
  font-size: 15px;
`;

export const ProgressItemWrapper = styled.View<{
  theme: ThemeType;
  active: boolean;
}>`
  background-color: ${({ theme, active }) =>
    active ? theme.tertiary : theme.background};
  border-radius: 50px;
  height: 24px;
  width: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ theme, active }) =>
    active ? theme.primary : theme.stepsIndicator};
`;

export const ProgressItemInnerCircle = styled(MainText)<{ theme: ThemeType }>`
  height: 8px;
  width: 8px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.background};
`;

export const LineSeparator = styled.View<{
  theme: ThemeType;
  active?: boolean;
  nbrSteps: number;
}>`
  z-index: -1;
  margin-left: -5px;
  margin-right: -5px;
  height: 6px;
  width: ${({ nbrSteps }) => Dimensions.get("screen").width / nbrSteps - 10}px;
  background-color: ${({ theme, active }) =>
    active ? theme.primary : theme.stepsIndicator};
`;
