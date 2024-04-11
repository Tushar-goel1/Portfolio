import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const phrases = ['C','Co','Cod','Code','Coder','Coder','Code','Cod','Co','C','','F','Fr','Fro','Fron','Front','Fronte',
                    'Fronten','Frontend','Frontend ','Frontend D','Frontend De','Frontend Dev','Frontend Deve',
                    'Frontend Devel','Frontend Develo','Frontend Develop','Frontend Develope','Frontend Developer',
                    'Frontend Developer','Frontend Develope','Frontend Develop','Frontend Develo','Frontend Devel','Frontend Deve',
                    'Frontend Dev','Frontend De','Frontend D','Frontend ','Frontend','Fronten','Fronte','Front','Fron',
                    'Fro','Fr','F',''];

  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (forward) {
        if (charIndex < phrases[index].length) {
          setCharIndex(charIndex + 1);
        } else {
          setForward(false);
          setTimeout(() => {
            setForward(true);
            setIndex((index + 1) % phrases.length);
          }, 50);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setForward(true);
          setIndex((index + 1) % phrases.length);
        }
      }
    }, forward ? 50 : 50);

    return () => clearTimeout(timer);
  }, [charIndex, forward, index, phrases]);

  return (
    <>
    <span>{phrases[index]}</span>
    <span>|</span>
    </>
  );
};

export default TypingAnimation;
