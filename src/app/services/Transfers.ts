import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

export type Transfer = {
  id: number;
  pompisteId: string;
  date: FirebaseFirestoreTypes.Timestamp;
  points: number;
  total: number;
  status: boolean;
};

export const getTransfers = async (pompisteId: string, lim?: number) => {
  let transfers: Transfer[] = [];
  let index: number = 0;

  try {
    await firestore()
      .collection("transfers")
      .where("pompisteId", "==", pompisteId)
      .orderBy("date", "desc")
      .limit(lim || 1000)
      .get()
      .then((querySnapshot) => {
        transfers = querySnapshot.docs.map(
          (doc) =>
            ({
              id: querySnapshot.size - index++,
              ...doc.data(),
            } as Transfer)
        );
      });
    return transfers;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const addTransfer = async (
  pompisteId: string,
  points: number,
  total: number
) => {
  const data = {
    pompisteId: pompisteId,
    points: points,
    total: total,
    status: true,
    date: firestore.FieldValue.serverTimestamp(),
  };

  try {
    const batch = firestore().batch();
    const transfer = await firestore().collection("transfers").add(data);

    const userRef = firestore().collection("pompistes").doc(pompisteId);
    batch.update(userRef, { points: 0 });

    await batch.commit();
    return transfer;
  } catch (error: any) {
    throw error?.message;
  }
};
