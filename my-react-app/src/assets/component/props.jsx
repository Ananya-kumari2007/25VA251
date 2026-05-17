import React from 'react';

function PropsExample(props) {
  return (
    <div>
      <h1>Student Details</h1>
      <h2>{props.name}</h2>
      <h2>{props.roll}</h2>
      <h2>{props.course}</h2>
    </div>
  );
}

export default PropsExample;
