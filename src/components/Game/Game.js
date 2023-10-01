import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import PastGuesses from '../PastGuesses'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import {checkGuess} from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [pastGuesses, setPastGuesses] = React.useState([]);

  const newGuess = (guess) => {
    const clone = [...pastGuesses];
    const parsed = checkGuess(guess, answer);
    setPastGuesses( [...pastGuesses, {guess:parsed, id:Math.random()}]);
    setGuess(guess);
  }

  return <>
    <PastGuesses 
      guesses={pastGuesses}
    />
    <Guess newGuess={newGuess} allow={NUM_OF_GUESSES_ALLOWED > (pastGuesses.length)} />
    {guess && ((guess === answer) ? 
      <h2>You Won with {guess}!</h2> :
      (pastGuesses.length >= 6) && <h2>You lost. Sorry! The word was {answer}</h2>
      ) 
    }
  </>;
}

export default Game;
