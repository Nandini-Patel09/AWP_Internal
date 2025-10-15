
import React from 'react';

function DisplayProps(props) {
  return (
    <div style={{ textAlign: 'center', backgroundColor: 'skyblue', padding: '10px', margin: '10px' }}>
      <h1>Name: {props.name}</h1>
      <h1>Rollno: {props.rollno}</h1>
    </div>
  );
}
export default DisplayProps;