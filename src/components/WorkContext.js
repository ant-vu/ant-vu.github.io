import React, {createContext, useContext} from 'react';

const WorkContext = createContext(undefined);

export const useWorkContext = () => useContext(WorkContext);

export function WorkProvider({children}) {
    /**
     * Array of job objects representing work experience.
     * @type {Array<Object>}
     */
    const jobs = [
        {
            title: 'Software Engineer',
            company: 'Citigroup',
            period: '2024/~',
            description: 'Architected testing suites and CI/CD pipelines for Scala, Python, Spark, and Hadoop using ScalaTest, Mockito, Pytest, Jenkins, OpenShift, and SonarQube Server, enhancing coverage from 0 to 95% for 37,000 lines of code across 4 repositories.',
            skills: 'Engineered a full-stack investment management service with React, TypeScript, Mantine, Vite, HTML, MySQL, Spring Boot, Java, Docker, Git, and Alpha Vantage API, currently undergoing internal trials in North America, set for a release in Q1 2025.'
        },
        {
            title: 'Software Engineer Intern',
            company: 'Citigroup',
            period: '2023',
            description: 'Implemented the UI/UX for a Depth Liquidity Adjustments grid using Angular, RxJS, NgRx, TypeScript, AG Grid, Sass, HTML, XML, JSON, and Git, integrating Playwright for end-to-end testing to replace TestComplete, saving $5000 annually.',
            skills: 'Resolved 14 production issues in an Electron app through collaboration with traders from New York, London, Shanghai, and Tokyo, tripling the number of views that can be opened and saved, positively impacting tens of thousands of daily users.'
        },
        {
            title: 'Software Engineer Intern',
            company: 'BDO',
            period: '2022',
            description: 'Developed resource hierarchies, filters, and notifications for human capital management with Angular, TypeScript, PrimeNG, CSS, HTML, ABP Platform, ASP.NET Core, Entity Framework Core, and C#, optimized to load twice as fast as Workday.',
            skills: 'Streamlined Jenkins and SonarQube Server into our DevOps workflow, uncovering 17 bugs and 600+ code smells, and led the refinement process, eliminating all bugs and security hotspots and reducing code smells by 68% and duplications by 93%.'
        },
        {
            title: 'Research Assistant',
            company: 'McMaster',
            period: '2021',
            description: 'Built a full-stack Android application, capturing built-in sensor data like illuminance, azimuth, pitch, and roll, using Kotlin, SQLite, and Jetpack, initiating visible light communication research for 2 PhD fellows at the Communication Algorithms Lab.',
            skills: ''
        },
        {
            title: 'Software Engineer Intern',
            company: 'Llettonna',
            period: '2020',
            description: 'Created a REST API with Java, MySQL, and Postman, documented migrations to MongoDB and Amazon Web Services, and fixed 11 bugs from a front-end codebase containing React, Redux, MUI, and Tailwind CSS, reducing help tickets by 49%.',
            skills: ''
        }
    ];
    return (
        <WorkContext.Provider value={jobs}>
            {children}
        </WorkContext.Provider>
    );
}