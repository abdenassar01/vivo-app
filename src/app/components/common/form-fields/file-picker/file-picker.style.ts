import styled from 'styled-components/native';
import {ThemeType} from '../../../../../utils/theme';
import {MainText} from '../../text';
import FastImage from 'react-native-fast-image';

export const FieldWrapper = styled.View`
  gap: 1px;
  width: 100%;
`;

export const Label = styled(MainText)<{theme: ThemeType}>`
  color: ${({theme}) => theme.helperText};
`;

export const InputWrapper = styled.TouchableOpacity<{theme: ThemeType}>`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 15px 20px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.background};
  border-width: 0.5px;
  border-color: ${({theme}) => theme.border};
  position: relative;
`;

export const ValueText = styled(MainText)<{theme: ThemeType}>`
  font-size: 14px;
  width: 90%;
  border-radius: 50px;
  color: ${({theme}) => theme.helperText};
`;

export const Icon = styled(FastImage)`
  width: 10%;
  aspect-ratio: 1/1;
  height: auto;
`;

export const ErrorMessage = styled(MainText)`
  color: #ff3333;
  font-size: 10px;
`;
