import React, { useState } from "react";
import {
  ErrorMessage,
  FieldWrapper,
  Icon,
  InputWrapper,
  Label,
  ValueText,
} from "./file-picker.style";
import DocumentPicker from "react-native-document-picker";
import { t } from "i18next";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  image: string;
  uploading: boolean;
  upload: (file: any) => Promise<void>;
};

const FilePickerInput = ({
  label,
  name,
  placeholder,
  image,
  uploading,
  upload,
}: Props) => {
  const [fileName, setFileName] = useState("");
  const handlePickDocument = () => {
    DocumentPicker.pick({
      allowMultiSelection: false,
      transitionStyle: "partialCurl",
    }).then((file) => {
      setFileName(file[0].name || "");
      upload(file[0]);
    });
  };

  return (
    <FieldWrapper>
      <Label>{label}</Label>
      <InputWrapper onPress={handlePickDocument}>
        <ValueText>
          {image && !uploading
            ? fileName
            : !image && !uploading
            ? placeholder
            : t("uploading")}
        </ValueText>
        <Icon source={require("../../../../../assets/icons/file-upload.png")} />
      </InputWrapper>
    </FieldWrapper>
  );
};

export default FilePickerInput;
