"use client";

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  writeBatch,
  serverTimestamp,
  addDoc,
  FirestoreError,
} from "firebase/firestore/lite";
import { app } from "../../utils/firebase";

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

const db = getFirestore(app);

export const getQuizzes = async (pompisteId: string) => {
  const col = collection(db, "quizzes");
  const colTaken = collection(db, "takenQuizzes");
  const q = query(colTaken, where("pompisteId", "==", pompisteId));

  const querySnapshot = await getDocs(q);
  const takenQuizzes = querySnapshot.docs.map((doc) => doc.data().quizId);

  try {
    const snapshot = await getDocs(col);
    const quizzes = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const availableQuizzes = quizzes.filter(
      (q) => !takenQuizzes.includes(q.id)
    );

    return availableQuizzes;
  } catch (error) {
    throw error;
  }
};

export const getQuizzesWithDetails = async (pompisteId: string) => {
  const col = collection(db, "quizzes");
  const colTaken = collection(db, "takenQuizzes");
  const q = query(colTaken, where("pompisteId", "==", pompisteId));

  const querySnapshot = await getDocs(q);
  const takenQuizzes = querySnapshot.docs.map((doc) => doc.data().quizId);

  try {
    const snapshot = await getDocs(col);
    const quizzes = await Promise.all(
      snapshot.docs.map(async (quizDoc) => {
        const item: QuizType = quizDoc.data() as QuizType;

        const questionsDetails = await Promise.all(
          item.questions.map(async (question) => {
            const ref = doc(db, "questions", question as string);
            const questionDoc = await getDoc(ref);
            const data = questionDoc.data() as QuestionType;
            return { ...data };
          })
        );
        return { ...item, id: quizDoc.id, questions: questionsDetails };
      })
    );
    const availableQuizzes = quizzes.filter(
      (q) => !takenQuizzes.includes(q.id)
    );

    return availableQuizzes;
  } catch (error) {
    throw error;
  }
};

export const getQuiz = async (id: string) => {
  const quizRef = doc(db, "quizzes", id);

  try {
    const quizDoc = await getDoc(quizRef);
    const quiz = quizDoc.data() as QuizType;

    const questionsDetails = await Promise.all(
      quiz.questions.map(async (question) => {
        const ref = doc(db, "questions", question as string);
        const questionDoc = await getDoc(ref);
        const data = questionDoc.data() as QuestionType;
        return { ...data };
      })
    );

    return { ...quiz, id: quizDoc.id, questions: questionsDetails };
  } catch (error) {
    throw error;
  }
};

export const addQuiz = async (
  pompisteId: string,
  quizId: string,
  points: number
) => {
  const ref = collection(db, "takenQuizzes");
  const userRef = doc(db, "pompistes", pompisteId);
  const batch = writeBatch(db);

  const data = {
    pompisteId: pompisteId,
    quizId: quizId,
    date: serverTimestamp(),
  };

  try {
    const transferDocRef = await addDoc(ref, data);
    batch.update(userRef, { points: points });
    await batch.commit();

    return transferDocRef;
  } catch (error: any) {
    throw (error as FirestoreError).message;
  }
};
