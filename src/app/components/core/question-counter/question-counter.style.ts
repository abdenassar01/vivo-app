import styled from 'styled-components/native';
import {Heading, SecondaryHeading} from '../../common/text';
import {ThemeType} from '../../../../utils/theme';
import i18next from 'i18next';

export const QuestionCounterWrapper = styled.View`
  width: 100%;
  flex-direction: ${i18next.language === 'fr' ? 'row' : 'row-reverse'};
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
