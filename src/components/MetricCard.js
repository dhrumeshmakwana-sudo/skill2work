import React from 'react';

export default function MetricCard({ title, value, unit = '', variant = 'primary', subtitle }) {
    return (
        <div className="kpi-card h-100 d-flex flex-column justify-content-between">
            <div>
                <div className="kpi-label">{title}</div>
                <div className="kpi-value">
                    {value}<span className="fs-6 text-muted ms-1">{unit}</span>
                </div>
            </div>
            {subtitle && <div className="fs-8 text-secondary mt-2">{subtitle}</div>}
        </div>
    );
}