import React, { useState } from 'react';
import { Card, Form, Button, Table, Badge } from 'react-bootstrap';

export default function PortfolioEvidence({ currentUser, onUpdateProfile }) {
    const [projectTitle, setProjectTitle] = useState('');
    const [techStack, setTechStack] = useState('');
    const [githubUrl, setGithubUrl] = useState('');

    const handleAddProject = (e) => {
        e.preventDefault();
        if (!projectTitle) return;

        const newProject = {
            id: Date.now(),
            title: projectTitle,
            techStack,
            githubUrl: githubUrl || 'https://github.com',
            verified: true
        };

        const currentProjects = currentUser.projects || [];
        onUpdateProfile({ projects: [...currentProjects, newProject] });

        setProjectTitle('');
        setTechStack('');
        setGithubUrl('');
    };

    const handleRemove = (id) => {
        const updated = (currentUser.projects || []).filter(p => p.id !== id);
        onUpdateProfile({ projects: updated });
    };

    return (
        <Card className="card-glass">
            <Card.Header className="bg-transparent border-0 pt-4 px-4">
                <h4 className="text-light fw-bold mb-1"> Portfolio & Evidence Repository</h4>
                <p className="text-muted fs-7 mb-0">Log capstone code repositories. Each verified project adds +10 pts directly to your readiness index.</p>
            </Card.Header>

            <Card.Body className="p-4">
                <Form onSubmit={handleAddProject} className="p-3 mb-4 rounded bg-dark border border-secondary">
                    <h6 className="text-light fw-bold mb-3">Add New Portfolio Capstone</h6>
                    <div className="row g-2 mb-3">
                        <div className="col-md-4">
                            <Form.Control
                                type="text"
                                placeholder="Project Title (e.g. E-Commerce SPA)"
                                value={projectTitle}
                                onChange={(e) => setProjectTitle(e.target.value)}
                                required
                                className="bg-dark text-light border-secondary"
                            />
                        </div>
                        <div className="col-md-4">
                            <Form.Control
                                type="text"
                                placeholder="Tech Stack (e.g. React, Bootstrap)"
                                value={techStack}
                                onChange={(e) => setTechStack(e.target.value)}
                                className="bg-dark text-light border-secondary"
                            />
                        </div>
                        <div className="col-md-4">
                            <Form.Control
                                type="url"
                                placeholder="GitHub / Live Demo Link"
                                value={githubUrl}
                                onChange={(e) => setGithubUrl(e.target.value)}
                                className="bg-dark text-light border-secondary"
                            />
                        </div>
                    </div>
                    <Button type="submit" className="btn-glow btn-sm">
                        + Log Verified Project
                    </Button>
                </Form>

                <h6 className="text-light fw-bold mb-3">Verified Project Artifacts ({(currentUser.projects || []).length})</h6>
                <Table responsive variant="dark" className="border border-secondary rounded">
                    <thead>
                        <tr className="text-muted fs-8 text-uppercase">
                            <th>Project Title</th>
                            <th>Tech Stack</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(currentUser.projects || []).map((p) => (
                            <tr key={p.id} className="align-middle">
                                <td className="fw-semibold text-light">{p.title}</td>
                                <td className="text-muted">{p.techStack}</td>
                                <td><Badge bg="success">Verified (+10 pts)</Badge></td>
                                <td>
                                    <Button variant="outline-danger" size="sm" onClick={() => handleRemove(p.id)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        {(!currentUser.projects || currentUser.projects.length === 0) && (
                            <tr>
                                <td colSpan={4} className="text-center text-muted py-3">
                                    No verified projects logged yet. Add your first project above.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}