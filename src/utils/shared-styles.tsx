import {styled} from 'styled-components/native';
import {ThemeType} from './theme';

export const AppWrapper = styled.SafeAreaView<{theme: ThemeType}>`
  background-color: ${({theme}) => theme.background};
  padding-left: 24px;
  padding-right: 24px;
  flex: 1;
`;

export const AppWrapperWithoutPadding = styled.SafeAreaView<{theme: ThemeType}>`
  background-color: ${({theme}) => theme.background};
  flex: 1;
`;

export const WithPadding = styled.View<{padding?: number}>`
  padding: ${({padding}) => padding || 24}px;
`;

export const WithVerticalPadding = styled.View<{padding?: number}>`
  padding: ${({padding}) => padding || 24}px 0;
`;

export const WithHorisontalPadding = styled.View<{padding?: number}>`
  padding: 0 ${({padding}) => padding || 24}px;
`;

export const BottomSpacer = styled.View<{size: number}>`
  height: ${({size}) => size || 50}px;
`;

export const HorisontalSpacer = styled.View`
  width: 30px;
`;
