import React, {useState} from 'react';
import {Control, useController} from 'react-hook-form';
import {
  DropDownTrigger,
  ErrorMessage,
  FieldText,
  FieldWrapper,
  InputWrapper,
  Label,
} from './phone-input.style';
import {MainText} from '../../text';
import {CountryPicker} from 'react-native-country-codes-picker';
import {useTheme} from 'styled-components';

type Props = {
  label: string;
  name: string;
  control: Control<any>;
  placeholder?: string;
  defaultValue?: string;
};

const PhoneInput = ({
  control,
  label,
  name,
  defaultValue,
  placeholder,
}: Props) => {
  const {
    field: {onBlur, onChange},
    fieldState: {error},
  } = useController({
    control: control,
    name: name,
    defaultValue: defaultValue || '',
  });

  const theme = useTheme();

  const [show, setShow] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>('+212');
  const [countryFlag, setCountryFlag] = useState<string>('🇲🇦');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <InputWrapper>
        <DropDownTrigger onPress={() => setShow(prev => !prev)}>
          <MainText>
            {countryFlag} {countryCode}
          </MainText>
        </DropDownTrigger>
        {/*  */}
        <FieldText
          value={phoneNumber}
          onChangeText={text => {
            onChange(`${countryCode} ${text}`);
            setPhoneNumber(text);
          }}
          onBlur={onBlur}
          nativeID={name}
          placeholder={placeholder || label}
          keyboardType="number-pad"
        />
      </InputWrapper>
      <ErrorMessage>{error?.message}</ErrorMessage>
      <CountryPicker
        onBackdropPress={() => setShow(false)}
        lang="en"
        show={show}
        style={{
          modal: {
            maxHeight: 300,
            backgroundColor: theme.background,
          },
          textInput: {
            backgroundColor: theme.secondaryBackground,
            color: theme.text,
          },
          line: {
            height: 3,
            backgroundColor: theme.secondaryBackground,
          },
          countryButtonStyles: {
            backgroundColor: theme.secondaryBackground,
          },
          dialCode: {
            color: theme.text,
          },
          countryName: {
            color: theme.text,
          },
        }}
        pickerButtonOnPress={item => {
          setCountryFlag(item.flag);
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
    </FieldWrapper>
  );
};

export default PhoneInput;
