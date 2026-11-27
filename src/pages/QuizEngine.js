import React, { useState } from 'react';
import { Card, Button, Form, Alert, Badge } from 'react-bootstrap';

export default function QuizEngine({ activeCareer, currentUser, onUpdateProfile }) {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleSelect = (questionId, optionIdx) => {
        setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIdx });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let earned = 0;
        activeCareer.quiz.forEach((q) => {
            if (selectedAnswers[q.id] === q.correctIndex) {
                earned += 1;
            }
        });

        setScore(earned);
        setQuizSubmitted(true);

        const existingScores = currentUser.quizScores || [];
        const record = { careerId: activeCareer.id, score: earned, total: activeCareer.quiz.length, date: new Date().toLocaleDateString() };
        onUpdateProfile({ quizScores: [...existingScores.filter(s => s.careerId !== activeCareer.id), record] });
    };

    return (
        <Card className="card-glass">
            <Card.Header className="bg-transparent border-0 pt-4 px-4 d-flex justify-content-between align-items-center">
                <div>
                    <h4 className="text-light fw-bold mb-1"> Technical Knowledge Verification</h4>
                    <p className="text-muted fs-7 mb-0">Test your conceptual knowledge for {activeCareer.title} to earn readiness points.</p>
                </div>
                <Badge bg="info" className="px-3 py-2 rounded-pill fs-8">Points Earned: +5 pts per passed quiz</Badge>
            </Card.Header>

            <Card.Body className="p-4">
                {quizSubmitted && (
                    <Alert variant={score === activeCareer.quiz.length ? 'success' : 'warning'} className="mb-4">
                        You scored <strong>{score} / {activeCareer.quiz.length}</strong>! {score === activeCareer.quiz.length ? 'Readiness score updated.' : 'Review concepts and try again.'}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    {activeCareer.quiz.map((q, idx) => (
                        <div key={q.id} className="p-3 mb-3 rounded bg-dark border border-secondary">
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-primary fw-bold fs-7">Question {idx + 1} ({q.skill})</span>
                            </div>
                            <p className="text-light mb-3">{q.question}</p>

                            {q.options.map((opt, optIdx) => (
                                <Form.Check
                                    key={optIdx}
                                    type="radio"
                                    id={`${q.id}-${optIdx}`}
                                    label={opt}
                                    name={q.id}
                                    checked={selectedAnswers[q.id] === optIdx}
                                    onChange={() => handleSelect(q.id, optIdx)}
                                    className="text-muted mb-2"
                                />
                            ))}
                        </div>
                    ))}

                    <Button type="submit" className="btn-glow px-4 mt-2">
                        Submit Assessment
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}