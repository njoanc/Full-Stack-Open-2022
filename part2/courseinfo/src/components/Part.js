import React from 'react';

function Part({ name, exercises }) {
  return (
    <li>
      {name}
      {' '}
      {exercises}
    </li>
  );
}

export default Part;
