import React, { createContext, useContext, useState } from 'react';


const EmojiContext = createContext();


export default function EmojiProvider( props ) {
  const [mood, setMood] = useState('😀');

  const handleMoodChange1 = () => {
        setMood('😨'); 
    }
    const handleMoodChange2 = () => {
        setMood('😄'); 
    }

  return (
    <EmojiContext.Provider value={{ mood, handleMoodChange1, handleMoodChange2 }}>
      {props.children}
    </EmojiContext.Provider>
  );
}


export function useEmojiContext() {
  return useContext(EmojiContext);
}
