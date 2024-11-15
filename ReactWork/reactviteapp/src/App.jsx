// import React from 'react';
import Student from './student';
import './student.css';

function App() {
  let a = 21;
  const myStyle = {
    backgroundColor: 'skyblue',
    color: 'green'
  };

  return (
    <div>
      <div style={myStyle}>ABES EC</div>
      <div style={myStyle}>{a}</div>
      <div style={myStyle}>
        <Student />
      </div>
    </div>
  );
}

export default App;
