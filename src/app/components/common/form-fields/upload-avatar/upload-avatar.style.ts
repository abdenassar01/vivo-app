import styled from 'styled-components/native';
import {ThemeType} from '../../../../../utils/theme';
import {MainText} from '../../text';

export const UploadPressableWrapper = styled.TouchableOpacity`
  align-items: center;
`;

export const UploadImageWrapper = styled.View<{theme: ThemeType}>`
  border-radius: 50px;
  align-items: center;
  gap: 5px;
`;

export const Icon = styled.Image`
  width: 36px;
  height: 36px;
  position: absolute;
  right: -2%;
  bottom: -2%;
`;

export const UploadWrapper = styled.ImageBackground`
  width: 90px;
  height: 90px;

  position: relative;
`;

export const ErrorMessage = styled(MainText)`
  color: #ff3333;
  font-size: 10px;
`;
