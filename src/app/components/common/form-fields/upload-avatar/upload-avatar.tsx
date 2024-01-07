import React from "react";
import {
  Icon,
  UploadImageWrapper,
  UploadPressableWrapper,
  UploadWrapper,
} from "./upload-avatar.style";
import { useTheme } from "styled-components";
import ImagePicker from "react-native-image-crop-picker";
import { Swing } from "react-native-animated-spinkit";

type Props = {
  image: string;
  uploading: boolean;
  upload: (file: any) => Promise<void>;
};

const UploadAvatar = ({ image, upload, uploading }: Props) => {
  const theme = useTheme();

  const handleOpenImageLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      compressImageQuality: 0.5,
      cropping: true,
    }).then((photo) => {
      upload(photo.path);
    });
  };

  return (
    <UploadPressableWrapper onPress={handleOpenImageLibrary}>
      <UploadImageWrapper>
        {uploading ? (
          <Swing size={90} color={theme.primary} />
        ) : (
          <UploadWrapper
            imageStyle={{ borderRadius: 50 }}
            defaultSource={require("../../../../../assets/images/user.png")}
            source={
              image
                ? { uri: image }
                : require("../../../../../assets/images/user.png")
            }
          >
            <Icon source={require("../../../../../assets/icons/camera.png")} />
          </UploadWrapper>
        )}
      </UploadImageWrapper>
    </UploadPressableWrapper>
  );
};

export default UploadAvatar;
