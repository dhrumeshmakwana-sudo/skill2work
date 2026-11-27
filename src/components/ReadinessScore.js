import React from 'react';

export default function ReadinessScore({ score, size = 120 }) {
    return (
        <div style={{ 
            width: `${size}px`, 
            height: `${size}px`, 
            borderRadius: '50%', 
            border: '8px solid var(--border-light)',
            borderTop: '8px solid var(--primary-green)',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto',
            transform: 'rotate(-45deg)'
        }}>
            <div style={{ transform: 'rotate(45deg)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: `${size * 0.22}px`, fontWeight: '800', color: 'var(--dark-emerald)', margin: 0 }}>
                    {score}
                </span>
                <span style={{ fontSize: `${size * 0.09}px`, color: 'var(--text-muted)', fontWeight: '700' }}>
                    / 100
                </span>
            </div>
        </div>
    );
}
