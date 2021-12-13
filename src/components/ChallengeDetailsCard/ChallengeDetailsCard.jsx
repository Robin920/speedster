import React from 'react';
import './ChallengeDetailsCard.css';

const ChallengeDetailsCard = ({cardName,cardValue}) => {
    return(
        <div className="detail-card-container">
            <div className="card-name">
                {cardName}
            </div>

            <div className="card-value">
                {cardValue}
            </div>
        </div>
    );
}

export default ChallengeDetailsCard;