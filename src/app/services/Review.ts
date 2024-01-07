import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

export type Review = {
  clientId: string;
  pompisteId: string;
  date?: FirebaseFirestoreTypes.Timestamp;
  points: number;
  review: number;
};

export const getReviews = async (pompisteId: string, lim?: number) => {
  let reviews: Review[] = [];
  try {
    await firestore()
      .collection("reviews")
      .where("pompisteId", "==", pompisteId)
      .orderBy("date", "desc")
      .limit(lim || 1000)
      .get()
      .then((querySnapshot) => {
        reviews = querySnapshot.docs.map((doc) => ({
          ...(doc.data() as Review),
        }));
      });
    return reviews;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
