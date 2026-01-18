import React from 'react';
import './FutCard.css';

const FutCard = ({
    rating = 99,
    position = 'DEV',
    name = 'PLAYER',
    imageUrl = 'https://via.placeholder.com/150',
    stats = {
        PAC: 99,
        SHO: 99,
        PAS: 99,
        DRI: 99,
        DEF: 99,
        PHY: 99
    }
}) => {
    return (
        <div className="fut-card pixel-border">
            <div className="card-top">
                <div className="rating-info">
                    <span className="rating">User:{rating}</span>
                    <span className="position">CLASS: {position}</span>
                </div>
            </div>

            <div className="player-image-container">
                {/* Added some pixel art inline style for image container */}
                <img src={imageUrl} alt={name} className="player-image" />
            </div>

            <div className="player-name">PLAYER 1: {name}</div>

            <div className="stats-grid">
                <div className="stat-item"><span>COD</span><span>{stats.PAC}</span></div>
                <div className="stat-item"><span>DES</span><span>{stats.DRI}</span></div>
                <div className="stat-item"><span>BUG</span><span>{stats.SHO}</span></div>
                <div className="stat-item"><span>SEC</span><span>{stats.DEF}</span></div>
                <div className="stat-item"><span>COM</span><span>{stats.PAS}</span></div>
                <div className="stat-item"><span>CAF</span><span>{stats.PHY}</span></div>
            </div>
        </div>
    );
};

export default FutCard;
