import React from 'react';

export default function Dashboard({
    currentUser,
    activeCareer,
    readinessScore,
    skillMatchPercent,
    roadmapPercent,
    missingSkills,
    setCurrentTab
}) {
    const acquiredSkills = currentUser.technicalSkills || [];
    const completedTasks = currentUser.completedTasks || [];
    const softSkills = currentUser.softSkills || [];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Premium Hero Welcome Banner */}
            <div className="hero-glow-bg" style={{ padding: '32px 40px', borderRadius: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <h2 style={{ fontSize: '26px', fontWeight: '800', margin: 0, color: '#FFFFFF' }}>Welcome back, {currentUser.fullName}!</h2>
                    </div>
                    <p style={{ color: '#A3B8B0', fontSize: '14.5px', margin: 0 }}>
                        Your current track is set to <strong>{activeCareer.title}</strong>. Match score is <strong>{skillMatchPercent}%</strong>.
                    </p>
                </div>
                <button className="btn-premium-primary" style={{ background: '#FFFFFF', color: 'var(--dark-emerald)', boxShadow: 'none' }} onClick={() => setCurrentTab('profile')}>
                    Edit Profile
                </button>
            </div>

            {/* Metrics Stats Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
                <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
                    <div>
                        <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Job Readiness Score</div>
                        <div style={{ fontSize: '36px', fontWeight: '800', color: 'var(--primary-green)', margin: '8px 0' }}>{readinessScore} <span style={{ fontSize: '18px', color: 'var(--text-muted)' }}>/ 100</span></div>
                    </div>
                    <span style={{ display: 'inline-block', alignSelf: 'flex-start', fontSize: '11px', fontWeight: '800', color: 'var(--primary-green)', background: 'var(--mint)', padding: '4px 12px', borderRadius: '20px' }}>
                        {readinessScore >= 75 ? 'High Readiness' : readinessScore >= 40 ? 'Progressing' : 'Starting'}
                    </span>
                </div>

                <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
                    <div>
                        <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Top Career Match</div>
                        <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--dark-emerald)', marginTop: '8px' }}>{activeCareer.title}</div>
                        <div style={{ color: 'var(--primary-green)', fontSize: '13px', fontWeight: '700', marginTop: '2px' }}>{skillMatchPercent}% Competency Match</div>
                    </div>
                    <button className="btn-premium-outline" style={{ width: '100%', padding: '8px', fontSize: '12.5px' }} onClick={() => setCurrentTab('recommendations')}>
                        Career Matches
                    </button>
                </div>

                <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
                    <div>
                        <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Skills Completed</div>
                        <div style={{ fontSize: '36px', fontWeight: '800', color: 'var(--dark-emerald)', margin: '4px 0' }}>{acquiredSkills.length}</div>
                        <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>{softSkills.length} soft skills registered</div>
                    </div>
                    <button className="btn-premium-outline" style={{ width: '100%', padding: '8px', fontSize: '12.5px' }} onClick={() => setCurrentTab('assessment')}>
                        Assess Skills
                    </button>
                </div>

                <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
                    <div>
                        <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Roadmap Progress</div>
                        <div style={{ fontSize: '36px', fontWeight: '800', color: 'var(--dark-emerald)', margin: '4px 0' }}>{roadmapPercent}%</div>
                        <div className="progress-bar-container" style={{ marginTop: '8px' }}>
                            <div className="progress-bar-fill" style={{ width: `${roadmapPercent}%` }} />
                        </div>
                    </div>
                    <button className="btn-premium-outline" style={{ width: '100%', padding: '8px', fontSize: '12.5px' }} onClick={() => setCurrentTab('roadmap')}>
                        View Roadmap
                    </button>
                </div>
            </div>

            {/* Split Information Sections */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', alignItems: 'start' }}>
                {/* Left Section: Recommendations & Competencies */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className="clean-card">
                        <h4 className="clean-card-title">Recommended Next Step</h4>
                        <div style={{ background: 'var(--light-bg)', border: '1.5px dashed var(--primary-green)', borderRadius: '16px', padding: '20px' }}>
                            {missingSkills.length > 0 ? (
                                <div>
                                    <p style={{ fontSize: '14.5px', color: 'var(--dark-emerald)', fontWeight: '700', marginBottom: '8px' }}>
                                        Acquire skill: <span style={{ color: 'var(--primary-green)' }}>{missingSkills[0]}</span>
                                    </p>
                                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                                        To maximize your compatibility match for <strong>{activeCareer.title}</strong>, we suggest checking off this technical competency next under the Assessment tab.
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p style={{ fontSize: '14.5px', color: 'var(--dark-emerald)', fontWeight: '700', marginBottom: '8px' }}>
                                        Requirements fulfilled!
                                    </p>
                                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                                        You have logged all required skills for {activeCareer.title}. Proceed to complete outstanding roadmap stages.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="clean-card">
                        <h4 className="clean-card-title">Career Technical Competencies</h4>
                        <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                            Your active compatibility across all skills required for the <strong>{activeCareer.title}</strong> profile.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {activeCareer.requiredSkills.map((skill) => {
                                const has = acquiredSkills.includes(skill);
                                return (
                                    <span key={skill} className={`skill-pill ${has ? 'selected' : ''}`} style={{ cursor: 'default' }}>
                                        {skill}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Section: Curriculum Milestones */}
                <div className="clean-card">
                    <h4 className="clean-card-title">Recent Learning Milestones</h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                        Curriculum roadmap completion: <strong>{completedTasks.length} / {activeCareer.roadmap.length}</strong> tasks checked.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {activeCareer.roadmap.map((item) => {
                            const isDone = completedTasks.includes(item.id);
                            return (
                                <div key={item.id} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    background: isDone ? 'var(--mint)' : 'var(--light-bg)',
                                    border: `1px solid ${isDone ? 'rgba(15, 143, 91, 0.2)' : 'var(--border-light)'}`
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--dark-emerald)' }}>{item.stage}</span>
                                    </div>
                                    <span style={{ fontSize: '12px', fontWeight: '800', color: isDone ? 'var(--primary-green)' : 'var(--text-muted)' }}>
                                        {isDone ? 'Completed' : 'Pending'}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}