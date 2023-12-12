import styled from 'styled-components/native';
import {ThemeType} from '../../../../utils/theme';
import FastImage from 'react-native-fast-image';

export const ModalWrapper = styled.View<{theme: ThemeType}>`
  width: 100%;
  background-color: ${({theme}) => theme.background};
  height: 55%;
  border-radius: 20px;
  position: relative;
`;

export const ChildrenWrapper = styled.View`
  margin: 24px;
  margin-top: 40px;
`;

export const CloseModal = styled.TouchableOpacity<{lang: string}>`
  position: absolute;
  right: ${({lang}) => (lang === 'ar' ? 'auto' : '24px')};
  left: ${({lang}) => (lang === 'ar' ? '24px' : 'auto')};
  top: 24px;
`;

export const ModalCloseIcon = styled(FastImage)`
  width: 24px;
  height: 24px;
`;
