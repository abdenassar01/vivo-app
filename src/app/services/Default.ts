import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

export type Default = {
  clientPoints: number;
  moneyPerPoint: number;
  pointPerReview: number;
};

export const getDefaults = async () => {
  let defaults: Default[] = [];
  try {
    await firestore()
      .collection("defaults")
      .get()
      .then((querySnapshot) => {
        defaults = querySnapshot.docs.map((doc) => ({
          ...(doc.data() as Default),
        }));
      });
    return defaults;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
