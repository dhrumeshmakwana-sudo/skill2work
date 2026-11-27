import React from 'react';

export default function FormInput({ label, type = 'text', value, onChange, placeholder, required = false, options = [], style = {} }) {
    return (
        <div style={{ marginBottom: '16px', ...style }}>
            {label && (
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-dark)' }}>
                    {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
                </label>
            )}
            {type === 'select' ? (
                <select
                    value={value}
                    onChange={onChange}
                    required={required}
                    style={{ 
                        width: '100%', 
                        padding: '10px 14px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--border-light)',
                        background: '#ffffff',
                        fontSize: '14px',
                        color: 'var(--text-dark)',
                        outline: 'none'
                    }}
                >
                    {options.map(opt => (
                        <option key={opt.value || opt} value={opt.value !== undefined ? opt.value : opt}>
                            {opt.label || opt}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    style={{ 
                        width: '100%', 
                        padding: '10px 14px', 
                        borderRadius: '8px', 
                        border: '1px solid var(--border-light)',
                        background: '#ffffff',
                        fontSize: '14px',
                        color: 'var(--text-dark)',
                        outline: 'none'
                    }}
                />
            )}
        </div>
    );
}
