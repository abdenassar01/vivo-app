import styled from 'styled-components/native';
import {SecondaryHeading} from '../../text';
import {ThemeType} from '../../../../../utils/theme';

export const ActionButton = styled.TouchableOpacity<{
  theme: ThemeType;
  width: string | number;
  btnTheme: 'primary' | 'secondary' | 'error' | 'warning';
}>`
  border-radius: 5px;
  padding: 10px 32px;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  border-color: ${({theme, btnTheme}) =>
    btnTheme === 'error'
      ? '#f71b40'
      : btnTheme === 'warning'
      ? '#edca2d'
      : theme.primary};
  border-width: 1px;
  background-color: ${({theme, btnTheme}) =>
    btnTheme === 'primary'
      ? theme.primary
      : btnTheme === 'secondary'
      ? theme.background
      : btnTheme === 'error'
      ? '#f71b40'
      : '#edca2d'};
  width: ${({width}) => width || '100%'};
`;

export const ButtonText = styled(SecondaryHeading)<{
  theme: ThemeType;
  btnTheme: 'primary' | 'secondary';
}>`
  color: ${({theme, btnTheme}) =>
    btnTheme !== 'primary' ? theme.text : theme.background};
`;
