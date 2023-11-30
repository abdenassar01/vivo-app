import React from 'react';
import {AppWrapper} from '../../../utils/shared-styles';
import Header from '../../components/core/header/header';
import {OrdersList, OrdersScreenWrapper} from './orders.style';
import TitleHeader from '../../components/core/title-header/title-header';
import {t} from 'i18next';
import OrderItem from '../../components/core/order-item/order-item';

const orders = [
  {
    id: Math.ceil(Math.random() * 100000),
    price: 1200,
    date: new Date().toISOString(),
    status: 'success',
    nbrPoints: 2743,
  },
  {
    id: Math.ceil(Math.random() * 100000),
    price: 1200,
    date: new Date().toISOString(),
    status: 'inprogress',
    nbrPoints: 2743,
  },
  {
    id: Math.ceil(Math.random() * 100000),
    price: 72839,
    date: new Date().toISOString(),
    status: 'success',
    nbrPoints: 2743,
  },
  {
    id: Math.ceil(Math.random() * 100000),
    price: 1200,
    date: new Date().toISOString(),
    status: 'inprogress',
    nbrPoints: 2743,
  },
  {
    id: Math.ceil(Math.random() * 100000),
    price: 72839,
    date: new Date().toISOString(),
    status: 'success',
    nbrPoints: 2743,
  },
];

const Orders = () => {
  return (
    <AppWrapper>
      <Header openDrower />
      <OrdersScreenWrapper>
        <TitleHeader title={t('demands-nav-label')} />
        <OrdersList>
          {React.Children.toArray(
            orders.map(order => <OrderItem order={order} />),
          )}
        </OrdersList>
      </OrdersScreenWrapper>
    </AppWrapper>
  );
};

export default Orders;
