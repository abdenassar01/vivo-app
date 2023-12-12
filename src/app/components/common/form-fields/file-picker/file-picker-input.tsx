import React from 'react';
import {Control, useController} from 'react-hook-form';
import {
  ErrorMessage,
  FieldWrapper,
  Icon,
  InputWrapper,
  Label,
  ValueText,
} from './file-picker.style';
import DocumentPicker from 'react-native-document-picker';

type Props = {
  label: string;
  name: string;
  control: Control<any>;
  placeholder?: string;
  defaultValue?: string;
};

const FilePickerInput = ({
  label,
  name,
  placeholder,
  control,
  defaultValue,
}: Props) => {
  const {
    field: {onChange, value},
    fieldState: {error},
  } = useController({
    control: control,
    name: name,
    defaultValue: defaultValue,
  });

  const handlePickDocument = () => {
    DocumentPicker.pick({
      allowMultiSelection: false,
      transitionStyle: 'partialCurl',
    }).then(file => {
      onChange(file[0]);
    });
  };

  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <InputWrapper onPress={handlePickDocument}>
        <ValueText>{value ? value.name : placeholder}</ValueText>
        <Icon source={require('../../../../../assets/icons/file-upload.png')} />
      </InputWrapper>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </FieldWrapper>
  );
};

export default FilePickerInput;
