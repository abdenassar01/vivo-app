import styled from 'styled-components/native';
import {
  Heading,
  MainText,
  SecondaryHeading,
} from '../../components/common/text';
import {ThemeType} from '../../../utils/theme';
import i18next from 'i18next';
import FastImage from 'react-native-fast-image';

export const ConversionScreenWrapper = styled.ScrollView``;

export const ConversionHeader = styled.View`
  width: 100%;
`;

export const ButtonsWrapper = styled.View<{lang: string}>`
  flex-direction: ${({lang}) => (lang === 'ar' ? 'row-reverse' : 'row')};
  justify-content: space-between;
  width: 100%;
  gap: 5px;
  padding-bottom: 24px;
`;

export const GreetingText = styled(SecondaryHeading)<{theme: ThemeType}>`
  font-size: 24px;
  color: ${({theme}) => theme.secondaryBtnText};
`;

export const StepMainText = styled(MainText)<{theme: ThemeType}>`
  color: ${({theme}) => theme.secondaryBtnText};
  font-size: 13px;
`;

export const StepWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {gap: 26, alignItems: 'center'},
})`
  padding-top: 12px;
`;

export const Label = styled(MainText)<{theme: ThemeType}>`
  font-family: ${i18next.language === 'ar' ? 'Ciaro-Medium' : 'Poppins-Medium'};
  color: ${({theme}) => theme.secondaryBtnText};
`;

export const ValueText = styled(Heading)<{theme: ThemeType}>`
  color: ${({theme}) => theme.primary};
  font-size: 18px;
`;

export const BorderedWrapper = styled.View<{theme: ThemeType}>`
  border-color: ${({theme}) => theme.primary};
  border-width: 2px;
  border-radius: 13px;
  padding: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ConversionSuccessIllustration = styled(FastImage)`
  width: 140px;
  aspect-ratio: 1/1;
`;
