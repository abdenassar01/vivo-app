import React from 'react';
import Header from '../../components/core/header/header';
import {MainText} from '../../components/common/text';
import {AppWrapper} from '../../../utils/shared-styles';
import {HomeWrapper} from './home.style';
import PointsProgressChart from '../../components/core/chart/points-progress-chart';

const Home = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <HomeWrapper>
        <PointsProgressChart progress={75} />
        <MainText>home</MainText>
      </HomeWrapper>
    </AppWrapper>
  );
};

export default Home;
