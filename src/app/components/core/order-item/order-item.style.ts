import styled from 'styled-components/native';
import {ThemeType} from '../../../../utils/theme';
import FastImage from 'react-native-fast-image';
import {MainText, SecondaryHeading} from '../../common/text';

export const OrderItemWrapper = styled.TouchableOpacity<{
  theme: ThemeType;
  lang: string;
}>`
  width: 100%;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({theme}) => theme.helperText};
  border-left-width: ${({lang}) => (lang === 'ar' ? '1px' : '0')};
  border-right-width: ${({lang}) => (lang === 'ar' ? '0' : '1px')};
  flex-direction: ${({lang}) => (lang === 'ar' ? 'row-reverse' : 'row')};
  position: relative;
`;

export const ContentWrapper = styled.View<{lang: string}>`
  padding: 8px 16px 8px 10px;
  flex-direction: ${({lang}) => (lang === 'ar' ? 'row-reverse' : 'row')};
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const LeftIndicator = styled.View<{
  status: 'success' | 'inprogress';
  lang: string;
}>`
  background-color: ${({status}) =>
    status === 'success' ? '#80BD0A' : '#FFB400'};
  width: 10px;
  height: 102%;
  border-top-left-radius: ${({lang}) => (lang === 'ar' ? '0' : '6px')};
  border-bottom-left-radius: ${({lang}) => (lang === 'ar' ? '0' : '6px')};
  border-top-right-radius: ${({lang}) => (lang === 'ar' ? '6px' : '0')};
  border-bottom-right-radius: ${({lang}) => (lang === 'ar' ? '6px' : '0')};
`;

export const ExchangeIcon = styled(FastImage)`
  width: 28px;
  aspect-ratio: 1/1;
`;

export const ArrowIcon = styled(FastImage)<{lang: string}>`
  width: 18px;
  height: 14px;
  position: absolute;
  right: 16px;
  transform: ${({lang}) => (lang === 'ar' ? 'scaleX(-1)' : 'scaleX(1)')};
`;

export const TextWrapper = styled.View``;

export const OrderIdText = styled(SecondaryHeading)`
  font-size: 11px;
  color: ${({theme}) => theme.secondaryBtnText};
`;

export const DateText = styled(MainText)`
  font-size: 10px;
  color: ${({theme}) => theme.secondaryBtnText};
`;

export const OrderPropritiesWrapper = styled.View`
  height: 85%;
  padding-top: 18px;
  justify-content: space-between;
`;

export const OrderProprity = styled.View``;

export const Label = styled(DateText)`
  font-size: 12px;
`;

export const Value = styled(OrderIdText)<{lang: string}>`
  font-size: 12px;
  text-align: ${({lang}) => (lang === 'ar' ? 'right' : 'left')};
`;

export const StatusValue = styled(Value)`
  color: #ffb400;
`;
