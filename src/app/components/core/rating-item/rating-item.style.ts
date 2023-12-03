import styled from 'styled-components/native';
import {ThemeType} from '../../../../utils/theme';
import {MainText, SecondaryHeading} from '../../common/text';
import i18next from 'i18next';

export const RatingItemWrapper = styled.View<{theme: ThemeType}>`
  flex-direction: ${i18next.language === 'ar' ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.stepsIndicator};
`;

export const TimeText = styled(SecondaryHeading)<{theme: ThemeType}>`
  font-size: 11px;
  color: #c2c2c2;
  width: 35%;
`;

export const PointsText = styled(MainText)<{status: 'win' | 'drow'}>`
  color: ${({status}) => (status === 'win' ? '#3ebe12' : '#c2c2c2')};
  width: 30%;
  text-align: ${i18next.language === 'ar' ? 'left' : 'right'};
`;
