export type Question = {
  arAnswers: string[];
  fr: string;
  correctAnswer: number;
  frAnswers: string[];
  ar: string;
};

export type Quiz = {
  points: number;
  fr: string;
  questions: Question[];
  ar: string;
  id: string;
  thumbnail?: string;
};
