import { SecondaryHeading } from "../../components/common/text";
import { ThemeType } from "../../../utils/theme";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const FullScreenWrapper = styled.View`
  height: ${Dimensions.get("screen").height - 48}px;
  justify-content: space-between;
`;

export const FormWrapper = styled.ScrollView<{ theme: ThemeType }>`
  margin-top: 30px;
  gap: 8px;
  width: 100%;
  min-height: 250px;
  padding-bottom: 10px;
`;

export const GreetingText = styled(SecondaryHeading)<{ theme: ThemeType }>`
  margin-top: 30px;
  font-size: 24px;
  color: ${({ theme }) => theme.secondaryBtnText};
`;
