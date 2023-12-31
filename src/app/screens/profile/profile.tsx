import React, { useRef } from "react";
import { AppWrapper } from "../../../utils/shared-styles";
import Header from "../../components/core/header/header";
import {
  CentredContent,
  ProfileWrapper,
  UpdatePasswordLink,
  UpdatePasswordText,
} from "./profile.style";
import { t } from "i18next";
import Button from "../../components/common/form-fields/button/button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import UploadAvatar from "../../components/common/form-fields/upload-avatar/upload-avatar";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { UserAuth } from "../../contexts/AuthContext";
import { User } from "../../../../types/user";
import { Alert } from "react-native";
import { updateUserData } from "../../services/Auth";
import auth from "@react-native-firebase/auth";
import CustomInput from "../../components/common/form-fields/custom-input/CustomInput";
import {
  isUserRegistered,
  UploadImage,
  updateUserPhone,
  CheckPasswordMatch,
} from "../../services/Auth";

type FormProps = {
  fullname: string;
  phone: string;
  email: string;
  otp: string;
  password: string;
};
const Profile = () => {
  const [avatar, setAvatar] = useState(
    "https://i.ibb.co/fxtKBnQ/upload-avatar.png"
  );
  const [avatarUploading, setAvatarUploading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [verification, setVerification] = useState("");
  const { user, setUser } = UserAuth();
  const navigation = useNavigation<StackNavigationProp<any>>();
  let formikProps: FormikProps<FormProps>;

  const uploadAvatar = async (file: any) => {
    if (!file) return;

    setAvatarUploading(true);
    const avatarUrl = await UploadImage(file, "avatars");
    console.log(avatarUrl);
    setAvatar(avatarUrl);
    setAvatarUploading(false);
  };

  const requestOtp = async (phone: string) => {
    console.log("requestOtp");
    const newPhone = `+212${phone.slice(1)}`;

    try {
      auth()
        .verifyPhoneNumber(newPhone)
        .on("state_changed", async (phoneAuthSnapshot) => {
          console.log("Snapshot state: ", phoneAuthSnapshot.state);
          console.log("Error: ", phoneAuthSnapshot.error);

          if (phoneAuthSnapshot.state === "sent") {
            setOtpSent(true);
            setVerification(phoneAuthSnapshot?.verificationId);
            console.log(phoneAuthSnapshot?.verificationId);
          }
        });
    } catch (error) {
      console.log(error);
      Alert.alert("An Error Occured!");
    }
  };

  const verifyOtp = async (data: User) => {
    try {
      const res1 = await CheckPasswordMatch(data.password || "");

      if (!res1.success) {
        Alert.alert("Invalid Password!");
        return;
      }

      const credential = auth.PhoneAuthProvider.credential(
        verification,
        data.otp
      );

      console.log("verified");
      const res = await updateUserPhone(
        credential,
        data.phone || "",
        data.password || ""
      );
      setOtpSent(false);

      if (res.success) {
        console.log("Phone Updated Succesfully!");
        UpdateUserInformations(data);
      } else {
        Alert.alert(res.error);
        return;
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Code Invalide!");
    }
  };

  const submitUpdate = async (data: User) => {
    if (data.phone != user?.phone) {
      const isRegistred = await isUserRegistered(data.phone || "");
      try {
        if (!isRegistred) await requestOtp(data.phone || "");
        else Alert.alert("User Already Registred!");
      } catch (error) {
        console.log(error);
        Alert.alert("An Error Occured!");
      }
      return;
    }

    UpdateUserInformations(data);
  };

  const UpdateUserInformations = async (data: User) => {
    const res2 = await updateUserData({
      ...data,
      avatar,
      phone: data?.phone || "",
      id: user?.id,
    });
    if (res2.success) {
      setUser({ ...user, ...res2.data });
      console.log("User Updated Succesfully!");
      navigation.navigate("Home");
    } else Alert.alert(res2.error);
  };

  useEffect(() => {
    if (user?.avatar) setAvatar(user.avatar);
  }, []);

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener("focus", () => {});
    const unsubscribeBlur = navigation.addListener("blur", () => {
      formikProps?.resetForm();
      setOtpSent(false);
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  });

  return (
    <AppWrapper>
      <Header openDrower />
      <ProfileWrapper
        contentContainerStyle={{
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Formik
          initialValues={{
            fullname: user?.fullname || "",
            phone: user?.phone || "",
            email: user?.userEmail || "",
            otp: "",
            password: "",
          }}
          validationSchema={Yup.object({
            phone: Yup.string()
              .matches(/^0[5-9]\d{8}$/, t("phone-invalid"))
              .required(t("phone-required")),
            email: Yup.string().email(t("email-invalid")),
            fullname: Yup.string()
              .matches(/^[a-zA-Z\u0600-\u06FF\s]+$/, t("fullname-required"))
              .required(t("fullname-required")),
            otp: otpSent
              ? Yup.string()
                  .matches(/^\d{6}$/, t("otp-invalid"))
                  .required(t("otp-required"))
              : Yup.string(),
            password: otpSent
              ? Yup.string()
                  .min(8, t("password-invalid"))
                  .required(t("password-required"))
              : Yup.string(),
          })}
          innerRef={(formik) => {
            formikProps = formik as FormikProps<FormProps>;
          }}
          onSubmit={async (data, { setSubmitting }) => {
            if (
              data.phone == user?.phone &&
              data.email == user?.userEmail &&
              data.fullname == user?.fullname &&
              avatar == user?.avatar
            )
              return;
            setSubmitting(true);
            submitUpdate(data);
            setSubmitting(false);
          }}
        >
          {({ handleSubmit, isSubmitting, values, errors }) => (
            <CentredContent>
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
                id="email"
                label={t("email-input-text")}
                placeholder={t("email-input-text")}
              />
              <CustomInput
                id="phone"
                label={t("phone-input-text")}
                placeholder={t("phone-input-text")}
              />
              {otpSent && (
                <>
                  <CustomInput id="otp" label="otp" placeholder="000000" />
                  <CustomInput
                    id="password"
                    type="password"
                    label={t("password-input-text")}
                    placeholder={t("password-input-text")}
                  />
                  <Button
                    onPress={() => !errors.otp && verifyOtp(values)}
                    text="Vérification"
                    disabled={isSubmitting}
                  />
                </>
              )}
              <UpdatePasswordLink
                onPress={() => navigation.navigate("ResetPassword")}
              >
                <UpdatePasswordText>
                  {t("update-password-label")}
                </UpdatePasswordText>
              </UpdatePasswordLink>
              {!otpSent && (
                <Button
                  onPress={handleSubmit}
                  text={t("update-button-text")}
                  disabled={isSubmitting}
                />
              )}
            </CentredContent>
          )}
        </Formik>
      </ProfileWrapper>
    </AppWrapper>
  );
};

export default Profile;
