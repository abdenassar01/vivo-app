import styled from 'styled-components/native';
import {ThemeType} from '../../../../utils/theme';
import {MainText} from '../text';

export const ProgressBarWrapper = styled.View<{theme: ThemeType}>`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 15px 0;
`;

export const ProgressItemWrapper = styled.View<{
  theme: ThemeType;
  active: boolean;
}>`
  background-color: ${({theme, active}) =>
    active ? theme.tertiary : theme.background};
  border-radius: 50px;
  height: 30px;
  width: 30px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-radius: 50px;
  background-color: ${({theme, active}) =>
    active ? theme.primary : theme.stepsIndicator};
`;

export const ProgressItemInnerCircle = styled(MainText)<{theme: ThemeType}>`
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background-color: ${({theme}) => theme.background};
`;

export const LineSeparator = styled.View<{
  theme: ThemeType;
  active?: boolean;
}>`
  height: 3px;
  width: 50px;
  background-color: ${({theme, active}) =>
    active ? theme.primary : theme.stepsIndicator};
`;
