import React, { useState, useEffect } from 'react';
import './App.css';
import { CAREERS_DATA } from './data/careersData';

import AppNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Assessment from './pages/Assessment';
import Recommendations from './pages/Recommendations';
import SkillGap from './pages/SkillGap';
import Roadmap from './pages/Roadmap';
import Readiness from './pages/Readiness';
import Progress from './pages/Progress';
import Profile from './pages/Profile';

export default function App() {
  const [usersDb, setUsersDb] = useState(() => {
    const saved = localStorage.getItem('skill2work_users_db');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeEmail, setActiveEmail] = useState(() => {
    return localStorage.getItem('skill2work_active_user') || null;
  });

  const [currentTab, setCurrentTab] = useState(() => {
    return localStorage.getItem('skill2work_active_user') ? 'dashboard' : 'landing';
  });

  const [authError, setAuthError] = useState('');

  useEffect(() => {
    localStorage.setItem('skill2work_users_db', JSON.stringify(usersDb));
  }, [usersDb]);

  useEffect(() => {
    if (activeEmail) {
      localStorage.setItem('skill2work_active_user', activeEmail);
    } else {
      localStorage.removeItem('skill2work_active_user');
    }
  }, [activeEmail]);

  const currentUser = usersDb.find((u) => u.email === activeEmail) || null;

  const handleUpdateProfile = (updates) => {
    if (!currentUser) return;
    setUsersDb((prev) =>
      prev.map((user) => {
        if (user.email === activeEmail) {
          return { ...user, ...updates };
        }
        return user;
      })
    );
  };

  const handleAuthSubmit = ({ email, password, fullName }) => {
    setAuthError('');
    const cleanEmail = email.trim().toLowerCase();

    if (currentTab === 'signup') {
      const exists = usersDb.some((u) => u.email.toLowerCase() === cleanEmail);
      if (exists) {
        setAuthError('An account with this email already exists.');
        return;
      }
      const newUser = {
        email: cleanEmail,
        password,
        fullName: fullName.trim() || 'New Candidate',
        educationLevel: "Bachelor's Degree",
        targetCareerId: 'frontend',
        technicalSkills: [],
        softSkills: [],
        interests: [],
        completedTasks: [],
        taskSubmissions: {},
        bio: ''
      };
      setUsersDb((prev) => [...prev, newUser]);
      setActiveEmail(newUser.email);
      setCurrentTab('assessment');
    } else {
      const found = usersDb.find(
        (u) => u.email.toLowerCase() === cleanEmail && u.password === password
      );
      if (!found) {
        setAuthError('Invalid email or password.');
        return;
      }
      setActiveEmail(found.email);
      setCurrentTab('dashboard');
    }
  };

  const handleLogout = () => {
    setActiveEmail(null);
    setCurrentTab('landing');
  };

  // Real-time calculations derived strictly from state and localStorage
  const activeCareer = currentUser
    ? CAREERS_DATA.find((c) => c.id === currentUser.targetCareerId) || CAREERS_DATA[0]
    : CAREERS_DATA[0];

  const userSkills = currentUser?.technicalSkills || [];
  const completedTasks = currentUser?.completedTasks || [];

  const matchingSkills = activeCareer.requiredSkills.filter((s) => userSkills.includes(s));
  const missingSkills = activeCareer.requiredSkills.filter((s) => !userSkills.includes(s));

  const skillMatchPercent = activeCareer.requiredSkills.length > 0
    ? Math.round((matchingSkills.length / activeCareer.requiredSkills.length) * 100)
    : 0;

  const roadmapPercent = activeCareer.roadmap.length > 0
    ? Math.round((completedTasks.length / activeCareer.roadmap.length) * 100)
    : 0;

  const readinessScore = Math.min(
    Math.round(skillMatchPercent * 0.6 + roadmapPercent * 0.4),
    100
  );

  return (
    <div className="app-container">
      <AppNavbar
        currentUser={currentUser}
        onLogout={handleLogout}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {!currentUser ? (
        <main style={{ flex: 1 }}>
          {currentTab === 'landing' && <Landing setCurrentTab={setCurrentTab} />}
          {(currentTab === 'login' || currentTab === 'signup') && (
            <Auth
              type={currentTab}
              onAuthSubmit={handleAuthSubmit}
              authError={authError}
              setCurrentTab={setCurrentTab}
            />
          )}
        </main>
      ) : (
        <div className="app-dashboard-body">
          <Sidebar
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            onLogout={handleLogout}
          />

          <main className="dashboard-main-content">
            {currentTab === 'dashboard' && (
              <Dashboard
                currentUser={currentUser}
                activeCareer={activeCareer}
                readinessScore={readinessScore}
                skillMatchPercent={skillMatchPercent}
                roadmapPercent={roadmapPercent}
                missingSkills={missingSkills}
                setCurrentTab={setCurrentTab}
              />
            )}

            {currentTab === 'assessment' && (
              <Assessment
                currentUser={currentUser}
                onUpdateProfile={handleUpdateProfile}
              />
            )}

            {currentTab === 'recommendations' && (
              <Recommendations
                currentUser={currentUser}
                onUpdateProfile={handleUpdateProfile}
                setCurrentTab={setCurrentTab}
              />
            )}

            {currentTab === 'skillgap' && (
              <SkillGap
                activeCareer={activeCareer}
                matchingSkills={matchingSkills}
                missingSkills={missingSkills}
                skillMatchPercent={skillMatchPercent}
              />
            )}

            {currentTab === 'roadmap' && (
              <Roadmap
                activeCareer={activeCareer}
                currentUser={currentUser}
                onUpdateProfile={handleUpdateProfile}
                roadmapPercent={roadmapPercent}
              />
            )}

            {currentTab === 'readiness' && (
              <Readiness
                readinessScore={readinessScore}
                skillMatchPercent={skillMatchPercent}
                roadmapPercent={roadmapPercent}
                currentUser={currentUser}
              />
            )}

            {currentTab === 'progress' && (
              <Progress
                readinessScore={readinessScore}
                currentUser={currentUser}
                activeCareer={activeCareer}
                skillMatchPercent={skillMatchPercent}
                roadmapPercent={roadmapPercent}
              />
            )}

            {currentTab === 'profile' && (
              <Profile
                currentUser={currentUser}
                onUpdateProfile={handleUpdateProfile}
              />
            )}
          </main>
        </div>
      )}
    </div>
  );
}