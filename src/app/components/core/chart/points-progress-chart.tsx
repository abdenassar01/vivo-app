import React from 'react';
import {
  CircleInnerText,
  PointChartWrapper,
  PointText,
  PointTextUnit,
} from './points-progress-chart.style';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {useTheme} from 'styled-components';
import {t} from 'i18next';

type Props = {
  progress: number;
};

const PointsProgressChart = ({progress}: Props) => {
  const theme = useTheme();

  return (
    <PointChartWrapper>
      <AnimatedCircularProgress
        size={146}
        width={8}
        fill={progress}
        tintColor={theme.primary}
        backgroundColor="#F3F4F6"
        delay={300}
        rotation={360}>
        {() => (
          <CircleInnerText>
            <PointText>7500</PointText>
            <PointTextUnit>{t('points-label')}</PointTextUnit>
          </CircleInnerText>
        )}
      </AnimatedCircularProgress>
    </PointChartWrapper>
  );
};

export default PointsProgressChart;
