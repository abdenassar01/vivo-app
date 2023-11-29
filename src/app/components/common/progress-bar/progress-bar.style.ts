import styled from 'styled-components/native';
import {ThemeType} from '../../../../utils/theme';
import {MainText} from '../text';
import {Dimensions} from 'react-native';

export const ProgressBarWrapper = styled.View<{theme: ThemeType}>`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ProgressItemWrapper = styled.View<{
  theme: ThemeType;
  active: boolean;
}>`
  background-color: ${({theme, active}) =>
    active ? theme.tertiary : theme.background};
  border-radius: 50px;
  height: 24px;
  width: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({theme, active}) =>
    active ? theme.primary : theme.stepsIndicator};
`;

export const ProgressItemInnerCircle = styled(MainText)<{theme: ThemeType}>`
  height: 8px;
  width: 8px;
  border-radius: 50px;
  background-color: ${({theme}) => theme.background};
`;

export const LineSeparator = styled.View<{
  theme: ThemeType;
  active?: boolean;
}>`
  z-index: -1;
  margin-left: -5px;
  margin-right: -5px;
  height: 6px;
  width: ${Dimensions.get('screen').width / 3 + 10}px;
  background-color: ${({theme, active}) =>
    active ? theme.primary : theme.stepsIndicator};
`;
