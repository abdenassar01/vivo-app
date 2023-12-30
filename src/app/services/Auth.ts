import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
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
          isApproved: false,
          points: 0,
          userEmail: data?.email || "",
          qrId: generateId(data.phone || ""),
        };

        await firestore()
          .collection("pompistes")
          .doc(cred.user.uid)
          .set({ obj });

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
};

//** Update Reseted Password **//
export const resetPassword = async (
  password: string
): Promise<ResponseType> => {
  return new Promise<ResponseType>(async (resolve) => {
    await auth()
      .currentUser?.updatePassword(password)
      .then(() => {
        resolve({ success: true });
      })
      .catch((err) => {
        resolve({ success: false, error: err.message });
      });
  });
};

//** Update User Data **//
export const updateUserData = async (data: User): Promise<ResponseType> => {
  console.log(data);
  const email = data.phone + process.env.NEXT_PUBLIC_EMAIL_SUFFIX!;

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
