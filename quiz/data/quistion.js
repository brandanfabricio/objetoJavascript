import { Question } from "../model/quistion.js";
import { data } from './data.js';


export const queston = data.map(question => new Question(question.question, question.choices, question.answer))

