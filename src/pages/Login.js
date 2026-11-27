import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Login({ onAuthSubmit, authError, setCurrentTab }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAuthSubmit({ email, password });
    };

    return (
        <div className="auth-split-wrapper" style={{ minHeight: 'calc(100vh - 72px)', display: 'flex' }}>
            <div className="auth-split-form" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 60px', maxWidth: '540px', margin: '0 auto' }}>
                <Card style={{ padding: '32px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px', color: 'var(--text-dark)' }}>
                        Welcome Back!
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
                        Login to continue your career journey with Skill2Work.
                    </p>

                    {authError && (
                        <div style={{
                            background: '#fef2f2',
                            border: '1px solid #fecaca',
                            color: '#ef4444',
                            padding: '10px 14px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>
                            {authError}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <FormInput
                            label="Email Address"
                            type="email"
                            required
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormInput
                            label="Password"
                            type="password"
                            required
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button type="submit" style={{ width: '100%', padding: '12px', marginTop: '8px' }}>
                            Sign In
                        </Button>
                    </form>

                    <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--text-muted)', marginTop: '24px', margin: '24px 0 0 0' }}>
                        Don't have an account?{' '}
                        <span
                            style={{ color: 'var(--primary-mint)', fontWeight: '700', cursor: 'pointer' }}
                            onClick={() => setCurrentTab('signup')}
                        >
                            Sign Up
                        </span>
                    </p>
                </Card>
            </div>

            <div className="auth-split-banner" style={{ flex: 1, background: 'linear-gradient(135deg, var(--primary-light) 0%, #a7f3d0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                <div style={{ textAlign: 'center', maxWidth: '360px' }}>
                    <div style={{ fontSize: '80px', marginBottom: '20px' }}></div>
                    <h3 style={{ fontWeight: '800', color: 'var(--primary-emerald)', marginBottom: '12px', fontSize: '24px' }}>Track Your Readiness</h3>
                    <p style={{ color: 'var(--primary-emerald)', opacity: 0.9, fontSize: '15px', lineHeight: '1.6' }}>
                        Compare your technical competencies with the real job market requirements and follow personalized milestone roadmaps.
                    </p>
                </div>
            </div>
        </div>
    );
}
