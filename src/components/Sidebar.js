import React from 'react';

export default function Sidebar({ currentTab, setCurrentTab, onLogout }) {
    const links = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'assessment', label: 'Career Assessment' },
        { id: 'recommendations', label: 'Career Matches' },
        { id: 'skillgap', label: 'Skill Gap' },
        { id: 'roadmap', label: 'Learning Roadmap' },
        { id: 'readiness', label: 'Job Readiness' },
        { id: 'progress', label: 'Progress' },
        { id: 'profile', label: 'Profile' }
    ];

    return (
        <aside className="app-sidebar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 16px 24px 16px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '16px' }}>
                <span style={{ fontSize: '18px', fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.3px' }}>Skill2Work</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                {links.map((link) => (
                    <button
                        key={link.id}
                        className={`sidebar-btn ${currentTab === link.id ? 'active' : ''}`}
                        onClick={() => setCurrentTab(link.id)}
                    >
                        <span>{link.label}</span>
                    </button>
                ))}
            </div>

            <button className="sidebar-btn sidebar-logout" onClick={onLogout}>
                <span>Logout</span>
            </button>
        </aside>
    );
}