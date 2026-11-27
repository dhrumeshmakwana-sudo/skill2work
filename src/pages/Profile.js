import React, { useState } from 'react';
import {
    CAREERS_DATA,
    EDUCATION_LEVELS,
    TECHNICAL_SKILLS,
    SOFT_SKILLS,
    INTERESTS
} from '../data/careersData';

export default function Profile({ currentUser, onUpdateProfile }) {
    const [fullName, setFullName] = useState(currentUser?.fullName || '');
    const [educationLevel, setEducationLevel] = useState(
        currentUser?.educationLevel || "Bachelor's Degree"
    );
    const [targetCareerId, setTargetCareerId] = useState(
        currentUser?.targetCareerId || CAREERS_DATA[0]?.id || 'data-analyst'
    );
    const [technicalSkills, setTechnicalSkills] = useState(
        currentUser?.technicalSkills || []
    );
    const [softSkills, setSoftSkills] = useState(
        currentUser?.softSkills || ['Communication', 'Problem Solving']
    );
    const [interests, setInterests] = useState(
        currentUser?.interests || ['Web Development', 'Data Analytics']
    );
    const [bio, setBio] = useState(
        currentUser?.bio || 'Passionate learner focused on building high-impact technological solutions.'
    );
    const [savedSuccess, setSavedSuccess] = useState(false);

    const toggleSkill = (skill, list, setList) => {
        if (list.includes(skill)) {
            setList(list.filter((item) => item !== skill));
        } else {
            setList([...list, skill]);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        onUpdateProfile({
            fullName,
            educationLevel,
            targetCareerId,
            technicalSkills,
            softSkills,
            interests,
            bio
        });
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 3000);
    };

    const activeTargetCareer =
        CAREERS_DATA.find((c) => c.id === targetCareerId) || CAREERS_DATA[0];

    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {/* Top Banner & Header Card */}
            <div
                style={{
                    background: 'linear-gradient(135deg, #0c2340 0%, #1e3a5f 100%)',
                    borderRadius: '16px',
                    padding: '32px 36px',
                    color: '#ffffff',
                    marginBottom: '28px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: '0 4px 20px rgba(12, 35, 64, 0.12)',
                    borderBottom: '3px solid #0284c7'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            border: '3px solid #38bdf8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '38px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                        }}
                    >

                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <h2 style={{ fontSize: '26px', fontWeight: '800', margin: 0 }}>
                                {fullName || 'Candidate Profile'}
                            </h2>
                            <span
                                style={{
                                    background: '#10b981',
                                    color: '#ffffff',
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    padding: '3px 10px',
                                    borderRadius: '20px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                Active Candidate
                            </span>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '13.5px', margin: '6px 0 0 0' }}>
                            Target Role: <strong style={{ color: '#38bdf8' }}>{activeTargetCareer?.title}</strong> • {currentUser?.email}
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleSave}
                    style={{
                        backgroundColor: '#0284c7',
                        color: '#ffffff',
                        border: 'none',
                        padding: '10px 22px',
                        borderRadius: '8px',
                        fontSize: '13.5px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(2, 132, 199, 0.3)',
                        transition: 'all 0.15s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#0369a1';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#0284c7';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    {savedSuccess ? 'Profile Saved' : 'Save Profile'}
                </button>

            </div>

            {savedSuccess && (
                <div
                    style={{
                        background: '#ecfdf5',
                        border: '1.5px solid #a7f3d0',
                        color: '#065f46',
                        padding: '12px 20px',
                        borderRadius: '10px',
                        fontSize: '14px',
                        fontWeight: '700',
                        marginBottom: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    <span>✔</span> Profile changes synced to localStorage successfully!
                </div>
            )}

            {/* Main Form Body (2-Column Grid) */}
            <form onSubmit={handleSave}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '24px' }}>

                    {/* Left Column: Account Details & Education */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div className="clean-card">
                            <h3 className="clean-card-title" style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                                Account Information
                            </h3>

                            <div style={{ marginBottom: '18px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px 14px',
                                        border: '1.5px solid #cbd5e1',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        outline: 'none',
                                        backgroundColor: '#ffffff'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '18px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                                    Email Address (Verified)
                                </label>
                                <input
                                    type="email"
                                    disabled
                                    value={currentUser?.email || ''}
                                    style={{
                                        width: '100%',
                                        padding: '10px 14px',
                                        border: '1.5px solid #e2e8f0',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        backgroundColor: '#f8fafc',
                                        color: '#64748b',
                                        cursor: 'not-allowed'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '18px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                                    Education Level
                                </label>
                                <select
                                    value={educationLevel}
                                    onChange={(e) => setEducationLevel(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px 14px',
                                        border: '1.5px solid #cbd5e1',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        outline: 'none',
                                        backgroundColor: '#ffffff'
                                    }}
                                >
                                    {EDUCATION_LEVELS.map((edu) => (
                                        <option key={edu} value={edu}>
                                            {edu}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div style={{ marginBottom: '18px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                                    Target Career Goal
                                </label>
                                <select
                                    value={targetCareerId}
                                    onChange={(e) => setTargetCareerId(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px 14px',
                                        border: '1.5px solid #cbd5e1',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        outline: 'none',
                                        backgroundColor: '#ffffff'
                                    }}
                                >
                                    {CAREERS_DATA.map((career) => (
                                        <option key={career.id} value={career.id}>
                                            {career.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                                    Professional Bio
                                </label>
                                <textarea
                                    rows={3}
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    placeholder="Summarize your career goals and technical background..."
                                    style={{
                                        width: '100%',
                                        padding: '10px 14px',
                                        border: '1.5px solid #cbd5e1',
                                        borderRadius: '8px',
                                        fontSize: '13.5px',
                                        outline: 'none',
                                        backgroundColor: '#ffffff',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Skills & Interests Selector */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                        {/* Technical Skills */}
                        <div className="clean-card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                                <h3 className="clean-card-title" style={{ margin: 0 }}>
                                    Technical Competencies
                                </h3>
                                <span style={{ fontSize: '12px', fontWeight: '700', color: '#0284c7', background: '#e0f2fe', padding: '2px 8px', borderRadius: '6px' }}>
                                    {technicalSkills.length} Selected
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {TECHNICAL_SKILLS.map((skill) => {
                                    const selected = technicalSkills.includes(skill);
                                    return (
                                        <button
                                            type="button"
                                            key={skill}
                                            onClick={() => toggleSkill(skill, technicalSkills, setTechnicalSkills)}
                                            style={{
                                                padding: '6px 12px',
                                                borderRadius: '6px',
                                                border: selected ? '1.5px solid #0284c7' : '1px solid #cbd5e1',
                                                background: selected ? '#e0f2fe' : '#ffffff',
                                                color: selected ? '#0369a1' : '#334155',
                                                fontSize: '12.5px',
                                                fontWeight: selected ? '700' : '500',
                                                cursor: 'pointer',
                                                transition: 'all 0.15s ease'
                                            }}
                                        >
                                            {selected ? '✔ ' : '+ '} {skill}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div className="clean-card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                                <h3 className="clean-card-title" style={{ margin: 0 }}>
                                    Soft Skills & Leadership
                                </h3>
                                <span style={{ fontSize: '12px', fontWeight: '700', color: '#059669', background: '#ecfdf5', padding: '2px 8px', borderRadius: '6px' }}>
                                    {softSkills.length} Selected
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {SOFT_SKILLS.map((skill) => {
                                    const selected = softSkills.includes(skill);
                                    return (
                                        <button
                                            type="button"
                                            key={skill}
                                            onClick={() => toggleSkill(skill, softSkills, setSoftSkills)}
                                            style={{
                                                padding: '6px 12px',
                                                borderRadius: '6px',
                                                border: selected ? '1.5px solid #10b981' : '1px solid #cbd5e1',
                                                background: selected ? '#ecfdf5' : '#ffffff',
                                                color: selected ? '#065f46' : '#334155',
                                                fontSize: '12.5px',
                                                fontWeight: selected ? '700' : '500',
                                                cursor: 'pointer',
                                                transition: 'all 0.15s ease'
                                            }}
                                        >
                                            {selected ? '✔ ' : '+ '} {skill}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Primary Interests */}
                        <div className="clean-card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                                <h3 className="clean-card-title" style={{ margin: 0 }}>
                                    Career & Industry Interests
                                </h3>
                                <span style={{ fontSize: '12px', fontWeight: '700', color: '#ea580c', background: '#fff7ed', padding: '2px 8px', borderRadius: '6px' }}>
                                    {interests.length} Selected
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {INTERESTS.map((interest) => {
                                    const selected = interests.includes(interest);
                                    return (
                                        <button
                                            type="button"
                                            key={interest}
                                            onClick={() => toggleSkill(interest, interests, setInterests)}
                                            style={{
                                                padding: '6px 12px',
                                                borderRadius: '6px',
                                                border: selected ? '1.5px solid #ea580c' : '1px solid #cbd5e1',
                                                background: selected ? '#fff7ed' : '#ffffff',
                                                color: selected ? '#9a3412' : '#334155',
                                                fontSize: '12.5px',
                                                fontWeight: selected ? '700' : '500',
                                                cursor: 'pointer',
                                                transition: 'all 0.15s ease'
                                            }}
                                        >
                                            {selected ? '✔ ' : '+ '} {interest}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}