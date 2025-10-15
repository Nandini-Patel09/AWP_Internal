import React from "react";
class DisplayProps1 extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center', backgroundColor: 'skyblue', padding: '10px', margin: '10px' }}>
        <h1>Name: {this.props.name}</h1>
        <h1>Rollno: {this.props.rollno}</h1>
      </div>
    );
  }
}

export default DisplayProps1;