import React, { useEffect, useState } from 'react';
import './StatsPanel.css';

const skills = {
    TECHNICAL: [
        { name: 'JavaScript', value: 95 },
        { name: 'React', value: 92 },
        { name: 'Node.js', value: 88 },
        { name: 'CSS/Design', value: 85 }
    ],
    MENTAL: [
        { name: 'Problem Solving', value: 90 },
        { name: 'Architecture', value: 85 },
        { name: 'Teamwork', value: 99 }
    ]
};

const StatsPanel = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 100);
    }, []);

    return (
        <div className="stats-panel">
            {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="stats-category">
                    <div className="category-title">{category}</div>
                    {items.map(skill => (
                        <div key={skill.name} className="skill-row">
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar"
                                    style={{ width: loaded ? `${skill.value}%` : '0%' }}
                                ></div>
                            </div>
                            <div className="skill-value">{skill.value}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default StatsPanel;
