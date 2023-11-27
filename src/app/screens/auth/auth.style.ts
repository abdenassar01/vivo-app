import styled from 'styled-components/native';
import {ThemeType} from '../../../utils/theme';
import {MainText, SecondaryHeading} from '../../components/common/text';

export const Illustration = styled.Image`
  width: 221px;
  height: 188px;
`;

export const HeroText = styled.View`
  padding: 0;
  width: 100%;
  justify-content: start;
`;

export const GreetingText = styled(SecondaryHeading)<{theme: ThemeType}>`
  font-size: 24px;
  text-align: justify;
  color: ${({theme}) => theme.text};
`;

export const HelperText = styled(MainText)<{theme: ThemeType}>`
  color: ${({theme}) => theme.helperText};
  text-align: justify;
`;

export const HighlightText = styled(MainText)<{theme: ThemeType}>`
  color: ${({theme}) => theme.tertiary};
  text-align: center;
`;

export const Scrollable = styled.ScrollView``;

export const LoginScreenWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const FormWrapper = styled.View<{theme: ThemeType}>`
  gap: 16px;
  width: 100%;
`;

export const BottomScreenWrapper = styled.View`
  gap: 15px;
`;

export const PasswordWrapper = styled.View``;

export const SwitchScreensWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
`;

export const ForgotPasswordSection = styled.View`
  align-items: flex-end;
`;

export const CentredView = styled.View`
  width: 100%;
  align-items: center;
`;

export const LinkWrapper = styled.TouchableOpacity`
  width: fit-content;
`;

export const LinkText = styled(MainText)<{theme: ThemeType}>`
  color: ${({theme}) => theme.secondary};
`;

export const SwitchScreensLabel = styled(MainText)<{theme: ThemeType}>`
  font-size: 14px;
  color: ${({theme}) => theme.secondaryText};
`;

export const SwitchScreensLink = styled.TouchableOpacity``;

export const SwitchScreensLinkText = styled(MainText)<{
  theme: ThemeType;
}>`
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
  color: ${({theme}) => theme.secondary};
`;
