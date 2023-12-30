import React, { useState } from "react";
import {
  ErrorMessage,
  EyeIcon,
  FieldText,
  FieldWrapper,
  InputWrapper,
  Label,
  PasswordIcon,
} from "./CustomInput.style";
import { KeyboardTypeOptions } from "react-native";
import { useField } from "formik";

type Props = {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
  value?: any;
  keyboard?: KeyboardTypeOptions;
  onChange?: ((e?: any) => void) | undefined;
  onBlur?: ((e?: any) => void) | undefined;
};

const CustomInput = ({
  label,
  id,
  placeholder,
  type,
  defaultValue,
  keyboard,
  ...props
}: Props) => {
  const [isPassword, setIsPassword] = useState<boolean>(type === "password");
  const [field, meta, helpers] = useField(id);

  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <InputWrapper>
        {type === "password" && (
          <PasswordIcon onPress={() => setIsPassword((prev) => !prev)}>
            {isPassword ? (
              <EyeIcon
                source={require("../../../../../assets/icons/view.png")}
              />
            ) : (
              <EyeIcon
                source={require("../../../../../assets/icons/hidden.png")}
              />
            )}
          </PasswordIcon>
        )}
        <FieldText
          keyboardType={keyboard}
          multiline={type === "textarea"}
          numberOfLines={type === "textarea" ? 4 : 1}
          secureTextEntry={isPassword}
          nativeID={id}
          placeholder={defaultValue || placeholder || label}
          value={field.value}
          onBlur={() => helpers.setTouched(!meta.touched)}
          onChangeText={helpers.setValue}
        />
      </InputWrapper>
      {meta?.error && <ErrorMessage>{meta?.error}</ErrorMessage>}
    </FieldWrapper>
  );
};

export default CustomInput;
