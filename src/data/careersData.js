export const CAREERS_DATA = [
    {
        id: 'frontend',
        title: 'Frontend Developer',
        description: 'Design and develop responsive, accessible, interactive web applications.',
        requiredSkills: ['JavaScript', 'React', 'HTML', 'CSS', 'Git', 'TypeScript'],
        importance: {
            JavaScript: 'Critical',
            React: 'Critical',
            HTML: 'High',
            CSS: 'High',
            Git: 'Medium',
            TypeScript: 'High'
        },
        roadmap: [
            {
                id: 'fe-1',
                stage: 'Stage 1',
                title: 'HTML5 Semantic Structure & Responsive CSS Layouts',
                description: 'Master semantic markup, Flexbox, CSS Grid, and responsive design fundamentals.',
                quiz: {
                    question: 'Which CSS layout model provides two-dimensional grid-based formatting?',
                    options: ['CSS Grid', 'Flexbox', 'Block Formatting', 'Float'],
                    correctIndex: 0
                }
            },
            {
                id: 'fe-2',
                stage: 'Stage 2',
                title: 'Modern JavaScript (ES6+, Async/Await, Fetch API)',
                description: 'Understand closures, promises, event loops, and asynchronous data operations.',
                quiz: {
                    question: 'Which keyword resolves asynchronous Promise values inside an async function?',
                    options: ['await', 'defer', 'resolve', 'then'],
                    correctIndex: 0
                }
            },
            {
                id: 'fe-3',
                stage: 'Stage 3',
                title: 'React Core, Hooks (useState, useEffect), and State Management',
                description: 'Build single-page web applications with modular components and controlled state.',
                quiz: {
                    question: 'Which built-in React hook synchronizes components with external state/storage?',
                    options: ['useEffect', 'useMemo', 'useRef', 'useId'],
                    correctIndex: 0
                }
            },
            {
                id: 'fe-4',
                stage: 'Stage 4',
                title: 'Version Control, Production Build & SPA Deployment',
                description: 'Configure build tooling, manage Git branching, and deploy live production SPAs.',
                quiz: {
                    question: 'Which Git command records committed changes to the local repository history?',
                    options: ['git commit', 'git add', 'git push', 'git branch'],
                    correctIndex: 0
                }
            }
        ]
    },
    {
        id: 'data-analyst',
        title: 'Data Analyst',
        description: 'Analyze complex datasets and extract business intelligence for strategic decisions.',
        requiredSkills: ['Python', 'SQL', 'Excel', 'Data Visualization', 'Statistics'],
        importance: {
            SQL: 'Critical',
            Python: 'High',
            Excel: 'High',
            'Data Visualization': 'Critical',
            Statistics: 'High'
        },
        roadmap: [
            {
                id: 'da-1',
                stage: 'Stage 1',
                title: 'Advanced Spreadsheet Modeling & Pivot Summaries',
                description: 'Master analytical functions, pivot aggregations, and automated data cleanup.',
                quiz: {
                    question: 'Which function is commonly used for dynamic table lookups in modern spreadsheets?',
                    options: ['XLOOKUP', 'COUNT', 'SUMIF', 'AVERAGE'],
                    correctIndex: 0
                }
            },
            {
                id: 'da-2',
                stage: 'Stage 2',
                title: 'Relational Database Queries & SQL Joins',
                description: 'Write complex SQL statements utilizing JOIN, GROUP BY, HAVING, and CTEs.',
                quiz: {
                    question: 'Which SQL clause is used to filter records after aggregate calculations?',
                    options: ['HAVING', 'WHERE', 'ORDER BY', 'GROUP BY'],
                    correctIndex: 0
                }
            },
            {
                id: 'da-3',
                stage: 'Stage 3',
                title: 'Python for Data Analysis (Pandas, NumPy)',
                description: 'Clean data frames, manipulate arrays, and handle missing observations programmatically.',
                quiz: {
                    question: 'Which Pandas method loads CSV data into a two-dimensional DataFrame?',
                    options: ['read_csv()', 'load_csv()', 'open()', 'to_csv()'],
                    correctIndex: 0
                }
            },
            {
                id: 'da-4',
                stage: 'Stage 4',
                title: 'Business Dashboards & Statistical Reporting',
                description: 'Build interactive metrics dashboards and deliver structured analytical reports.',
                quiz: {
                    question: 'Which metric measures the central tendency of skewed numerical distributions?',
                    options: ['Median', 'Mean', 'Standard Deviation', 'Variance'],
                    correctIndex: 0
                }
            }
        ]
    },
    {
        id: 'data-scientist',
        title: 'Data Scientist',
        description: 'Build predictive statistical models and deploy scalable machine learning solutions.',
        requiredSkills: ['Python', 'Machine Learning', 'Statistics', 'SQL', 'Deep Learning'],
        importance: {
            Python: 'Critical',
            'Machine Learning': 'Critical',
            Statistics: 'Critical',
            SQL: 'High',
            'Deep Learning': 'High'
        },
        roadmap: [
            {
                id: 'ds-1',
                stage: 'Stage 1',
                title: 'Applied Mathematics, Calculus & Probability',
                description: 'Understand linear algebra, gradient vectors, and probability distributions.',
                quiz: {
                    question: 'Which mathematical concept defines optimization direction in gradient descent?',
                    options: ['Derivative / Vector Gradient', 'Matrix Inversion', 'Eigenvector', 'Integral'],
                    correctIndex: 0
                }
            },
            {
                id: 'ds-2',
                stage: 'Stage 2',
                title: 'Exploratory Data Analysis & Feature Engineering',
                description: 'Standardize features, encode categorical variables, and perform correlation audits.',
                quiz: {
                    question: 'Which technique converts discrete categorical values into binary indicator columns?',
                    options: ['One-Hot Encoding', 'Normalization', 'Imputation', 'PCA'],
                    correctIndex: 0
                }
            },
            {
                id: 'ds-3',
                stage: 'Stage 3',
                title: 'Supervised & Unsupervised Machine Learning',
                description: 'Train regression, decision tree ensembles, random forests, and k-means clustering.',
                quiz: {
                    question: 'Which evaluation metric represents harmonic mean between precision and recall?',
                    options: ['F1-Score', 'Accuracy', 'MSE', 'R-Squared'],
                    correctIndex: 0
                }
            },
            {
                id: 'ds-4',
                stage: 'Stage 4',
                title: 'Deep Learning Architectures & Production Deployment',
                description: 'Implement neural networks and deploy prediction endpoints using REST APIs.',
                quiz: {
                    question: 'Which activation function introduces non-linearity by outputting max(0, x)?',
                    options: ['ReLU', 'Sigmoid', 'Linear', 'Softmax'],
                    correctIndex: 0
                }
            }
        ]
    }
];

export const EDUCATION_LEVELS = [
    'High School',
    'Diploma',
    "Bachelor's Degree",
    "Master's Degree",
    'PhD / Doctorate',
    'Bootcamp / Self-Taught'
];

export const TECHNICAL_SKILLS = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Python',
    'SQL',
    'Git',
    'TypeScript',
    'Excel',
    'Data Visualization',
    'Statistics',
    'Machine Learning',
    'Deep Learning'
];

export const ALL_SKILLS = TECHNICAL_SKILLS;

export const SOFT_SKILLS = [
    'Communication',
    'Problem Solving',
    'Teamwork',
    'Leadership',
    'Time Management',
    'Critical Thinking'
];

export const INTERESTS = [
    'Web Development',
    'Data Analytics',
    'Artificial Intelligence',
    'Mobile Development',
    'Cloud Infrastructure'
];