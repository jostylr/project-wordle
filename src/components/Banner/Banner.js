import React from 'react';

function Banner( {status, guesses, answer} ) {
   if (status === 0) {return '';}
   if (status === 1) {
    return (
    <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{guesses} guesses</strong>.
    </p>
  </div>
    )
   } else {
    return (<div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>)
   }
}

export default Banner;
