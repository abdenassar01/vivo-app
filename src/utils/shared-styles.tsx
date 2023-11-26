import {styled} from 'styled-components/native';
import {ThemeType} from './theme';

export const AppWrapper = styled.SafeAreaView<{theme: ThemeType}>`
  background-color: ${({theme}) => theme.background};
  padding: 15px;
  flex: 1;
`;

export const AppWrapperWithoutPadding = styled.SafeAreaView<{theme: ThemeType}>`
  background-color: ${({theme}) => theme.background};
  flex: 1;
`;

export const BottomSpacer = styled.View`
  height: 50px;
`;

export const HorisontalSpacer = styled.View`
  width: 30px;
`;
