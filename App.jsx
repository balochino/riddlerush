
import React, { useState } from 'react';

const App = () => {
  const [answer, setAnswer] = useState('');

  const riddle = {
    question: 'I have a neck, but no head. I have two arms, but no hands. What am I?',
    options: ['A shirt', 'A bottle', 'A person'],
    correctAnswer: 'A shirt',
  };

  const checkAnswer = (choice) => {
    if (choice === riddle.correctAnswer) {
      setAnswer('Correct!');
    } else {
      setAnswer('Try again!');
    }
  };

  return (
    <div>
      <h1>{riddle.question}</h1>
      {riddle.options.map((option, index) => (
        <button key={index} onClick={() => checkAnswer(option)}>
          {option}
        </button>
      ))}
      <p>{answer}</p>
    </div>
  );
};

export default App;
