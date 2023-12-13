import styled from 'styled-components/native';
import {SecondaryHeading} from '../../text';
import {ThemeType} from '../../../../../utils/theme';

export const ActionButton = styled.TouchableOpacity<{
  theme: ThemeType;
  width: string | number;
  disabled: boolean;
  btnTheme: 'primary' | 'secondary' | 'error' | 'warning';
}>`
  border-radius: 12px;
  padding: 10px 32px;
  box-sizing: border-box;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  border-color: ${({theme, btnTheme, disabled}) =>
    disabled
      ? '#C1C1C1'
      : btnTheme === 'error'
      ? '#f71b40'
      : btnTheme === 'warning'
      ? '#edca2d'
      : theme.primary};
  border-width: ${({btnTheme}) => (btnTheme === 'secondary' ? 0 : 1)}px;
  background-color: ${({theme, btnTheme, disabled}) =>
    disabled
      ? '#C1C1C1'
      : btnTheme === 'primary'
      ? theme.primary
      : btnTheme === 'secondary'
      ? theme.background
      : btnTheme === 'error'
      ? '#f71b40'
      : '#edca2d'};
  width: ${({width}) => width || '100%'};
  elevation: ${({btnTheme}) => (btnTheme === 'secondary' ? 4 : 0)};
`;

export const ButtonText = styled(SecondaryHeading)<{
  theme: ThemeType;
  btnTheme: 'primary' | 'secondary' | 'error' | 'warning';
}>`
  color: ${({theme, btnTheme}) =>
    btnTheme !== 'primary' ? theme.secondaryBtnText : theme.background};
`;
