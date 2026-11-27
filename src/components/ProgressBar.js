import React from 'react';

export default function ProgressBar({ value, max = 100, height = '10px' }) {
    const percentage = Math.min(Math.max(0, (value / max) * 100), 100);
    return (
        <div className="progress-bar-container" style={{ height }}>
            <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
        </div>
    );
}