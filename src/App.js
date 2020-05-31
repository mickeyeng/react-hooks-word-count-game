import React, {useState, useEffect, useRef} from 'react';
import {useGameLogic} from './hooks/useGameLogic';
import './App.css';

const App = () => {  
  const {
    textareaRef,
    isTimeRunning,
    text,
    onTextChange,
    timeRemaining,
    startGame,
    wordCount
  } = useGameLogic(10)
  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea ref={textareaRef} placeholder="Start typing!!" disabled={!isTimeRunning} value={text} onChange={onTextChange}  />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame} >Start</button>
      <h1>Word count: {wordCount} </h1>
    </div>
  )
}



export default App;
