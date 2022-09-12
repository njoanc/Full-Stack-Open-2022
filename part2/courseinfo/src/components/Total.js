import React from 'react';

function Total({ sum }) {
  return (
    <p>
      <strong>
        The total sum of exercises is {' '}
        {sum}
        {' '}
        exercises
      </strong>
    </p>
  );
}

export default Total;
