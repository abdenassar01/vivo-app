import React from 'react';
import {MainText} from '../../components/common/text';
import Header from '../../components/core/header/header';
import {AppWrapper} from '../../../utils/shared-styles';

const Quiz = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <MainText>quiz</MainText>
    </AppWrapper>
  );
};

export default Quiz;
