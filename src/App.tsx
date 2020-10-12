import React from 'react';
import './styles/global.css'

interface TitleProps {
  text: string,
}

function Title (props : TitleProps) {
  return (
  <h1>{props.text}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Title text="Next Level Week #3" />
      <Title text="Trilha Omnistack" />
    </div>
  );
}

export default App;
