import React from 'react';
import './TryAgain.css';

const TryAgain = ({words,characters,wpm,startAgain}) => {
    return(
        <div className="try-again-container">
            <h1>Test Result</h1>

            <div className="result-container">
                <p>
                    <b>characters:</b>{characters}
                </p>
                <p>
                    <b>words:</b>{words}
                </p>
                <p>
                    <b>speed:</b>{wpm} wpm
                </p>
            </div>

            <div>
                <button onClick={() => startAgain()} className="all-buttons re-try">Re-Try</button>
                <button className="all-buttons fb-share"
                onClick={()=> {
                    window.open(
                        "https://www.facebook.com/share.php?u=www.google.com",
                        "facebook-share-dialog",
                        "width=800,height=600"
                    );
                }}
                >Share on fb</button>
                <button className="all-buttons tweet"
                onClick={()=>{
                    window.open(
                        "https://twitter.com/intent/tweet?text=hey",
                        "Twitter",
                        "width=800,height=600"
                    );
                }}>
                    Share on twitter
                </button>
            </div>
        </div>
    );
}

export default TryAgain;