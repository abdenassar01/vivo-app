import styled from 'styled-components/native';
import {ThemeType} from '../../../../../utils/theme';
import {MainText, SecondaryHeading} from '../../text';

export const FieldWrapper = styled.View`
  gap: 5px;
  width: 100%;
`;

export const Label = styled(SecondaryHeading)<{theme: ThemeType}>`
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
  padding: 5px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.secondaryBackground};
  position: relative;
`;

export const FieldText = styled.TextInput.attrs(({theme, icon}) => ({
  placeholderTextColor: theme.helperText,
  width: icon ? '90%' : '100%',
}))`
  padding-left: 5px;
  color: ${({theme}) => theme.text};
`;

export const ValueText = styled(MainText)<{theme: ThemeType}>`
  font-size: 16px;
  height: 40px;
  width: 40px;
  padding-top: 8px;
  text-align: center;
  border-radius: 50px;
  color: ${({theme}) => theme.background};
  background-color: ${({theme}) => theme.primary};
`;

export const ErrorMessage = styled(MainText)`
  color: #ff3333;
  font-size: 10px;
`;
