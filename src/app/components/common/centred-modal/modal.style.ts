import styled from 'styled-components/native';
import {ThemeType} from '../../../../utils/theme';
import FastImage from 'react-native-fast-image';
import i18next from 'i18next';

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

export const CloseModal = styled.TouchableOpacity`
  position: absolute;
  right: ${i18next.language === 'ar' ? 'auto' : '24px'};
  left: ${i18next.language === 'ar' ? '24px' : 'auto'};
  top: 24px;
`;

export const ModalCloseIcon = styled(FastImage)`
  width: 24px;
  height: 24px;
`;
