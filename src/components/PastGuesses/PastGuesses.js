import React from 'react';

function PastGuesses({guesses}) {
  console.log(guesses);
  return <div className="guess-results">
    {guesses.map( ({guess, id}) => (
      <p className="guess" key={id}>{guess}</p>
    ))
    
  }

  </div>;
}

export default PastGuesses;
