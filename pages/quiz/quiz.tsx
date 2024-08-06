import React from 'react';
import { Question } from '~/components/question';

interface QuestionData {
    question: string;
    answers: string[];
    values: number[];
    i: number
  }

const questions: QuestionData[] = [
    {
      question: "D1. Sei in starvation di cibo. Le tue uniche opzioni sono per mangiare sono una banana e un piatto di spaghetti. Cosa scegli per garantire di rimanere vivo?",
      answers: ["BANANA? BANANANANA! Monkey noises", "Sono umano! Ho avuto un evoluzione! Spaghetti!", "Muore di fame"],
      values: [2, 1, 0],
      i: 1
    },
    {
        question: "D2.Sei favorevole all'industrializzazione dell'umanità?",
        answers: ["IO? INDUSTRIA? MACCHINE? ANDIAMO A CACCIARE LE FORMICHE INVECE COME LA NATURA VUOLE!", "Il progresso tecnologico è la chiave per andare avanti."],
        values: [2, 0],
        i: 2
      },
      {
        question: "D3.Come è organizzata la società?",
        answers: ["Tribu'. Scimmia alpha commanda. Si lotta a mani nude nelle elezioni", "Presidente della repubblica", "Communismo"],
        values: [2, 0, 1],
        i: 3
      },

];

function Quiz()
{
    return (
        <div>
        {questions.map((q, index) => (
        <Question question={q.question}
        answers={q.answers}
        values={q.values}
        index={q.i}
        />
      ))}
        </div>
    );
}