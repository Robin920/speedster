import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

const TypingChallengeContainer = (
    {
        selectedParagraph,words,characters,wpm,timeRemaining,timerStarted,testInfo,onInputChange,
    }
) => {
    return(
        <div className="typing-container">
             <div className="details-container">
                 <ChallengeDetailsCard cardName="Words" cardValue={words} />
                 <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                 <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
             </div>

             <div className="typewriter-container">
                 <TypingChallenge 
                 testInfo={testInfo}
                 selectedParagraph={selectedParagraph} 
                 timeRemaining={timeRemaining}
                 timerStarted={timerStarted}
                 onInputChange={onInputChange}
                 />
             </div>
        </div>
    );
}

export default TypingChallengeContainer;