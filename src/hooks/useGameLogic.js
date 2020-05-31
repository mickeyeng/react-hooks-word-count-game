import {useState, useEffect, useRef} from 'react'


export const useGameLogic = (GAME_TIME = 5) => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState();
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef(null);
  const onTextChange = (e) => {
     const {value} = e.target
     setText(value);
  }

  const startGame = () => {
    setIsTimeRunning(true)
    setTimeRemaining(GAME_TIME)
    setText("")
    textareaRef.current.disabled = false
    textareaRef.current.focus()
  }

  const endGame = () => {
      setIsTimeRunning(false)
      const numOfWords = calculateWordCount(text)
      setWordCount(numOfWords)
  }
  
  const calculateWordCount = (word) => {
    const wordArr = text.trim().split(" ");
    const filteredWords = wordArr.filter((word) => word !== "")
    return filteredWords.length
  }
  
  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if(timeRemaining === 0 ) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning])
  
  return {
    textareaRef,
    isTimeRunning,
    text,
    onTextChange,
    timeRemaining,
    startGame,
    wordCount,
  }
}