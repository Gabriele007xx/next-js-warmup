import React from 'react';

interface QuestionProps {
    question: string;
    answers: string[];
    values: number[];
    index: number;
  }

function Question({question, answers,values, index}: QuestionProps) {
   return (<div>
        <span>{question}</span>
        {answers.map((el, i) =>
        (
            <label>
          <input type="radio" name={`"q${index}"`} value={`"${values[i]}"`}/>
          {el}
        </label>
        )
        
            )}
        </div>);
        }

export {Question};

