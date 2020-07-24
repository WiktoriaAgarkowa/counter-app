import React from 'react';
import './App.css';
import Counter from './Counter'



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="App-title">Counter ReactJS</h1>
      </header>
      <Counter initValue={0} />
      <Counter initValue={15}/>
    </div>
    
  );
}

export default App;
