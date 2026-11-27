import React from 'react';
import Button from './Button';

export default function CareerCard({ career, score, isSelected, onSelect, matchingSkills = [], missingSkills = [] }) {
    return (
        <div 
            className="clean-card" 
            style={{ 
                borderColor: isSelected ? 'var(--primary-green)' : 'var(--border-light)', 
                background: isSelected ? 'var(--mint)' : 'var(--white)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px'
            }}
        >
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: '800', margin: 0, color: 'var(--dark-emerald)' }}>{career.title}</h4>
                    <span style={{ 
                        background: 'var(--primary-green)', 
                        color: 'var(--white)', 
                        padding: '4px 10px', 
                        borderRadius: '20px', 
                        fontWeight: '800', 
                        fontSize: '12px' 
                    }}>
                        {score}% Match
                    </span>
                </div>
                
                <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
                    <span style={{ 
                        fontSize: '11px', 
                        fontWeight: '700', 
                        background: 'rgba(5, 46, 36, 0.05)', 
                        color: 'var(--dark-emerald)', 
                        padding: '3px 8px', 
                        borderRadius: '6px' 
                    }}>
                        {career.matchTag || 'In Demand'}
                    </span>
                </div>

                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: '1.5', minHeight: '54px', marginBottom: '16px' }}>
                    {career.description}
                </p>

                <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Matching Skills ({matchingSkills.length})</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {matchingSkills.map(s => (
                            <span key={s} style={{ fontSize: '11px', fontWeight: '700', color: 'var(--primary-green)', background: 'rgba(15, 143, 91, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>{s}</span>
                        ))}
                        {matchingSkills.length === 0 && <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>None yet</span>}
                    </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>Missing Skills ({missingSkills.length})</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {missingSkills.map(s => (
                            <span key={s} style={{ fontSize: '11px', fontWeight: '700', color: '#B91C1C', background: '#FEE2E2', padding: '2px 8px', borderRadius: '4px' }}>{s}</span>
                        ))}
                        {missingSkills.length === 0 && <span style={{ fontSize: '11.5px', color: 'var(--primary-green)', fontWeight: '700' }}>Complete</span>}
                    </div>
                </div>
            </div>

            <Button
                variant={isSelected ? 'primary' : 'outline'}
                style={{ width: '100%', padding: '10px', fontSize: '13px' }}
                onClick={onSelect}
            >
                {isSelected ? 'Current Target Track' : 'Select Career Track'}
            </Button>
        </div>
    );
}
