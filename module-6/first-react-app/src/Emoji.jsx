import { useState, useContext, createContext } from "react";
import { useEmojiContext } from "./EmojiContext";


function EmojiChanger() {
    const { mood, handleMoodChange1, handleMoodChange2 } = useEmojiContext();

    return (
        <div className='EmojiChanger'>
            Current Mood: {mood}
            <br />
            <button onClick={handleMoodChange1}>Change Mood:<br></br> Terrified</button>
            <button onClick={handleMoodChange2}>Change Mood:<br></br> Joyful</button>
        </div>
    );
} 

export default EmojiChanger; 