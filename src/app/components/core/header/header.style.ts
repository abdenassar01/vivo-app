import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {MainText} from '../../common/text';

export const HeaderWrapper = styled.View<{lang: string}>`
  width: 100%;
  padding: 30px 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({lang}) => (lang === 'ar' ? 'row-reverse' : 'row')};
`;

export const CentredLogo = styled.Image`
  width: 115.85px;
  height: 28.22px;
`;

export const OpenDrawerIcon = styled(FastImage)<{lang: string}>`
  width: 24px;
  aspect-ratio: 1/1;
  transform: ${({lang}) => (lang === 'ar' ? 'scaleX(-1)' : 'scaleX(1)')};
`;

export const Clickable = styled.TouchableOpacity``;

export const LanguageToggle = styled.TouchableOpacity<{lang: string}>`
  flex-direction: ${({lang}) => (lang === 'ar' ? 'row' : 'row-reverse')};
  gap: 2px;
`;

export const LanguageToggleIcon = styled(FastImage)`
  width: 16px;
  aspect-ratio: 1/1;
`;

export const LanguageToggleText = styled(MainText)<{lang: string}>`
  color: #c4c4c4;
  font-size: 11px;
  font-family: '${({theme}) =>
    theme.lang === 'ar' ? 'Poppins' : 'Cairo'}-Regular';
`;
