import React from 'react';

export default function ReadinessCircle({ score }) {
    const color = score >= 75 ? '#198754' : score >= 50 ? '#ffc107' : '#dc3545';
    return (
        <div className="circle-score" style={{ borderColor: color, color }}>
            <span>{score}</span>
            <small className="fs-8 text-muted">/ 100</small>
        </div>
    );
}