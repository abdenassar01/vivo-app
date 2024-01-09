import React, { useState } from "react";
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
} from "./order-item.style";
import CentredModal from "../../common/centred-modal/centred-modal";
import TitleHeader from "../title-header/title-header";
import { t } from "i18next";
import { formateDate } from "../../../../utils/helpers/formate-date";
import { useLangStore } from "../../../../stores/lang";
import { Transfer } from "src/app/services/Transfers";

type Props = {
  transfer: Transfer;
};

const OrderItem = ({ transfer }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { currentLang } = useLangStore();

  return (
    <OrderItemWrapper lang={currentLang} onPress={() => setVisible(true)}>
      <LeftIndicator
        lang={currentLang}
        status={!transfer.status ? "success" : "inprogress"}
      />
      <ContentWrapper lang={currentLang}>
        <ExchangeIcon
          source={
            !transfer.status
              ? require("../../../../assets/icons/exchange-green.png")
              : require("../../../../assets/icons/exchange-orange.png")
          }
        />
        <TextWrapper>
          <OrderIdText>
            #{transfer.id} - {transfer.total} MAD
          </OrderIdText>
          <DateText lang={currentLang}>
            {transfer.date.toDate().toLocaleDateString("fr-FR")}
          </DateText>
        </TextWrapper>
        <ArrowIcon
          lang={currentLang}
          source={require("../../../../assets/icons/arrow.png")}
        />
      </ContentWrapper>
      <CentredModal visible={visible} setVisible={setVisible}>
        <TitleHeader title={`${t("order-label")} #${transfer.id}`} />
        <OrderPropritiesWrapper>
          <OrderProprity>
            <Label lang={currentLang}>{t("demand-date-label")}</Label>
            <Value lang={currentLang}>
              {transfer.date.toDate().toLocaleDateString("fr-FR")}
            </Value>
          </OrderProprity>
          <OrderProprity>
            <Label lang={currentLang}>{t("number-points-text")}</Label>
            <Value lang={currentLang}>
              {transfer.points} {t("points-label")}
            </Value>
          </OrderProprity>
          <OrderProprity>
            <Label lang={currentLang}>{t("amount-demand-label")}</Label>
            <Value lang={currentLang}>{transfer.total} MAD</Value>
          </OrderProprity>
          <OrderProprity>
            <Label lang={currentLang}>{t("demand-status-demand")}</Label>
            <StatusValue finished={!transfer.status} lang={currentLang}>
              {transfer.status
                ? t("demand-status-inprogress")
                : t("demand-status-valid")}
            </StatusValue>
          </OrderProprity>
        </OrderPropritiesWrapper>
      </CentredModal>
    </OrderItemWrapper>
  );
};

export default OrderItem;
