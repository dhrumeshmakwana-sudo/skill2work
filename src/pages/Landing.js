import React from 'react';

export default function Landing({ setCurrentTab }) {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>

            {/* Top Emerald Hero Banner */}
            <div
                style={{
                    background: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
                    borderRadius: '24px',
                    padding: '56px 48px',
                    color: '#ffffff',
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1fr',
                    gap: '40px',
                    alignItems: 'center',
                    boxShadow: '0 20px 40px rgba(6, 78, 59, 0.15)',
                    marginBottom: '56px'
                }}
            >
                {/* Left Copy & CTA */}
                <div>
                    <span
                        style={{
                            display: 'inline-block',
                            background: 'rgba(255, 255, 255, 0.12)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#a7f3d0',
                            padding: '6px 14px',
                            borderRadius: '20px',
                            fontSize: '12.5px',
                            fontWeight: '700',
                            marginBottom: '20px'
                        }}
                    >
                        Next-Gen Skill-to-Career Mapper
                    </span>

                    <h1
                        style={{
                            fontSize: '44px',
                            fontWeight: '800',
                            lineHeight: '1.15',
                            marginBottom: '18px',
                            letterSpacing: '-0.5px'
                        }}
                    >
                        Discover Your Best <br />
                        <span style={{ color: '#34d399' }}>Career Path</span>
                    </h1>

                    <p
                        style={{
                            color: '#d1fae5',
                            fontSize: '15px',
                            lineHeight: '1.6',
                            marginBottom: '32px',
                            maxWidth: '460px'
                        }}
                    >
                        Analyze your technical skills, identify competency gaps, and build your personalized learning roadmap to match live industry roles.
                    </p>

                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button
                            type="button"
                            onClick={() => setCurrentTab('signup')}
                            style={{
                                backgroundColor: '#10b981',
                                color: '#ffffff',
                                border: 'none',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
                                transition: 'transform 0.15s ease'
                            }}
                            onMouseOver={(e) => (e.target.style.transform = 'translateY(-1px)')}
                            onMouseOut={(e) => (e.target.style.transform = 'translateY(0)')}
                        >
                            Get Started Free →
                        </button>

                        <button
                            type="button"
                            onClick={() => setCurrentTab('login')}
                            style={{
                                backgroundColor: 'transparent',
                                color: '#ffffff',
                                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.borderColor = '#ffffff';
                                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                                e.target.style.background = 'transparent';
                            }}
                        >
                            Sign In
                        </button>
                    </div>
                </div>

                {/* Right Match Preview Card */}
                <div
                    style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '20px',
                        padding: '28px',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                        <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#a7f3d0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Dynamic Profile Match
                        </span>
                        <span
                            style={{
                                background: '#10b981',
                                color: '#ffffff',
                                fontSize: '12px',
                                fontWeight: '800',
                                padding: '3px 10px',
                                borderRadius: '12px'
                            }}
                        >
                            94%
                        </span>
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: '800', margin: '0 0 4px 0' }}>
                        Full Stack Developer
                    </h3>
                    <p style={{ fontSize: '12.5px', color: '#a7f3d0', margin: '0 0 20px 0' }}>
                        Active Learning Roadmap
                    </p>

                    <div
                        style={{
                            background: 'rgba(0, 0, 0, 0.25)',
                            borderRadius: '12px',
                            padding: '16px 20px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <span style={{ fontSize: '13px', fontWeight: '600', color: '#e2e8f0' }}>Job Readiness Score</span>
                        <span style={{ fontSize: '16px', fontWeight: '800', color: '#34d399' }}>82 / 100</span>
                    </div>
                </div>
            </div>

            {/* 4 Feature Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                <div className="clean-card" style={{ padding: '22px' }}>
                    <div style={{ fontSize: '26px', marginBottom: '10px' }}></div>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                        Skill-to-Career Match
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
                        Dynamically maps your technical skills to live market opportunities.
                    </p>
                </div>

                <div className="clean-card" style={{ padding: '22px' }}>
                    <div style={{ fontSize: '26px', marginBottom: '10px' }}></div>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                        Skill Gap Analysis
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
                        Identifies missing competencies required for your chosen career track.
                    </p>
                </div>

                <div className="clean-card" style={{ padding: '22px' }}>
                    <div style={{ fontSize: '26px', marginBottom: '10px' }}></div>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                        Personalized Roadmap
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
                        Structured milestone targets with actionable steps to achieve mastery.
                    </p>
                </div>

                <div className="clean-card" style={{ padding: '22px' }}>
                    <div style={{ fontSize: '26px', marginBottom: '10px' }}></div>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '6px' }}>
                        Job Readiness Score
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>
                        Computes a dynamic score showing how close you are to landing the job.
                    </p>
                </div>
            </div>

        </div>
    );
}