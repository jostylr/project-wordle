import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import PastGuesses from '../PastGuesses';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import {checkGuess} from '../../game-helpers';

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

const newAnswer = () => {
  const answer = sample(WORDS);
  console.log(answer);
  return answer;
};

function Game() {
  const [guess, setGuess] = React.useState('');
  const [pastGuesses, setPastGuesses] = React.useState([]);
  const [end, setEnd] = React.useState(0);
  const [answer, setAnswer] = React.useState(newAnswer)

  const newGuess = (guess) => {
    const parsed = checkGuess(guess, answer);
    const clone = [...pastGuesses, {guess:parsed, id:Math.random()}];
    setPastGuesses( clone);
    setGuess(guess);
    setEnd( (guess === answer) ? 1 : ( clone.length < NUM_OF_GUESSES_ALLOWED) ? 0 : -1);
  }

  return <>
    <PastGuesses 
      guesses={pastGuesses}
    />
    <Guess newGuess={newGuess} allow={end===0} />
    {(end !== 0) && <button onClick={()=> {
        setAnswer(newAnswer())
        setEnd(0);
        setPastGuesses([]);
      }}
        >Restart</button>}
    <Banner status={end} guesses={pastGuesses.length} answer={answer} />
  </>;
}

export default Game;
