import styled from 'styled-components/native';
import {MainText} from '../../components/common/text';
import FastImage from 'react-native-fast-image';

export const OrdersScreenWrapper = styled.ScrollView`
  padding: 24px 0;
`;

export const TopSection = styled.View``;

export const HelperText = styled(MainText)`
  opacity: 0.8;
`;

export const QuizIcon = styled(FastImage)`
  width: 206px;
  height: 209.84px;
`;
