import React from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {MainText} from '../../components/common/text';

const Ratings = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <MainText>Ratings</MainText>
    </AppWrapper>
  );
};

export default Ratings;
