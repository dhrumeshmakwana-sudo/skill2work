import React from 'react';

export default function Button({ children, onClick, variant = 'primary', style = {}, type = 'button', disabled = false, className = '' }) {
    const isOutline = variant === 'outline';
    const btnClass = isOutline ? 'btn-premium-outline' : 'btn-premium-primary';
    
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${btnClass} ${className}`}
            style={{
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.6 : 1,
                ...style
            }}
        >
            {children}
        </button>
    );
}
