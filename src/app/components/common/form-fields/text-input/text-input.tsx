import React, {useState} from 'react';
import {
  ErrorMessage,
  FieldText,
  FieldWrapper,
  IconWrapper,
  InputWrapper,
  Label,
  PasswordIcon,
} from './text-input.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'styled-components';
import {Control, useController} from 'react-hook-form';
import {KeyboardTypeOptions} from 'react-native';

type Props = {
  label: string;
  name: string;
  control: Control<any>;
  placeholder?: string;
  icon?: string;
  type?: string;
  defaultValue?: string;
  keyboard?: KeyboardTypeOptions;
};

const TextInput = ({
  label,
  name,
  icon,
  placeholder,
  type,
  control,
  defaultValue,
  keyboard,
}: Props) => {
  const theme = useTheme();
  const [isPassword, setIsPassword] = useState<boolean>(type === 'password');

  const {
    field: {onBlur, onChange, value},
    fieldState: {error},
  } = useController({
    control: control,
    name: name,
    defaultValue: defaultValue || '',
  });

  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <InputWrapper>
        {icon && (
          <IconWrapper>
            <Icon
              name={icon}
              size={30}
              color={error ? '#FF3333' : theme.helperText}
            />
          </IconWrapper>
        )}
        {type === 'password' && (
          <PasswordIcon onPress={() => setIsPassword(prev => !prev)}>
            <Icon name="eye" size={30} color={theme.helperText} />
          </PasswordIcon>
        )}
        <FieldText
          keyboardType={keyboard}
          icon={icon}
          multiline={type === 'textarea'}
          numberOfLines={type === 'textarea' ? 4 : 1}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          secureTextEntry={isPassword}
          nativeID={name}
          placeholder={placeholder || label}
        />
      </InputWrapper>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </FieldWrapper>
  );
};

export default TextInput;
