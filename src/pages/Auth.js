import React, { useState } from 'react';

export default function Auth({ type, onAuthSubmit, authError, setCurrentTab }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAuthSubmit({ email, password, fullName });
    };

    return (
        <div
            style={{
                minHeight: 'calc(100vh - 64px)',
                backgroundColor: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 20px'
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '420px',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                    padding: '36px 32px'
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#059669', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        Skill2Work
                    </span>
                    <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', margin: '6px 0 4px 0' }}>
                        {type === 'signup' ? 'Create an Account' : 'Welcome Back!'}
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '13.5px', margin: 0 }}>
                        {type === 'signup'
                            ? 'Start mapping your personalized career pathway.'
                            : 'Access your roadmap progress and score dashboard.'}
                    </p>
                </div>

                {authError && (
                    <div
                        style={{
                            backgroundColor: '#fef2f2',
                            border: '1px solid #fecaca',
                            color: '#dc2626',
                            padding: '10px 14px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            fontWeight: '600',
                            marginBottom: '20px'
                        }}
                    >
                        {authError}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {type === 'signup' && (
                        <div style={{ marginBottom: '18px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Enter your full name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '11px 14px',
                                    border: '1.5px solid #cbd5e1',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </div>
                    )}

                    <div style={{ marginBottom: '18px' }}>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '11px 14px',
                                border: '1.5px solid #cbd5e1',
                                borderRadius: '8px',
                                fontSize: '14px',
                                outline: 'none',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                            Password
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '11px 14px',
                                    paddingRight: '60px',
                                    border: '1.5px solid #cbd5e1',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    color: '#64748b',
                                    cursor: 'pointer'
                                }}
                            >
                                {showPassword ? 'HIDE' : 'SHOW'}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            backgroundColor: '#059669',
                            color: '#ffffff',
                            border: 'none',
                            padding: '12px',
                            borderRadius: '8px',
                            fontSize: '14.5px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(5, 150, 105, 0.25)',
                            transition: 'background-color 0.15s ease'
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#047857')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#059669')}
                    >
                        {type === 'signup' ? 'Sign Up' : 'Login'}
                    </button>
                </form>

                <p style={{ textAlign: 'center', fontSize: '13px', color: '#64748b', marginTop: '22px', marginBottom: 0 }}>
                    {type === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <span
                        onClick={() => setCurrentTab(type === 'signup' ? 'login' : 'signup')}
                        style={{ color: '#059669', fontWeight: '700', cursor: 'pointer' }}
                    >
                        {type === 'signup' ? 'Login' : 'Sign Up'}
                    </span>
                </p>
            </div>
        </div>
    );
}