import React from 'react';
import Header from '../../components/core/header/header';
import {MainText} from '../../components/common/text';
import {AppWrapper} from '../../../utils/shared-styles';

const Home = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <MainText>home</MainText>
    </AppWrapper>
  );
};

export default Home;
