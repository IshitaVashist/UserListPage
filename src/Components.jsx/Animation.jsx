import React, { useState, useEffect } from 'react';

const AnimatedHeading = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('animate-in');
    const timer = setTimeout(() => setAnimationClass('animate-loop'), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className={`text-5xl font-extrabold text-center mb-8 ${animationClass}`}>
      {'USER LIST PAGE'.split('').map((letter, index) => (
        <span 
          key={index} 
          className="inline-block animate-letter"
          style={{ 
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};




export default AnimatedHeading;


