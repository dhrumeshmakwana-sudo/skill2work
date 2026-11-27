import React from 'react';

export default function Progress({ readinessScore, currentUser, activeCareer, skillMatchPercent, roadmapPercent }) {
    const acquiredSkills = currentUser.technicalSkills || [];
    const completedTasks = currentUser.completedTasks || [];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
                <h2 style={{ fontSize: '26px', fontWeight: '800', margin: 0, color: 'var(--dark-emerald)', letterSpacing: '-0.5px' }}>
                    Career Progress Center
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '4px' }}>
                    Detailed overview of your active learning, checked roadmap tasks, and job-market readiness indicators.
                </p>
            </div>

            {/* Overall Job Readiness Index Card */}
            <div className="clean-card" style={{ padding: '32px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--dark-emerald)', marginBottom: '8px' }}>Overall Job Readiness Score</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                    Dynamic score derived from technical skills, milestones, projects, certifications, and background settings.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                    <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary-green)' }}>
                        {readinessScore}%
                    </div>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <div className="progress-bar-container" style={{ height: '14px' }}>
                            <div className="progress-bar-fill" style={{ width: `${readinessScore}%` }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid display for indicators */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h5 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                        Roadmap Completion
                    </h5>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--dark-emerald)' }}>
                        {completedTasks.length} <span style={{ fontSize: '16px', color: 'var(--text-muted)', fontWeight: '600' }}>/ {activeCareer.roadmap?.length || 0} Tasks</span>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: `${roadmapPercent}%` }} />
                    </div>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{roadmapPercent}% of curriculum stages completed.</span>
                </div>

                <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h5 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                        Skills & Competencies
                    </h5>
                    <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--dark-emerald)' }}>
                        {acquiredSkills.length} <span style={{ fontSize: '16px', color: 'var(--text-muted)', fontWeight: '600' }}>Tech Skills</span>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: `${skillMatchPercent}%` }} />
                    </div>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{skillMatchPercent}% matching score for {activeCareer.title}.</span>
                </div>

                <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h5 style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
                        Career Match Track
                    </h5>
                    <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--primary-green)', minHeight: '34px', display: 'flex', alignItems: 'center' }}>
                        {activeCareer.title}
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: '100%' }} />
                    </div>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Active goal track selected.</span>
                </div>
            </div>
        </div>
    );
}