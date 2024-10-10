import React, { useEffect, useState } from "react";
import '../App.css'

const TypeEffect = ({
  words = [" Frontend Developer", " Crafting dynamic web experiences.", " Let's Explore Together"],
  colors = ["red", "green", "yellow"],
}) => {
  const [visible, setVisible] = useState(true);
  const [letterCount, setLetterCount] = useState(0);
  const [waiting, setWaiting] = useState(false);
  const [text, setText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [x, setX] = useState(1);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const target = document.getElementById('text');
    const textUnderscore = document.getElementById('console');

    const updateText = () => {
      if(!waiting){
        if(letterCount === 0){
          setWaiting(true);
          setTimeout(() => {
            const newColorIndex = (currentColorIndex + 1) % colors.length;
            const newWordIndex = (currentWordIndex + 1) % words.length;
            setCurrentColorIndex(newColorIndex);
            setCurrentWordIndex(newWordIndex);
            setX(1);
            setLetterCount(1);
            target.style.color = colors[newColorIndex];
            setWaiting(false);
          }, -1);
        } else if(letterCount === words[currentWordIndex].length + 1){
          setWaiting(true);
          setTimeout(() => {
            setX(-1);
            setLetterCount(words[currentWordIndex].length);
            setWaiting(false);
          }, 210);
        } else{
          setText(words[currentWordIndex].substring(0, letterCount));
          setLetterCount(letterCount + x);
        }
      }
    }

    const textInterval = setInterval(updateText, 120);

    const underscoreInterval = setInterval(() => {
      setVisible(!visible);
    }, 120)

    return () => {
      clearInterval(textInterval);
      clearInterval(underscoreInterval);
    }

  }, [visible, letterCount, waiting, text, currentWordIndex, x, currentColorIndex]);

  return(
    <div>
      <span id="text">{text}</span>
      <div id="console" className={`console-underscore ${visible ? '' : 'hidden'}`}>&#95;</div>
    </div>
  );
};

export default TypeEffect;
