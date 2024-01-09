import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import storage from "@react-native-firebase/storage";
import { User } from "../../../types/user";
import { EMAIL_SUFFIX } from "@env";

export type ResponseType =
  | { success: true; data?: any }
  | { success: false; error: string };

export function generateId(phone: string) {
  return phone.substring(1).split("").reverse().join("");
}

//** Sign Up User To Database **//
export const signup = async (data: User): Promise<ResponseType> => {
  const email = data.phone + EMAIL_SUFFIX;
  const credential = auth.EmailAuthProvider.credential(
    email || "",
    data.password || ""
  );

  return new Promise<ResponseType>(async (resolve) => {
    await auth()
      .currentUser?.linkWithCredential(credential)
      .then(async (cred) => {
        const obj = {
          phone: data.phone || "",
          email: email || "",
          fullname: data.fullname,
          cin: data.cin,
          avatar: data.avatar,
          cinPhoto: data.cinPhoto,
          status: false,
          points: 0,
          userEmail: data?.email || "",
          qrId: generateId(data.phone || ""),
        };

        await firestore().collection("pompistes").doc(cred.user.uid).set(obj);

        resolve({ success: true, data: { ...obj, id: cred.user.uid } });
      })
      .catch((err) => {
        console.log(err.message);
        resolve({ success: false, error: err.message });
      });
  });
};

//** Sign In User To App **//
export const signIn = (
  phone: string,
  password: string
): Promise<ResponseType> => {
  const email = phone + EMAIL_SUFFIX;

  console.log(email);
  return new Promise<ResponseType>(async (resolve) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (cred) => {
        resolve({ success: true, data: cred.user });
      })
      .catch((err) => {
        console.log(err.message);
        resolve({ success: false, error: err.message });
      });
  });
};

//** Sign Out User From App **//
export const logout = async () => {
  await auth().signOut();
  console.log("signOut");
};

//** Update Reseted Password **//
export const resetPassword = async (
  password: string
): Promise<ResponseType> => {
  console.log("reset password");
  const email = auth().currentUser?.email;

  return new Promise<ResponseType>(async (resolve) => {
    await auth()
      .currentUser?.updatePassword(password)
      .then(async () => {
        await logout();

        await auth()
          .signInWithEmailAndPassword(email || "", password)
          .then(async (cred) => {
            console.log("Looged in");
            resolve({ success: true, data: cred.user });
          });
      })
      .catch((err) => {
        console.log("err", err);
        resolve({ success: false, error: err.message });
      });
  });
};

//** Update User Data **//
export const updateUserData = async (data: User): Promise<ResponseType> => {
  console.log(data);
  const email = data.phone + EMAIL_SUFFIX;

  return new Promise<ResponseType>(async (resolve) => {
    const id = data.id || "";
    const obj = {
      phone: data.phone,
      userEmail: data.email || "",
      email: email,
      fullname: data.fullname,
      avatar: data.avatar,
    };

    firestore()
      .collection("pompistes")
      .doc(id)
      .update(obj)
      .then(() => {
        resolve({ success: true, data: { ...obj } });
      })
      .catch((err) => {
        console.log(err.message);
        resolve({ success: false, error: err.message });
      });
  });
};

//** Update User Phone **//
export const updateUserPhone = async (
  creds: any,
  phone: string,
  password: string
): Promise<ResponseType> => {
  const email = phone + EMAIL_SUFFIX;
  console.log("updateUser");

  const credential = auth.EmailAuthProvider.credential(
    email || "",
    password || ""
  );

  return new Promise<ResponseType>(async (resolve) => {
    await auth()
      .currentUser?.updatePhoneNumber(creds)
      .then(async () => {
        console.log("Here");
        await auth().currentUser?.unlink("password");
        await auth()
          .currentUser?.linkWithCredential(credential)
          .then(async () => {
            resolve({ success: true });
          });
      })
      .catch((err) => {
        console.log(err);
        resolve({ success: false, error: err.message });
      });
  });
};

//** Check If User Is Registred **//
export const isUserRegistered = async (phone: string) => {
  const snapshot = firestore()
    .collection("pompistes")
    .where("phone", "==", phone)
    .get();

  return !(await snapshot).empty;
};

//** Upload User Images **//
export const UploadImage = async (file: any, path: string) => {
  const reference = storage().ref(`${path}/${file.name}`);
  await reference.putFile(file);
  const avatarUrl = await reference.getDownloadURL();
  return avatarUrl;
};

//**Check If The User Password Is Correct **//
export const CheckPasswordMatch = async (
  password: string
): Promise<ResponseType> => {
  const current = auth().currentUser;
  const credential = auth.EmailAuthProvider.credential(
    current?.email || "",
    password
  );

  return new Promise<ResponseType>(async (resolve) => {
    await current
      ?.reauthenticateWithCredential(credential)
      .then(() => {
        resolve({ success: true });
      })
      .catch((err) => {
        console.log(err.message);
        resolve({ success: false, error: err.message });
      });
  });
};
