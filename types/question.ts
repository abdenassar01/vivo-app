import {Option} from './option';

export interface Question {
  text: string;
  textAr: string;
  image?: string;
  options: Option[];
}
