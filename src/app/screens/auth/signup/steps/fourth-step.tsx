import FilePickerInput from "../../../../components/common/form-fields/file-picker/file-picker-input";
import UploadAvatar from "../../../../components/common/form-fields/upload-avatar/upload-avatar";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
// import { storage } from "../../../../../utils/firebase";
import { SignUpStep } from "../../auth.style";
import { t } from "i18next";
import CustomInput from "../../../../components/common/form-fields/custom-input/CustomInput";

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

    // setAvatarUploading(true);
    // const storageRef = ref(storage, `avatars/${file.name}`);
    // await uploadBytes(storageRef, file);
    // const avatarUrl = await getDownloadURL(storageRef);
    // console.log("File uploaded successfully", avatarUrl);
    // setAvatar(avatarUrl);
    // setAvatarUploading(false);
  };

  const uploadCinPhoto = async (file: any) => {
    if (!file) return;

    // setCinUploading(true);
    // const storageRef = ref(storage, `cin/${file.name}`);
    // await uploadBytes(storageRef, file);
    // const avatarUrl = await getDownloadURL(storageRef);
    // console.log("File uploaded successfully", avatarUrl);
    // setCinPhoto(avatarUrl);
    // setCinUploading(false);
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
