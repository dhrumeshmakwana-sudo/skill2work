import React, { useState } from 'react';
import {
    CAREERS_DATA,
    EDUCATION_LEVELS,
    TECHNICAL_SKILLS,
    SOFT_SKILLS,
    INTERESTS
} from '../data/careersData';

export default function Assessment({ currentUser, onUpdateProfile }) {
    const [targetCareerId, setTargetCareerId] = useState(currentUser?.targetCareerId || 'frontend');
    const [educationLevel, setEducationLevel] = useState(currentUser?.educationLevel || "Bachelor's Degree");
    const [technicalSkills, setTechnicalSkills] = useState(currentUser?.technicalSkills || []);
    const [softSkills, setSoftSkills] = useState(currentUser?.softSkills || []);
    const [interests, setInterests] = useState(currentUser?.interests || []);
    const [isSaved, setIsSaved] = useState(false);

    const toggleItem = (item, list, setList) => {
        if (list.includes(item)) {
            setList(list.filter((x) => x !== item));
        } else {
            setList([...list, item]);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        onUpdateProfile({
            targetCareerId,
            educationLevel,
            technicalSkills,
            softSkills,
            interests
        });
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2500);
    };

    return (
        <>
            <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h2 style={{ fontSize: '26px', fontWeight: '800', margin: 0, color: '#0f172a' }}>
                    Career Assessment
                </h2>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '4px 0 0 0' }}>
                    Select your competencies to recalculate your real-time matches and readiness score.
                </p>
            </div>

            <button
                type="button"
                onClick={handleSave}
                style={{
                    backgroundColor: '#059669',
                    color: '#ffffff',
                    border: 'none',
                    padding: '11px 22px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(5, 150, 105, 0.25)',
                    transition: 'all 0.15s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#047857';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#059669';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                {isSaved ? 'Saved Successfully' : 'Save Assessment'}
            </button>
        </div>

            {
        isSaved && (
            <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#065f46', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontWeight: '700' }}>
                ✔ Selections successfully saved and calculated!
            </div>
        )
    }

    {/* Target Goal & Education Row */ }
    <div className="clean-card" style={{ marginBottom: '20px' }}>
        <h4 className="clean-card-title">Background & Career Focus</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Target Career Role
                </label>
                <select
                    value={targetCareerId}
                    onChange={(e) => setTargetCareerId(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1.5px solid #cbd5e1' }}
                >
                    {CAREERS_DATA.map((c) => (
                        <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                </select>
            </div>

            <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                    Current Education Level
                </label>
                <select
                    value={educationLevel}
                    onChange={(e) => setEducationLevel(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1.5px solid #cbd5e1' }}
                >
                    {EDUCATION_LEVELS.map((e) => (
                        <option key={e} value={e}>{e}</option>
                    ))}
                </select>
            </div>
        </div>
    </div>

    {/* Technical Skills Selection */ }
    <div className="clean-card" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h4 className="clean-card-title" style={{ margin: 0 }}>Technical Competencies</h4>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#059669' }}>{technicalSkills.length} selected</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {TECHNICAL_SKILLS.map((skill) => {
                const isSelected = technicalSkills.includes(skill);
                return (
                    <button
                        type="button"
                        key={skill}
                        onClick={() => toggleItem(skill, technicalSkills, setTechnicalSkills)}
                        className={`skill-pill ${isSelected ? 'selected' : ''}`}
                    >
                        {isSelected ? '✔' : '+'} {skill}
                    </button>
                );
            })}
        </div>
    </div>

    {/* Soft Skills Selection */ }
    <div className="clean-card" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h4 className="clean-card-title" style={{ margin: 0 }}>Soft Skills</h4>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#059669' }}>{softSkills.length} selected</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {SOFT_SKILLS.map((skill) => {
                const isSelected = softSkills.includes(skill);
                return (
                    <button
                        type="button"
                        key={skill}
                        onClick={() => toggleItem(skill, softSkills, setSoftSkills)}
                        className={`skill-pill ${isSelected ? 'selected' : ''}`}
                    >
                        {isSelected ? '✔' : '+'} {skill}
                    </button>
                );
            })}
        </div>
    </div>

    {/* Interests Selection */ }
    <div className="clean-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <h4 className="clean-card-title" style={{ margin: 0 }}>Areas of Interest</h4>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#059669' }}>{interests.length} selected</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {INTERESTS.map((interest) => {
                const isSelected = interests.includes(interest);
                return (
                    <button
                        type="button"
                        key={interest}
                        onClick={() => toggleItem(interest, interests, setInterests)}
                        className={`skill-pill ${isSelected ? 'selected' : ''}`}
                    >
                        {isSelected ? '✔' : '+'} {interest}
                    </button>
                );
            })}
        </div>
    </div>
        </>
    );
}