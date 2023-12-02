import styled from 'styled-components/native';
import {ThemeType} from '../../../utils/theme';
import FastImage from 'react-native-fast-image';
import {Heading} from '../../components/common/text';
import {Dimensions} from 'react-native';

export const HomeWrapper = styled.ScrollView<{theme: ThemeType}>``;

export const TabsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Tab = styled.TouchableOpacity<{color: string}>`
  width: ${(Dimensions.get('screen').width - 60) / 2}px;
  height: 82px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  gap: 7px;
  background-color: ${({color}) => color};
`;

export const TabIcon = styled(FastImage)`
  width: 40px;
  height: 40px;
`;

export const TabLabel = styled(Heading)<{theme: ThemeType}>`
  font-size: 9px;
  text-align: center;
  color: ${({theme}) => theme.background};
`;

export const RecentRatingsWrapper = styled.View`
  padding-top: 24px;
`;

export const RatingsList = styled.View``;
