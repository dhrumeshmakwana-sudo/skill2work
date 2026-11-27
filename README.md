# Skill2Work — Career Readiness Platform

A web app that helps students figure out which career fits them, what skills they're missing, and what to learn next — with a Readiness Score that shows how close they are.

## What's inside

- Career explorer with skill-match scores for each role
- Skill-gap check and a step-by-step learning roadmap
- Readiness Score = Skill Match × 0.6 + Roadmap Progress × 0.4
- Quizzes and an assessment to test what you know
- Dashboard and progress tracking, with a portfolio section for your work
- Login / signup — everything is saved in the browser (localStorage)

## Run it

```bash
npm install
npm start
```

Then open http://localhost:3000

## Made with

React 19 + Bootstrap, no backend, no router — pages switch with a `currentTab` state. Career data lives in `src/data/careersData.js`.

---

Made by Dhrumesh Makwana (with Krisha Metha) — a college microproject, SYIT 2, built to practise building a complete, realistic React app.
