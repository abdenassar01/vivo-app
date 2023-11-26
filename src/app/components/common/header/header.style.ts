import styled from 'styled-components/native';
import {SecondaryHeading} from '../text';
import {ThemeType} from '../../../../utils/theme';

export const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const GoBackWrapper = styled.TouchableOpacity<{theme: ThemeType}>`
  padding: 5px;
  background-color: ${({theme}) => theme.secondaryBackground};
  border-radius: 50px;
`;

export const ScreenTitle = styled(SecondaryHeading)<{theme: ThemeType}>`
  font-size: 18px;
  color: ${({theme}) => theme.primary};
`;

export const ScreenTitleInverted = styled(SecondaryHeading)<{theme: ThemeType}>`
  font-size: 18px;
  color: ${({theme}) => theme.white};
`;

export const CenteredWrapper = styled.View`
  align-items: center;
`;
