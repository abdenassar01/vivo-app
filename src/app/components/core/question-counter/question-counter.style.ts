import styled from 'styled-components/native';
import {Heading, SecondaryHeading} from '../../common/text';
import {ThemeType} from '../../../../utils/theme';

export const QuestionCounterWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionMainText = styled(Heading)<{theme: ThemeType}>`
  font-size: 20px;
  color: ${({theme}) => theme.secondaryBtnText};
`;

export const QuestionSecondaryText = styled(QuestionMainText)`
  font-family: 'Poppins-Regular';
`;

export const CountdownText = styled(SecondaryHeading)<{theme: ThemeType}>`
  font-size: 14px;
  color: ${({theme}) => theme.secondaryBtnText};
`;
