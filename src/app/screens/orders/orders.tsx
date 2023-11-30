import React from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {OrdersList, OrdersScreenWrapper} from './orders.style';
import TitleHeader from '../../components/core/title-header/title-header';
import {t} from 'i18next';
import OrderItem from '../../components/core/order-item/order-item';

const Orders = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <OrdersScreenWrapper>
        <TitleHeader title={t('demands-nav-label')} />
        <OrdersList>
          <OrderItem />
        </OrdersList>
      </OrdersScreenWrapper>
    </AppWrapper>
  );
};

export default Orders;
