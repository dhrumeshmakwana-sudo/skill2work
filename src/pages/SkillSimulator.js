import React, { useState } from 'react';
import { Card, Row, Col, Button, Badge, ProgressBar } from 'react-bootstrap';
import { ALL_TECH_SKILLS } from '../data/careersData';

export default function SkillSimulator({ currentUser, activeCareer, onUpdateProfile }) {
    // Temporary simulated skills list initialized with user's verified skills
    const [simulatedSkills, setSimulatedSkills] = useState([...currentUser.technicalSkills]);

    const toggleSimulatedSkill = (skill) => {
        if (simulatedSkills.includes(skill)) {
            setSimulatedSkills(simulatedSkills.filter(s => s !== skill));
        } else {
            setSimulatedSkills([...simulatedSkills, skill]);
        }
    };

    // Live simulation math
    const matching = activeCareer.requiredSkills.filter(s => simulatedSkills.includes(s));
    const simMatchPercent = Math.round((matching.length / activeCareer.requiredSkills.length) * 100);
    const roadmapPercent = Math.round(((currentUser.completedTasks?.length || 0) / activeCareer.roadmap.length) * 100);

    const simulatedScore = Math.min(
        Math.round(
            (simMatchPercent * 0.40) +
            (roadmapPercent * 0.25) +
            ((currentUser.projects?.length || 0) * 10) +
            ((currentUser.quizScores?.length || 0) * 5)
        ),
        100
    );

    const applyChangesToProfile = () => {
        onUpdateProfile({ technicalSkills: simulatedSkills });
        alert('Simulated skills applied directly to your official profile!');
    };

    return (
        <Card className="card-glass">
            <Card.Header className="bg-transparent border-0 pt-4 px-4">
                <h4 className="text-light fw-bold mb-1"> Interactive AI Skill Simulator</h4>
                <p className="text-muted fs-7 mb-0">
                    Preview how learning upcoming technologies will immediately raise your Job-Readiness Score.
                </p>
            </Card.Header>

            <Card.Body className="p-4">
                {/* Forecast Comparison Box */}
                <Row className="g-3 mb-4">
                    <Col md={6}>
                        <div className="p-3 rounded bg-dark border border-secondary">
                            <span className="text-muted fs-8 text-uppercase fw-bold">Projected Readiness Score</span>
                            <div className="d-flex align-items-baseline gap-2 mt-2">
                                <span className="display-6 fw-bold text-gradient">{simulatedScore}</span>
                                <span className="text-muted">/ 100</span>
                            </div>
                            <ProgressBar now={simulatedScore} variant="info" className="mt-2" style={{ height: '6px' }} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="p-3 rounded bg-dark border border-secondary">
                            <span className="text-muted fs-8 text-uppercase fw-bold">Projected Role Match</span>
                            <div className="d-flex align-items-baseline gap-2 mt-2">
                                <span className="display-6 fw-bold text-success">{simMatchPercent}%</span>
                                <span className="text-muted">alignment</span>
                            </div>
                            <ProgressBar now={simMatchPercent} variant="success" className="mt-2" style={{ height: '6px' }} />
                        </div>
                    </Col>
                </Row>

                <h6 className="text-muted text-uppercase fs-8 fw-bold mb-2">Toggle Simulated Skills:</h6>
                <div className="d-flex flex-wrap gap-2 mb-4">
                    {ALL_TECH_SKILLS.map((skill) => {
                        const isSimulated = simulatedSkills.includes(skill);
                        const isRequired = activeCareer.requiredSkills.includes(skill);

                        return (
                            <Button
                                key={skill}
                                size="sm"
                                variant={isSimulated ? 'primary' : 'outline-secondary'}
                                onClick={() => toggleSimulatedSkill(skill)}
                                className="rounded-pill px-3"
                            >
                                {isSimulated ? `✓ ${skill}` : `+ ${skill}`}
                                {isRequired && <Badge bg="warning" text="dark" className="ms-2 fs-8">Required</Badge>}
                            </Button>
                        );
                    })}
                </div>

                <div className="d-flex gap-3">
                    <Button className="btn-glow" onClick={applyChangesToProfile}>
                        Apply Changes to Profile
                    </Button>
                    <Button variant="outline-light" onClick={() => setSimulatedSkills([...currentUser.technicalSkills])}>
                        Reset Simulation
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}