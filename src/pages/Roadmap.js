import React, { useState } from 'react';
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
    const taskSubmissions = currentUser?.taskSubmissions || {};

    const firstIncompleteIndex = tasksList.findIndex(
        (task) => !completedTasks.includes(task.id)
    );
    const defaultIndex = firstIncompleteIndex === -1 ? 0 : firstIncompleteIndex;

    const [activeStageIndex, setActiveStageIndex] = useState(defaultIndex);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [repoUrl, setRepoUrl] = useState('');
    const [validationError, setValidationError] = useState('');
    const [successFeedback, setSuccessFeedback] = useState('');

    const completedCount = completedTasks.filter((id) =>
        tasksList.some((t) => t.id === id)
    ).length;

    const calculatedPercent =
        tasksList.length > 0
            ? Math.round((completedCount / tasksList.length) * 100)
            : 0;

    const currentTask = tasksList[activeStageIndex] || tasksList[0];
    const isCurrentStageCompleted = completedTasks.includes(currentTask?.id);

    const isStageUnlocked = (index) => {
        if (index === 0) return true;
        const previousTaskId = tasksList[index - 1]?.id;
        return completedTasks.includes(previousTaskId);
    };

    const handleSelectStage = (index) => {
        if (!isStageUnlocked(index)) {
            setValidationError(`Complete Stage ${index} before moving to this stage.`);
            setSuccessFeedback('');
            return;
        }
        setActiveStageIndex(index);
        setSelectedAnswer(null);
        setRepoUrl(taskSubmissions[tasksList[index]?.id] || '');
        setValidationError('');
        setSuccessFeedback('');
    };

    const handleCompleteStage = (e) => {
        e.preventDefault();
        setValidationError('');
        setSuccessFeedback('');

        if (!currentTask) return;

        if (currentTask.quiz && selectedAnswer !== currentTask.quiz.correctIndex) {
            setValidationError('Incorrect answer. Select the right choice to proceed.');
            return;
        }

        if (!repoUrl.trim()) {
            setValidationError('Please enter a project repository URL or milestone notes.');
            return;
        }

        const updatedCompletedTasks = completedTasks.includes(currentTask.id)
            ? completedTasks
            : [...completedTasks, currentTask.id];

        const updatedSubmissions = {
            ...taskSubmissions,
            [currentTask.id]: repoUrl.trim()
        };

        onUpdateProfile({
            completedTasks: updatedCompletedTasks,
            taskSubmissions: updatedSubmissions
        });

        setSuccessFeedback(`${currentTask.stage} successfully completed!`);

        if (activeStageIndex < tasksList.length - 1) {
            setTimeout(() => {
                setActiveStageIndex(activeStageIndex + 1);
                setSelectedAnswer(null);
                setRepoUrl('');
                setSuccessFeedback('');
                setValidationError('');
            }, 1000);
        }
    };

    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: '#0f172a' }}>
                    Learning Curriculum Roadmap
                </h2>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '4px 0 0 0' }}>
                    Curriculum Track: <strong style={{ color: '#059669' }}>{currentCareer.title}</strong>
                </p>
            </div>

            <div className="clean-card" style={{ padding: '20px 24px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                        Curriculum Completion Progress
                    </h3>
                    <span style={{ fontSize: '14px', fontWeight: '800', color: '#059669' }}>
                        {calculatedPercent}% Complete ({completedCount} of {tasksList.length} Stages)
                    </span>
                </div>
                <div style={{ background: '#f1f5f9', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
                    <div
                        style={{
                            width: `${calculatedPercent}%`,
                            background: '#10b981',
                            height: '100%',
                            borderRadius: '5px',
                            transition: 'width 0.3s ease'
                        }}
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '24px', alignItems: 'start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px 0' }}>
                        Stages Sequence
                    </h4>

                    {tasksList.map((task, idx) => {
                        const isDone = completedTasks.includes(task.id);
                        const isUnlocked = isStageUnlocked(idx);
                        const isActive = activeStageIndex === idx;

                        return (
                            <div
                                key={task.id || idx}
                                onClick={() => handleSelectStage(idx)}
                                style={{
                                    background: isActive ? '#f8fafc' : isDone ? '#ecfdf5' : isUnlocked ? '#ffffff' : '#f1f5f9',
                                    border: isActive
                                        ? '2px solid #0284c7'
                                        : isDone
                                            ? '1.5px solid #10b981'
                                            : '1px solid #cbd5e1',
                                    borderRadius: '10px',
                                    padding: '16px',
                                    cursor: isUnlocked ? 'pointer' : 'not-allowed',
                                    opacity: isUnlocked ? 1 : 0.65,
                                    transition: 'all 0.15s ease'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                    <span
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: '800',
                                            color: isDone ? '#059669' : isActive ? '#0284c7' : '#64748b',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        {task.stage || `Stage ${idx + 1}`}
                                    </span>

                                    <span
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            color: isDone ? '#059669' : isUnlocked ? '#0284c7' : '#94a3b8',
                                            background: isDone ? '#d1fae5' : isUnlocked ? '#e0f2fe' : '#e2e8f0',
                                            padding: '2px 8px',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        {isDone ? 'Completed' : isUnlocked ? (isActive ? 'Active' : 'Unlocked') : 'Locked'}
                                    </span>
                                </div>

                                <h5 style={{ fontSize: '13.5px', fontWeight: '700', color: '#0f172a', margin: 0, lineHeight: '1.4' }}>
                                    {task.title}
                                </h5>
                            </div>
                        );
                    })}
                </div>

                {currentTask && (
                    <div className="clean-card" style={{ padding: '28px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '14px', marginBottom: '18px' }}>
                            <div>
                                <span style={{ fontSize: '12px', fontWeight: '800', color: '#0284c7', textTransform: 'uppercase' }}>
                                    {currentTask.stage} Workspace
                                </span>
                                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '4px 0 0 0' }}>
                                    {currentTask.title}
                                </h3>
                            </div>

                            <span
                                style={{
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    color: isCurrentStageCompleted ? '#059669' : '#0284c7',
                                    background: isCurrentStageCompleted ? '#ecfdf5' : '#e0f2fe',
                                    padding: '4px 10px',
                                    borderRadius: '6px'
                                }}
                            >
                                {isCurrentStageCompleted ? 'Status: Verified' : 'Status: In Progress'}
                            </span>
                        </div>

                        <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
                            {currentTask.description}
                        </p>

                        {validationError && (
                            <div
                                style={{
                                    background: '#fef2f2',
                                    border: '1px solid #fecaca',
                                    color: '#dc2626',
                                    padding: '10px 14px',
                                    borderRadius: '6px',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    marginBottom: '16px'
                                }}
                            >
                                {validationError}
                            </div>
                        )}

                        {successFeedback && (
                            <div
                                style={{
                                    background: '#ecfdf5',
                                    border: '1px solid #a7f3d0',
                                    color: '#065f46',
                                    padding: '10px 14px',
                                    borderRadius: '6px',
                                    fontSize: '13px',
                                    fontWeight: '700',
                                    marginBottom: '16px'
                                }}
                            >
                                {successFeedback} Advancing to next stage...
                            </div>
                        )}

                        <form onSubmit={handleCompleteStage}>
                            {currentTask.quiz && (
                                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', marginBottom: '20px' }}>
                                    <h5 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>
                                        Concept Check: {currentTask.quiz.question}
                                    </h5>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {currentTask.quiz.options.map((option, optIdx) => (
                                            <label
                                                key={optIdx}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    fontSize: '13px',
                                                    color: '#334155',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`quiz-${currentTask.id}`}
                                                    checked={selectedAnswer === optIdx || (isCurrentStageCompleted && optIdx === currentTask.quiz.correctIndex)}
                                                    onChange={() => setSelectedAnswer(optIdx)}
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                                    Project Submission / GitHub Repository URL
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="https://github.com/username/project-repo"
                                    value={repoUrl}
                                    onChange={(e) => setRepoUrl(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px 12px',
                                        border: '1.5px solid #cbd5e1',
                                        borderRadius: '8px',
                                        fontSize: '13.5px',
                                        outline: 'none',
                                        boxSizing: 'border-box'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary-blue"
                                style={{
                                    width: '100%',
                                    padding: '11px',
                                    fontSize: '14px',
                                    fontWeight: '700',
                                    borderRadius: '6px'
                                }}
                            >
                                {isCurrentStageCompleted ? 'Update Milestone Submission' : 'Verify & Unlock Next Stage'}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}