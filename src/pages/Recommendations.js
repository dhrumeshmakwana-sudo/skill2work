import React from 'react';
import { CAREERS_DATA } from '../data/careersData';
import CareerCard from '../components/CareerCard';

export default function Recommendations({ currentUser, onUpdateProfile, setCurrentTab }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
                <h2 style={{ fontSize: '26px', fontWeight: '800', margin: 0, color: 'var(--dark-emerald)', letterSpacing: '-0.5px' }}>
                    Career Matrix Matches
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '4px' }}>
                    See your personalized compatibility score across 7 major technology tracks. Click any button to select as your active goal.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                {CAREERS_DATA.map((career) => {
                    const userSkills = currentUser.technicalSkills || [];
                    const matchingSkills = career.requiredSkills.filter(s => userSkills.includes(s));
                    const missingSkills = career.requiredSkills.filter(s => !userSkills.includes(s));
                    const score = Math.round((matchingSkills.length / career.requiredSkills.length) * 100);
                    const isSelected = currentUser.targetCareerId === career.id;

                    return (
                        <CareerCard
                            key={career.id}
                            career={career}
                            score={score}
                            isSelected={isSelected}
                            matchingSkills={matchingSkills}
                            missingSkills={missingSkills}
                            onSelect={() => onUpdateProfile({ targetCareerId: career.id })}
                        />
                    );
                })}
            </div>

            {/* Current Target Details Summary Card */}
            <div className="clean-card">
                {(() => {
                    const targetCareer = CAREERS_DATA.find(c => c.id === currentUser.targetCareerId) || CAREERS_DATA[0];
                    const matching = targetCareer.requiredSkills.filter(s => (currentUser.technicalSkills || []).includes(s));
                    const missing = targetCareer.requiredSkills.filter(s => !(currentUser.technicalSkills || []).includes(s));
                    const matchPercent = Math.round((matching.length / targetCareer.requiredSkills.length) * 100);

                    return (
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid var(--border-light)', paddingBottom: '14px' }}>
                                <div>
                                    <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary-green)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active Target Career Details</span>
                                    <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--dark-emerald)', margin: '4px 0 0 0' }}>
                                        {targetCareer.title}
                                    </h3>
                                </div>
                                <span style={{ color: 'var(--primary-green)', background: 'var(--mint)', padding: '6px 14px', borderRadius: '20px', fontWeight: '800', fontSize: '14px' }}>
                                    Match: {matchPercent}%
                                </span>
                            </div>
                            <p style={{ color: 'var(--text-dark)', fontSize: '14.5px', marginBottom: '24px', lineHeight: '1.6' }}>
                                {targetCareer.description}
                            </p>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', flexWrap: 'wrap' }}>
                                <div style={{ background: 'var(--light-bg)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                                    <h5 style={{ fontSize: '12.5px', fontWeight: '800', color: 'var(--primary-green)', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px' }}>
                                        Skills You Have ({matching.length})
                                    </h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {matching.map(s => (
                                            <span key={s} style={{ background: 'var(--white)', border: '1px solid rgba(15, 143, 91, 0.2)', color: 'var(--primary-green)', padding: '6px 12px', borderRadius: '8px', fontSize: '12.5px', fontWeight: '700' }}>
                                                {s}
                                            </span>
                                        ))}
                                        {matching.length === 0 && <span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>No matching skills logged yet.</span>}
                                    </div>
                                </div>
                                
                                <div style={{ background: 'rgba(239, 68, 68, 0.03)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                                    <h5 style={{ fontSize: '12.5px', fontWeight: '800', color: '#B91C1C', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px' }}>
                                        Skills You Need ({missing.length})
                                    </h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {missing.map(s => (
                                            <span key={s} style={{ background: 'var(--white)', border: '1px solid rgba(239, 68, 68, 0.15)', color: '#B91C1C', padding: '6px 12px', borderRadius: '8px', fontSize: '12.5px', fontWeight: '700' }}>
                                                {s}
                                            </span>
                                        ))}
                                        {missing.length === 0 && <span style={{ fontSize: '12.5px', color: 'var(--primary-green)', fontWeight: '700' }}>All requirements met</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })()}
            </div>
        </div>
    );
}