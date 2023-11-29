import React from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {MainText} from '../../components/common/text';

const Orders = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <MainText>Orders</MainText>
    </AppWrapper>
  );
};

export default Orders;
