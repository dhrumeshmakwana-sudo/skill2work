import React from 'react';

export default function SkillGap({
    activeCareer = {},
    matchingSkills = [],
    missingSkills = [],
    skillMatchPercent = 0
}) {
    const importanceMap = activeCareer.importance || {};

    const getPriority = (skill) => {
        const val = importanceMap[skill];
        if (val === 'Critical') return { label: 'High Priority', color: '#B91C1C', bg: '#FEE2E2' };
        if (val === 'High') return { label: 'High Priority', color: '#B91C1C', bg: '#FEE2E2' };
        if (val === 'Medium') return { label: 'Medium Priority', color: '#D97706', bg: '#FEF3C7' };
        return { label: 'Low Priority', color: '#059669', bg: '#D1FAE5' };
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
                <h2 style={{ fontSize: '26px', fontWeight: '800', margin: 0, color: 'var(--dark-emerald)', letterSpacing: '-0.5px' }}>
                    Skill Gap Analysis
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '4px' }}>
                    A visual layout comparing the technical competencies you have logged against requirements for <strong>{activeCareer.title}</strong>.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', alignItems: 'start' }}>
                {/* Left Card: Comparison Table */}
                <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '14px' }}>
                            Skills You Have ({matchingSkills.length})
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {matchingSkills.map((s) => (
                                <span 
                                    key={s} 
                                    className="skill-pill selected"
                                    style={{ cursor: 'default', padding: '10px 18px', fontSize: '13.5px' }}
                                >
                                    {s}
                                </span>
                            ))}
                            {matchingSkills.length === 0 && (
                                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>No matching skills acquired yet. Add them in the assessment tab.</span>
                            )}
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#B91C1C', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '14px' }}>
                            Skills You Need ({missingSkills.length})
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {missingSkills.map((s) => {
                                const priority = getPriority(s);
                                return (
                                    <div key={s} style={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center', 
                                        padding: '12px 16px',
                                        background: '#FDF2F2',
                                        border: '1px solid rgba(239, 68, 68, 0.15)',
                                        borderRadius: '12px'
                                    }}>
                                        <span style={{ fontSize: '14px', fontWeight: '700', color: '#991B1B' }}>
                                            {s}
                                        </span>
                                        <span style={{ 
                                            fontSize: '11px', 
                                            background: priority.bg, 
                                            color: priority.color, 
                                            padding: '4px 10px', 
                                            borderRadius: '20px', 
                                            fontWeight: '800' 
                                        }}>
                                            {priority.label}
                                        </span>
                                    </div>
                                );
                            })}
                            {missingSkills.length === 0 && (
                                <span style={{ fontSize: '14px', color: 'var(--primary-green)', fontWeight: '700' }}>
                                    Perfect! All core competencies acquired.
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Card: Score Indicator */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className="clean-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--dark-emerald)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '24px' }}>Match Score Analysis</h4>
                        
                        {/* Circular Indicator representation */}
                        <div style={{ 
                            width: '140px', 
                            height: '140px', 
                            borderRadius: '50%', 
                            border: '10px solid var(--border-light)',
                            borderTop: '10px solid var(--primary-green)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px',
                            transform: 'rotate(-45deg)'
                        }}>
                            <div style={{ 
                                transform: 'rotate(45deg)', 
                                fontSize: '32px', 
                                fontWeight: '800', 
                                color: 'var(--dark-emerald)' 
                            }}>
                                {skillMatchPercent}%
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', marginTop: '10px' }}>
                            <div style={{ background: 'var(--light-bg)', padding: '12px', borderRadius: '12px' }}>
                                <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary-green)' }}>{matchingSkills.length}</div>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Skills Met</div>
                            </div>
                            <div style={{ background: 'var(--light-bg)', padding: '12px', borderRadius: '12px' }}>
                                <div style={{ fontSize: '20px', fontWeight: '800', color: '#B91C1C' }}>{missingSkills.length}</div>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Skills Missing</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'var(--mint)', border: '1.5px dashed var(--primary-green)', borderRadius: '16px', padding: '20px' }}>
                        <h5 style={{ fontSize: '14px', fontWeight: '800', color: 'var(--dark-emerald)', marginBottom: '6px' }}>Learning Priority Tip</h5>
                        <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                            {missingSkills.length > 0
                                ? `Focus on checking off "${missingSkills[0]}" first under the Assessment tab. Doing so will immediately boost your Readiness Score.`
                                : 'You have completed all prerequisite technical capabilities. Start checking off vertical curriculum roadmap tasks!'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}