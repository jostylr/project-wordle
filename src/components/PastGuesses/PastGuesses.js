import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

const blanks = Array(NUM_OF_GUESSES_ALLOWED).fill('').map( (el, ind) => (
  {guess: '     ', id:ind, blank:true} 
))

console.log(blanks);


function PastGuesses({guesses}) {

  const rows = blanks.map( (el, ind) => guesses[ind] || el);
  
  console.log(rows);

  return <div className="guess-results">
    {rows.map( ({guess, id, blank=false}) => (
      <p className="guess" key={id}>
        {blank ? 
        guess.split('').map( (letter, ind) => (
            <span className="cell" key={ind}>{letter}</span>
        ))
        : guess.map( ({letter, status}, ind ) => (
          <span className={"cell " + status} key={ind} >{letter}</span>
        ))
       }  
      </p>
    ))}

  </div>;
}

export default PastGuesses;
