import React from 'react';

function Guess( {newGuess} ) {
  const [input, setInput] = React.useState('')
  return <form className="guess-input-wrapper"
    onSubmit={ (ev)=> {
      ev.preventDefault();
      newGuess(input);
      setInput('');
    }
    }
  >
    <label htmlFor="guess-input">Enter guess: (exactly 5 letters)</label>
    <input id="guess-input" type="text"
      pattern="([a-z]|[A-Z]){5}"
      value={input}
      onChange={(ev) => {
        setInput(ev.target.value.toUpperCase());
      }}
    />
  </form>;
}

export default Guess;
