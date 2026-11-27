import React from 'react';
import { CAREERS_DATA } from '../data/careersData';

export default function Roadmap({
    activeCareer,
    currentUser,
    onUpdateProfile = () => { },
    roadmapPercent = 0
}) {
    const currentCareer =
        activeCareer ||
        CAREERS_DATA.find((c) => c.id === currentUser?.targetCareerId) ||
        CAREERS_DATA[0];

    const tasksList = currentCareer.roadmap || [];
    const completedTasks = currentUser?.completedTasks || [];
    const completedCount = completedTasks.filter((id) =>
        tasksList.some((t) => t.id === id)
    ).length;

    const calculatedPercent =
        tasksList.length > 0
            ? Math.round((completedCount / tasksList.length) * 100)
            : 0;

    const handleToggle = (taskId) => {
        let nextTasks = [];
        if (completedTasks.includes(taskId)) {
            nextTasks = completedTasks.filter((id) => id !== taskId);
        } else {
            nextTasks = [...completedTasks, taskId];
        }
        onUpdateProfile({ completedTasks: nextTasks });
    };

    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {/* Top Main Heading */}
            <div style={{ marginBottom: '28px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#0f172a' }}>
                    Learning Curriculum Roadmap
                </h2>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '4px 0 0 0' }}>
                    Follow this structured vertical timeline customized for your target career:{' '}
                    <strong style={{ color: '#059669' }}>{currentCareer.title}</strong>.
                </p>
            </div>

            {/* Main 2-Column Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '24px', alignItems: 'start' }}>

                {/* Left Column: Interactive Milestone Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                    {/* Progress Header Card */}
                    <div className="clean-card" style={{ padding: '20px 24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                                Curriculum Completion
                            </h3>
                            <span style={{ fontSize: '14px', fontWeight: '800', color: '#059669' }}>
                                {calculatedPercent}% Completed
                            </span>
                        </div>
                        <div style={{ background: '#f1f5f9', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                            <div
                                style={{
                                    width: `${calculatedPercent}%`,
                                    background: '#10b981',
                                    height: '100%',
                                    borderRadius: '4px',
                                    transition: 'width 0.3s ease'
                                }}
                            />
                        </div>
                    </div>

                    {/* Interactive Checkable Stages */}
                    {tasksList.map((task, idx) => {
                        const isDone = completedTasks.includes(task.id);
                        return (
                            <div
                                key={task.id || idx}
                                onClick={() => handleToggle(task.id)}
                                style={{
                                    background: isDone ? '#ecfdf5' : '#ffffff',
                                    border: isDone ? '1.5px solid #10b981' : '1px solid #e2e8f0',
                                    borderRadius: '14px',
                                    padding: '18px 20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    cursor: 'pointer',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                                    transition: 'all 0.15s ease'
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.borderColor = '#10b981')}
                                onMouseOut={(e) =>
                                    (e.currentTarget.style.borderColor = isDone ? '#10b981' : '#e2e8f0')
                                }
                            >
                                {/* Custom Checkbox */}
                                <div
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '6px',
                                        border: isDone ? 'none' : '2px solid #cbd5e1',
                                        background: isDone ? '#10b981' : '#ffffff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff',
                                        fontWeight: '800',
                                        fontSize: '13px',
                                        flexShrink: 0
                                    }}
                                >
                                    {isDone ? '✔' : ''}
                                </div>

                                {/* Milestone Details */}
                                <div style={{ flex: 1 }}>
                                    <span
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            color: isDone ? '#059669' : '#64748b',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        {task.stage || `STAGE ${idx + 1}`}
                                    </span>
                                    <h4
                                        style={{
                                            fontSize: '14.5px',
                                            fontWeight: isDone ? '800' : '600',
                                            color: isDone ? '#065f46' : '#0f172a',
                                            margin: '3px 0 0 0',
                                            lineHeight: '1.4'
                                        }}
                                    >
                                        {task.title}
                                    </h4>
                                </div>

                                {/* Status Badge */}
                                <span
                                    style={{
                                        fontSize: '11.5px',
                                        fontWeight: '700',
                                        color: isDone ? '#059669' : '#94a3b8',
                                        background: isDone ? '#d1fae5' : 'transparent',
                                        padding: isDone ? '3px 8px' : '0',
                                        borderRadius: '6px'
                                    }}
                                >
                                    {isDone ? 'Completed' : 'Pending'}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Right Column: Dynamic Circular Widget & Commitment */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    {/* Circular Progress Ring Widget */}
                    <div className="clean-card" style={{ textAlign: 'center', padding: '36px 20px' }}>
                        <span
                            style={{
                                fontSize: '12px',
                                fontWeight: '800',
                                color: '#64748b',
                                letterSpacing: '0.8px',
                                textTransform: 'uppercase'
                            }}
                        >
                            Curriculum Progress
                        </span>

                        <div
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: `conic-gradient(#10b981 ${calculatedPercent * 3.6}deg, #e2e8f0 0deg)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '20px auto 14px auto'
                            }}
                        >
                            <div
                                style={{
                                    width: '96px',
                                    height: '96px',
                                    borderRadius: '50%',
                                    background: '#ffffff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <span style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', lineHeight: 1 }}>
                                    {calculatedPercent}%
                                </span>
                                <span style={{ fontSize: '10px', color: '#64748b', fontWeight: '600', marginTop: '2px' }}>
                                    Complete
                                </span>
                            </div>
                        </div>

                        <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                            <strong style={{ color: '#0f172a' }}>{completedCount}</strong> of{' '}
                            <strong style={{ color: '#0f172a' }}>{tasksList.length}</strong> milestones successfully checked off.
                        </p>
                    </div>

                    {/* Estimated Commitment Card */}
                    <div className="clean-card" style={{ padding: '24px' }}>
                        <h4 style={{ fontSize: '13px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
                            Estimated Commitment
                        </h4>
                        <div style={{ fontSize: '24px', fontWeight: '800', color: '#059669', marginBottom: '8px' }}>
                            3–4 Months
                        </div>
                        <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.55' }}>
                            Based on a commitment of 8–10 study hours per week. Spend time building portfolios, completing code labs, and testing.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}