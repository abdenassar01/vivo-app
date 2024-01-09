import FastImage from "react-native-fast-image";
import { ThemeType } from "src/utils/theme";
import styled from "styled-components/native";

export const StarsList = styled.View<{ theme: ThemeType }>`
  flex-direction: ${({ theme }) =>
    theme.lang === "ar" ? "row-reverse" : "row"};
  gap: 5px;
`;

export const StarImage = styled(FastImage)<{ size?: number }>`
  width: ${({ size }) => size || 12}px;
  height: ${({ size }) => size || 12}px;
`;
