import styled from "styled-components/native";
import { ThemeType } from "../../../../utils/theme";
import { MainText, SecondaryHeading } from "../../common/text";

export const RatingItemWrapper = styled.View<{
  theme: ThemeType;
  lang: String;
}>`
  flex-direction: ${({ lang }) => (lang === "ar" ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.stepsIndicator};
`;

export const TimeText = styled(SecondaryHeading)<{
  theme: ThemeType;
  lang: String;
}>`
  font-size: 11px;
  color: #c2c2c2;
  width: 33%;
  padding: 0 10px;
  text-align: ${({ lang }) => (lang === "ar" ? "right" : "left")};
`;

export const PointsText = styled(MainText)<{
  status: "win" | "drow";
  lang: string;
}>`
  color: ${({ status }) => (status === "win" ? "#3ebe12" : "#c2c2c2")};
  width: 33%;
  text-align: ${({ lang }) => (lang === "ar" ? "left" : "right")};
`;
