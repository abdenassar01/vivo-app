import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {MainText, SecondaryHeading} from '../../common/text';
import {ThemeType} from '../../../../utils/theme';

export const DrawerWrapper = styled(DrawerContentScrollView)`
  padding: 24px;
`;

export const DrawerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled(FastImage)`
  width: 91px;
  height: 22.17px;
`;

export const Icon = styled(FastImage)`
  width: 24px;
  height: auto;
  aspect-ratio: 1/1;
`;

export const Content = styled.View`
  height: ${Dimensions.get('screen').height - 100}px;
  justify-content: space-between;
  padding: 40px 0 24px;
`;

export const ProfileWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const ProfileAvatar = styled(FastImage)`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const ProfileInfo = styled.View``;

export const ProfileName = styled(MainText)<{theme: ThemeType}>`
  font-size: 18px;
  font-family: 'Poppins-Medium';
  color: ${({theme}) => theme.secondaryBtnText};
`;

export const ProfileId = styled(SecondaryHeading)`
  font-size: 12px;
  color: #20a9e3;
`;

export const Clickable = styled.TouchableOpacity``;

export const ItemsList = styled.View``;

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
`;

export const ItemText = styled(ProfileName)`
  font-size: 14px;
  text-transform: capitalize;
  margin-bottom: -5px;
`;
