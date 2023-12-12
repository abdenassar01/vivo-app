import {Text} from 'react-native';
import {styled} from 'styled-components';
import {ThemeType} from '../../../utils/theme';

export const MainText = styled(Text)<{theme: ThemeType}>`
  font-family: '${({theme}) =>
    theme.lang === 'ar' ? 'Cairo' : 'Poppins'}-Regular';
  font-size: 14px;
  color: ${({theme}) => theme.text};
`;

export const Heading = styled(Text)<{theme: ThemeType}>`
  font-family: '${({theme}) =>
    theme.lang === 'ar' ? 'Cairo' : 'Poppins'}-Bold';
  font-size: 24px;
  color: ${({theme}) => theme.text};
`;

export const InputsLabel = styled(MainText)<{theme: ThemeType}>`
  color: ${({theme}) => theme.secondaryText};
`;

export const SecondaryHeading = styled(Text)<{theme: ThemeType}>`
  font-family: '${({theme}) =>
    theme.lang === 'ar' ? 'Cairo-Medium' : 'Poppins-SemiBold'}';
  font-size: 16px;
  color: ${({theme}) => theme.text};
`;
