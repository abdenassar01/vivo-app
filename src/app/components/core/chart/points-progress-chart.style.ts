import styled from 'styled-components/native';
import {ThemeType} from '../../../../utils/theme';
import {SecondaryHeading} from '../../common/text';

export const PointChartWrapper = styled.View<{theme: ThemeType}>`
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CircleInnerText = styled.View`
  justify-content: center;
`;

export const PointText = styled(SecondaryHeading)<{theme: ThemeType}>`
  font-size: 25px;
  text-align: center;
  color: ${({theme}) => theme.secondaryBtnText};
`;

export const PointTextUnit = styled(PointText)<{theme: ThemeType}>`
  font-size: 14px;
  margin-top: -10px;
`;
