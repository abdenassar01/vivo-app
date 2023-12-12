import styled from 'styled-components/native';
import {ThemeType} from '../../../../../utils/theme';
import {MainText} from '../../text';

export const FieldWrapper = styled.View`
  gap: 1px;
  width: 100%;
`;

export const Label = styled(MainText)<{theme: ThemeType}>`
  color: ${({theme}) => theme.helperText};
`;

export const IconWrapper = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const PasswordIcon = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  height: 50px;
  position: absolute;
  z-index: 2;
  top: 5px;
  right: 5px;
`;

export const InputWrapper = styled.View<{theme: ThemeType}>`
  flex-direction: row;
  align-items: center;
  padding: 5px 20px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.background};
  border-width: 0.5px;
  border-color: ${({theme}) => theme.border};
  position: relative;
`;

export const FieldText = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.helperText,
}))`
  width: 100%;
  color: ${({theme}) => theme.text};
  font-family: '${({theme}) =>
    theme.lang === 'ar' ? 'Cairo' : 'Poppins'}-Regular';
`;

export const EyeIcon = styled.Image`
  height: 24px;
  width: 24px;
`;

export const ValueText = styled(MainText)<{theme: ThemeType}>`
  font-size: 14px;
  text-align: center;
  border-radius: 50px;
  color: ${({theme}) => theme.background};
  background-color: ${({theme}) => theme.primary};
`;

export const ErrorMessage = styled(MainText)`
  color: #ff3333;
  font-size: 10px;
`;
