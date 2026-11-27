import React from 'react';

export default function Readiness({ 
    readinessScore = 0, 
    skillMatchPercent = 0, 
    roadmapPercent = 0, 
    currentUser 
}) {
    // Dynamically calculate component scores
    const projectsCount = currentUser?.projects?.length || 0;
    const certsCount = currentUser?.certifications?.length || 0;
    const hasEducation = currentUser?.education ? 100 : 0;
    const hasGoal = currentUser?.careerGoal ? 100 : 50;

    const projectsPercent = Math.min(projectsCount * 33.3, 100);
    const certsPercent = Math.min(certsCount * 50, 100);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
                <h2 style={{ fontSize: '26px', fontWeight: '800', margin: 0, color: 'var(--dark-emerald)', letterSpacing: '-0.5px' }}>
                    Job Readiness Score
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '4px' }}>
                    Calculated index based on technical skills coverage, roadmap milestones, projects, certifications, and profile completeness.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '24px', alignItems: 'start' }}>
                {/* Large Dial Score Display */}
                <div className="clean-card" style={{ textAlign: 'center', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ 
                        width: '150px', 
                        height: '150px', 
                        borderRadius: '50%', 
                        border: '10px solid var(--border-light)',
                        borderTop: '10px solid var(--bright-green)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        transform: 'rotate(-45deg)'
                    }}>
                        <div style={{ transform: 'rotate(45deg)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{ fontSize: '38px', fontWeight: '800', color: 'var(--dark-emerald)', margin: 0 }}>{readinessScore}</span>
                            <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700' }}>/ 100</span>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--dark-emerald)', marginBottom: '8px' }}>
                        {readinessScore >= 75 ? 'Job Ready' : readinessScore >= 45 ? 'Progressing' : 'Starting Out'}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                        {readinessScore >= 75
                            ? 'Excellent! Your technical profile matches industry standards. Start applying!'
                            : 'You are on the right track. Fill the remaining skill gaps to unlock full eligibility.'}
                    </p>
                </div>

                {/* Categories progress bars */}
                <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--dark-emerald)', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px', margin: 0 }}>
                        Competency Breakdown
                    </h4>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>
                            <span>Skills (Technical Coverage)</span>
                            <span style={{ color: 'var(--primary-green)' }}>{skillMatchPercent}%</span>
                        </div>
                        <div className="progress-bar-container">
                            <div className="progress-bar-fill" style={{ width: `${skillMatchPercent}%` }} />
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>
                            <span>Roadmap Milestones</span>
                            <span style={{ color: 'var(--primary-green)' }}>{roadmapPercent}%</span>
                        </div>
                        <div className="progress-bar-container">
                            <div className="progress-bar-fill" style={{ width: `${roadmapPercent}%` }} />
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>
                            <span>Projects Logged ({projectsCount})</span>
                            <span style={{ color: 'var(--primary-green)' }}>{projectsPercent}%</span>
                        </div>
                        <div className="progress-bar-container">
                            <div className="progress-bar-fill" style={{ width: `${projectsPercent}%` }} />
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>
                            <span>Certifications Logged ({certsCount})</span>
                            <span style={{ color: 'var(--primary-green)' }}>{certsPercent}%</span>
                        </div>
                        <div className="progress-bar-container">
                            <div className="progress-bar-fill" style={{ width: `${certsPercent}%` }} />
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>
                            <span>Profile & Education</span>
                            <span style={{ color: 'var(--primary-green)' }}>{Math.round((hasEducation + hasGoal) / 2)}%</span>
                        </div>
                        <div className="progress-bar-container">
                            <div className="progress-bar-fill" style={{ width: `${(hasEducation + hasGoal) / 2}%` }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}