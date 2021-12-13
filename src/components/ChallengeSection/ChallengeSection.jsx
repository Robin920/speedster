import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css';

const ChallengeSection = ({
    selectedParagraph,words,characters,wpm,timeRemaining,timerStarted,testInfo,onInputChange,startAgain
}) => {
    return(
        <div className="challenge-container">
            <h1 data-aos="fade-down" className="challenge-header">
                Take a speed test!
            </h1>

            <TestContainer 
            selectedParagraph={selectedParagraph} words={words} characters={characters} wpm={wpm} 
                 timeRemaining={timeRemaining} timerStarted={timerStarted}
                 testInfo={testInfo} onInputChange={onInputChange} startAgain={startAgain}/>
        </div>
    );
}

export default ChallengeSection;