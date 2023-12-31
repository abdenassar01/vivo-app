import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

export type QuestionType = {
  arAnswers: string[];
  frAnswers: string[];
  ar: string;
  fr: string;
  correctAnswer: number;
};

export type QuizType = {
  id: string;
  points: number;
  ar: string;
  fr: string;
  questions: string[] | QuestionType[];
};

export const getQuizzes = async (pompisteId: string) => {
  try {
    let quizzes: any = [];
    let takenQuizzes: any = [];
    console.log("getQuizzes");

    await firestore()
      .collection("quizzes")
      .get()
      .then((querySnapshot) => {
        quizzes = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
      });

    await firestore()
      .collection("takenQuizzes")
      .where("pompisteId", "==", pompisteId)
      .get()
      .then((querySnapshot) => {
        takenQuizzes = querySnapshot.docs.map((doc) => doc.data().quizId);
      });

    const availableQuizzes = quizzes.filter(
      (q: any) => !takenQuizzes.includes(q.id)
    );

    return availableQuizzes;
  } catch (error) {
    throw error;
  }
};

export const getQuiz = async (id: string) => {
  let questions: any[] = [];
  let quiz: any;

  try {
    await firestore()
      .collection("quizzes")
      .doc(id)
      .get()
      .then(async (snapshot) => {
        quiz = snapshot.data() as QuizType;

        await Promise.all(
          await snapshot.data()?.questions.map(async (question: string) => {
            const questionDoc = await firestore()
              .collection("questions")
              .doc(question)
              .get();
            questions.push(questionDoc.data());
          })
        );
      });

    return { ...quiz, id, questions };
  } catch (error) {
    throw error;
  }
};

export const addQuiz = async (
  pompisteId: string,
  quizId: string,
  points: number
) => {
  const data = {
    pompisteId: pompisteId,
    quizId: quizId,
    date: firestore.FieldValue.serverTimestamp(),
  };

  try {
    const batch = firestore().batch();
    const quiz = await firestore().collection("takenQuizzes").add(data);

    const userRef = firestore().collection("pompistes").doc(pompisteId);
    batch.update(userRef, { points: points });

    await batch.commit();
    return quiz;
  } catch (error: any) {
    throw error.message;
  }
};
