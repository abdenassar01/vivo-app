import styled from 'styled-components/native';
import {ThemeType} from '../../../utils/theme';
import {Heading, MainText} from '../../components/common/text';

export const OnBoardingWrapper = styled.ImageBackground<{theme: ThemeType}>`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  justify-content: flex-end;
  align-items: center;
`;

export const OnBoardingContent = styled.View`
  padding: 15px;
  justify-content: center;
  width: 100%;
`;

export const OnBoardingHeading = styled(Heading)<{theme: ThemeType}>`
  color: ${({theme}) => theme.text};
  text-align: center;
  font-size: 22px;
`;

export const OnBoardingText = styled(MainText)<{theme: ThemeType}>`
  color: ${({theme}) => theme.secondaryText};
  text-align: center;
  margin-bottom: 70px;
`;
