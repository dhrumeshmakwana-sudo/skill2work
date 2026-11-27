import React from 'react';

export default function StatCard({ title, value, subtitle, buttonText, onButtonClick }) {
    return (
        <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
            <div>
                <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{title}</div>
                <div style={{ fontSize: '36px', fontWeight: '800', color: 'var(--dark-emerald)', margin: '4px 0' }}>{value}</div>
                {subtitle && <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>{subtitle}</div>}
            </div>
            {buttonText && (
                <button className="btn-premium-outline" style={{ width: '100%', padding: '8px', fontSize: '12.5px', marginTop: '12px' }} onClick={onButtonClick}>
                    {buttonText}
                </button>
            )}
        </div>
    );
}
