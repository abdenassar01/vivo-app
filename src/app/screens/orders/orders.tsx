import React from "react";
import { AppWrapper, BottomSpacer } from "../../../utils/shared-styles";
import Header from "../../components/core/header/header";
import { OrdersList, OrdersScreenWrapper } from "./orders.style";
import TitleHeader from "../../components/core/title-header/title-header";
import { t } from "i18next";
import OrderItem from "../../components/core/order-item/order-item";
import { Transfer, getTransfers } from "../../services/Transfers";
import { UserAuth } from "../../contexts/AuthContext";
import { useQuery } from "react-query";
import ScreenLoader from "../../components/common/loader/screen-loader";

const Orders = () => {
  const { user } = UserAuth();
  const { data, isLoading, isError } = useQuery<any>(
    ["transfers", user?.id],
    () => getTransfers(user?.id || "")
  );

  if (isLoading) return <ScreenLoader />;

  return (
    <AppWrapper>
      <Header openDrower />
      <TitleHeader title={t("demands-nav-label")} />
      <OrdersScreenWrapper showsVerticalScrollIndicator={false}>
        <BottomSpacer size={10} />
        <OrdersList>
          {data.map((item: Transfer, index: number) => (
            <OrderItem transfer={item} key={index} />
          ))}
        </OrdersList>
      </OrdersScreenWrapper>
    </AppWrapper>
  );
};

export default Orders;
