import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import PastGuesses from '../PastGuesses'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [pastGuesses, setPastGuesses] = React.useState([]);

  const newGuess = (guess) => {
    setPastGuesses( [...pastGuesses, {guess, id:Math.random()}]);
    setGuess(guess);
  }

  return <>
    <PastGuesses 
      guesses={pastGuesses}
    />
    <Guess newGuess={newGuess}/>
    {guess && ((guess === answer) ? 
      <h2>You Won with {guess}!</h2> : 
      <h2>Incorrect Guess: {guess}</h2>) }
  </>;
}

export default Game;
