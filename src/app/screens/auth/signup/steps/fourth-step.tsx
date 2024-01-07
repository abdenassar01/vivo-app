import FilePickerInput from "../../../../components/common/form-fields/file-picker/file-picker-input";
import UploadAvatar from "../../../../components/common/form-fields/upload-avatar/upload-avatar";
import { useState } from "react";
import { t } from "i18next";
import CustomInput from "../../../../components/common/form-fields/custom-input/CustomInput";
import storage from "@react-native-firebase/storage";
import { UploadImage } from "../../../../services/Auth";

type Props = {
  avatar: string;
  cinPhoto: string;
  setAvatar: (avatar: string) => void;
  setCinPhoto: (cinPhoto: string) => void;
};

function FourthStep({ avatar, setAvatar, cinPhoto, setCinPhoto }: Props) {
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [cinUploading, setCinUploading] = useState(false);

  const uploadAvatar = async (file: any) => {
    if (!file) return;

    setAvatarUploading(true);
    const avatarUrl = await UploadImage(file, "avatars");
    console.log(avatarUrl);
    setAvatar(avatarUrl);
    setAvatarUploading(false);
  };

  const uploadCinPhoto = async (file: any) => {
    if (!file) return;

    setCinUploading(true);
    const cinUrl = await UploadImage(file, "cin");
    console.log(cinUrl);
    setCinPhoto(cinUrl);
    setCinUploading(false);
  };

  return (
    <>
      <UploadAvatar
        image={avatar}
        uploading={avatarUploading}
        upload={uploadAvatar}
      />
      <CustomInput
        id="fullname"
        label={t("fullname-input-text")}
        placeholder={t("fullname-input-text")}
      />
      <CustomInput
        id="cin"
        label={t("cni-input-text")}
        placeholder={t("cni-input-text")}
      />
      <FilePickerInput
        name="cniFile"
        label={t("cni-file-upload-text")}
        placeholder={t("cni-input-text")}
        image={cinPhoto}
        uploading={cinUploading}
        upload={uploadCinPhoto}
      />
    </>
  );
}

export default FourthStep;
