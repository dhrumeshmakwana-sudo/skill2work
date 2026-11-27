import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Signup({ onAuthSubmit, authError, setCurrentTab }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [localError, setLocalError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocalError('');

        if (password !== confirmPassword) {
            setLocalError('Passwords do not match');
            return;
        }

        onAuthSubmit({ fullName, email, password });
    };

    const displayError = localError || authError;

    return (
        <div className="auth-split-wrapper" style={{ minHeight: 'calc(100vh - 72px)', display: 'flex' }}>
            <div className="auth-split-form" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 60px', maxWidth: '540px', margin: '0 auto' }}>
                <Card style={{ padding: '32px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px', color: 'var(--text-dark)' }}>
                        Create Account
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
                        Start your career readiness journey with Skill2Work.
                    </p>

                    {displayError && (
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
                            {displayError}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <FormInput
                            label="Full Name"
                            type="text"
                            required
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
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
                            placeholder="Min 6 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormInput
                            label="Confirm Password"
                            type="password"
                            required
                            placeholder="Re-enter password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <Button type="submit" style={{ width: '100%', padding: '12px', marginTop: '8px' }}>
                            Sign Up & Get Started
                        </Button>
                    </form>

                    <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--text-muted)', marginTop: '24px', margin: '24px 0 0 0' }}>
                        Already have an account?{' '}
                        <span
                            style={{ color: 'var(--primary-mint)', fontWeight: '700', cursor: 'pointer' }}
                            onClick={() => setCurrentTab('login')}
                        >
                            Login
                        </span>
                    </p>
                </Card>
            </div>

            <div className="auth-split-banner" style={{ flex: 1, background: 'linear-gradient(135deg, var(--primary-light) 0%, #a7f3d0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                <div style={{ textAlign: 'center', maxWidth: '360px' }}>
                    <div style={{ fontSize: '80px', marginBottom: '20px' }}>🌿</div>
                    <h3 style={{ fontWeight: '800', color: 'var(--primary-emerald)', marginBottom: '12px', fontSize: '24px' }}>Bridge the Skill Gap</h3>
                    <p style={{ color: 'var(--primary-emerald)', opacity: 0.9, fontSize: '15px', lineHeight: '1.6' }}>
                        Create a free account to gain full access to role compatibility diagnostics, roadmap milestone trackers, and real-time readiness scoring.
                    </p>
                </div>
            </div>
        </div>
    );
}
