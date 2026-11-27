import React from 'react';

export default function Card({ children, title, style = {}, className = '' }) {
    return (
        <div className={`clean-card ${className}`} style={style}>
            {title && <h4 className="clean-card-title">{title}</h4>}
            {children}
        </div>
    );
}
