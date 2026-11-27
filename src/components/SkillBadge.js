import React from 'react';

export default function SkillBadge({ skill, active = false, onClick, style = {} }) {
    return (
        <span
            onClick={onClick}
            className={`skill-pill ${active ? 'selected' : ''}`}
            style={{
                cursor: onClick ? 'pointer' : 'default',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                userSelect: 'none',
                ...style
            }}
        >
            {active ? '✔' : '+'} {skill}
        </span>
    );
}
