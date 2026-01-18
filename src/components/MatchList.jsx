import React from 'react';
import './MatchList.css';

const matches = [
    {
        id: 1,
        date: 'OCT 23',
        opponent: 'E-COMMERCE API',
        score: '3-0',
        tech: ['Node.js', 'Express', 'MongoDB'],
        link: '#'
    },
    {
        id: 2,
        date: 'SEP 23',
        opponent: 'CHAT APP',
        score: '2-1',
        tech: ['React', 'Socket.io', 'Redis'],
        link: '#'
    },
    {
        id: 3,
        date: 'AUG 23',
        opponent: 'PORTFOLIO V1',
        score: 'DRAW',
        tech: ['HTML', 'CSS', 'JS'],
        link: '#'
    }
];

const MatchList = () => {
    return (
        <div className="match-list">
            <h3 style={{
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
                borderBottom: '1px solid #333',
                paddingBottom: '10px'
            }}>
                RECENT MATCHES (PROJECTS)
            </h3>
            {matches.map(match => (
                <div key={match.id} className="match-card">
                    <div className="match-date">{match.date}</div>
                    <div className="match-info">
                        <div className="match-opponent">{match.opponent}</div>
                        <div className="match-score">{match.score}</div>
                        <div className="tech-stack">
                            {match.tech.map(t => (
                                <span key={t} className="tech-badge">{t}</span>
                            ))}
                        </div>
                    </div>
                    <div className="match-actions">
                        <button className="action-btn">REPLAY</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MatchList;
