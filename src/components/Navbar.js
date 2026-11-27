import React from 'react';

export default function AppNavbar({ currentUser, onLogout, currentTab, setCurrentTab }) {
    return (
        <header className="app-navbar">
            <div className="nav-brand" onClick={() => setCurrentTab(currentUser ? 'dashboard' : 'landing')}>
                <span className="brand-icon-box">S</span>
                <span>Skill<span style={{ color: 'var(--primary-green)' }}>2Work</span></span>
            </div>

            <div className="nav-links-row">
                <span className={`nav-link-item ${currentTab === 'landing' ? 'active' : ''}`} onClick={() => setCurrentTab('landing')}>
                    Explore Careers
                </span>
                <span className={`nav-link-item ${currentTab === 'assessment' ? 'active' : ''}`} onClick={() => setCurrentTab(currentUser ? 'assessment' : 'login')}>
                    Assessments
                </span>
                <span className={`nav-link-item ${currentTab === 'roadmap' ? 'active' : ''}`} onClick={() => setCurrentTab(currentUser ? 'roadmap' : 'login')}>
                    Roadmap
                </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {currentUser ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--dark-emerald)', background: 'var(--mint)', padding: '6px 14px', borderRadius: '20px' }}>
                            {currentUser.fullName}
                        </span>
                        <button className="btn-premium-outline" style={{ padding: '8px 16px', fontSize: '13px' }} onClick={onLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button className="btn-premium-outline" style={{ padding: '8px 16px', fontSize: '13px' }} onClick={() => setCurrentTab('login')}>
                            Login
                        </button>
                        <button className="btn-premium-primary" style={{ padding: '8px 16px', fontSize: '13px' }} onClick={() => setCurrentTab('signup')}>
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}