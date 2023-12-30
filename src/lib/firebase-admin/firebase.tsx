import * as admin from "firebase-admin";
import { initAdmin } from "./admin";
import { ResponseType } from "../../app/services/Auth";

export const updateUserPhoneNumber = async (
  id: string,
  phone: string
): Promise<ResponseType> => {
  await initAdmin();
  const auth = admin.auth();
  const newPhone = `+212${phone.slice(1)}`;

  return new Promise<ResponseType>(async (resolve) => {
    await auth
      .updateUser(id, {
        phoneNumber: newPhone,
        email: phone + process.env.EMAIL_SUFFIX,
      })
      .then(async () => {
        console.log("Phone number updated successfully!");
        resolve({ success: true });
      })
      .catch((err: any) => {
        console.error("Error updating phone number:", err);
        resolve({ success: false, error: err });
      });
  });
};

export const isUserRegistered = async (phone: string) => {
  await initAdmin();
  const auth = admin.auth();
  const phoneNumber = `+212${phone.slice(1)}`;

  try {
    const userRecord = await auth.getUserByPhoneNumber(phoneNumber);

    return !!userRecord;
  } catch (error: any) {
    if (error.code === "auth/user-not-found") {
      return false;
    }

    console.error("Error checking user registration:", error);
    throw error;
  }
};
