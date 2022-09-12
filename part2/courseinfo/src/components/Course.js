import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

function Course({ course }) {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts.reduce((sum, p) => sum + p.exercises, 0)} />
    </>
  );
}
export default Course;
