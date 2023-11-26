import styled from 'styled-components/native';
import {ThemeType} from '../../../../../utils/theme';

export const UploadPressableWrapper = styled.TouchableOpacity`
  align-items: center;
`;

export const UploadImageWrapper = styled.View<{theme: ThemeType}>`
  border-radius: 50px;
  border-color: ${({theme}) => theme.helperText};
  border-width: 2px;
`;

export const UploadWrapper = styled.ImageBackground`
  width: 90px;
  height: 90px;

  position: relative;
`;

export const UploadIconWrapper = styled.View<{theme: ThemeType}>`
  border-radius: 50px;
  padding: 2px;
  border-color: ${({theme}) => theme.helperText};
  border-width: 1px;
  background-color: white;
  position: absolute;
  right: -2%;
  bottom: -2%;
`;
