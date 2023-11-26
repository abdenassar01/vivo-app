import {Text} from 'react-native';
import {styled} from 'styled-components';
import {ThemeType} from '../../../utils/theme';

export const MainText = styled(Text)<{theme: ThemeType}>`
  font-family: 'Nunito-Regular';
  color: ${({theme}) => theme.text};
`;

export const Heading = styled(Text)<{theme: ThemeType}>`
  font-family: 'Nunito-ExtraBold';
  font-size: 18px;
  color: ${({theme}) => theme.primary};
`;

export const SecondaryHeading = styled(Text)<{theme: ThemeType}>`
  font-family: 'Nunito-Bold';
  font-size: 16px;
  color: ${({theme}) => theme.secondary};
`;
