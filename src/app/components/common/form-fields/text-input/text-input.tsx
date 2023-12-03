import React, {useState} from 'react';
import {
  ErrorMessage,
  EyeIcon,
  FieldText,
  FieldWrapper,
  InputWrapper,
  Label,
  PasswordIcon,
} from './text-input.style';
import {Control, useController} from 'react-hook-form';
import {KeyboardTypeOptions} from 'react-native';

type Props = {
  label: string;
  name: string;
  control: Control<any>;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
  keyboard?: KeyboardTypeOptions;
};

const TextInput = ({
  label,
  name,
  placeholder,
  type,
  control,
  defaultValue,
  keyboard,
}: Props) => {
  const [isPassword, setIsPassword] = useState<boolean>(type === 'password');

  const {
    field: {onBlur, onChange, value},
    fieldState: {error},
  } = useController({
    control: control,
    name: name,
    defaultValue: defaultValue,
  });

  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <InputWrapper>
        {type === 'password' && value !== '' && (
          <PasswordIcon onPress={() => setIsPassword(prev => !prev)}>
            {isPassword ? (
              <EyeIcon
                source={require('../../../../../assets/icons/view.png')}
              />
            ) : (
              <EyeIcon
                source={require('../../../../../assets/icons/hidden.png')}
              />
            )}
          </PasswordIcon>
        )}
        <FieldText
          keyboardType={keyboard}
          multiline={type === 'textarea'}
          numberOfLines={type === 'textarea' ? 4 : 1}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          secureTextEntry={isPassword}
          nativeID={name}
          placeholder={defaultValue || placeholder || label}
        />
      </InputWrapper>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </FieldWrapper>
  );
};

export default TextInput;
