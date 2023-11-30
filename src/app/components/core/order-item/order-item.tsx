import React, {useState} from 'react';
import {
  ArrowIcon,
  ContentWrapper,
  DateText,
  ExchangeIcon,
  Label,
  LeftIndicator,
  OrderIdText,
  OrderItemWrapper,
  OrderPropritiesWrapper,
  OrderProprity,
  StatusValue,
  TextWrapper,
  Value,
} from './order-item.style';
import CentredModal from '../../common/centred-modal/centred-modal';
import TitleHeader from '../title-header/title-header';
import {t} from 'i18next';
import {formateDate} from '../../../../utils/helpers/formate-date';

type Props = {
  order: {
    id: number;
    price: number;
    date: string;
    status: 'success' | 'inprogress';
    nbrPoints: number;
  };
};

const OrderItem = ({order}: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const {day, month, year} = formateDate(order.date);
  const date = `${day}/${month}/${year}`;

  return (
    <OrderItemWrapper onPress={() => setVisible(true)}>
      <LeftIndicator status={order.status} />
      <ContentWrapper>
        <ExchangeIcon
          source={
            order.status === 'success'
              ? require('../../../../assets/icons/exchange-green.png')
              : require('../../../../assets/icons/exchange-orange.png')
          }
        />
        <TextWrapper>
          <OrderIdText>
            #{order.id} - {order.price} MAD
          </OrderIdText>
          <DateText>{date}</DateText>
        </TextWrapper>
        <ArrowIcon source={require('../../../../assets/icons/arrow.png')} />
      </ContentWrapper>
      <CentredModal visible={visible} setVisible={setVisible}>
        <TitleHeader title={`${t('order-label')} #${order.id}`} />
        <OrderPropritiesWrapper>
          <OrderProprity>
            <Label>{t('demand-date-label')}</Label>
            <Value>{date}</Value>
          </OrderProprity>
          <OrderProprity>
            <Label>{t('number-points-text')}</Label>
            <Value>
              {order.nbrPoints} {t('points-label')}
            </Value>
          </OrderProprity>
          <OrderProprity>
            <Label>{t('amount-demand-label')}</Label>
            <Value>{order.price} MAD</Value>
          </OrderProprity>
          <OrderProprity>
            <Label>{t('demand-status-demand')}</Label>
            <StatusValue>{t('demand-status-inprogress')}</StatusValue>
          </OrderProprity>
        </OrderPropritiesWrapper>
      </CentredModal>
    </OrderItemWrapper>
  );
};

export default OrderItem;
