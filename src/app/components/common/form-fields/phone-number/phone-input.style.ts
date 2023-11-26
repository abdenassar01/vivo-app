import styled from 'styled-components/native';
import {ThemeType} from '../../../../../utils/theme';
import {MainText, SecondaryHeading} from '../../text';

export const FieldWrapper = styled.View`
  gap: 5px;
  height: 110px;
`;

export const Label = styled(SecondaryHeading)<{theme: ThemeType}>`
  color: ${({theme}) => theme.helperText};
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
  position: relative;
  gap: 5px;
`;

export const DropDownTrigger = styled.TouchableOpacity`
  height: 95%;
  width: 30%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  background-color: ${({theme}) => theme.secondaryBackground};
`;

export const CountryCodeText = styled(MainText)`
  font-size: 18px;
`;

export const FieldText = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.helperText,
}))`
  width: 70%;
  padding: 15px 10px;
  border-radius: 10px;
  color: ${({theme}) => theme.text};
  background-color: ${({theme}) => theme.secondaryBackground};
`;

export const ErrorMessage = styled(MainText)`
  color: #ff3333;
  font-size: 10px;
`;
