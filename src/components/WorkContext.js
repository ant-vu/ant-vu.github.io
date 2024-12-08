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
            title: 'Software Developer',
            company: 'Citigroup',
            period: '2024/~',
            description: 'Engineered a full-stack investment management service with React, JavaScript, Bulma, HTML, MySQL, Java, Spring Boot, Docker, Git, and Alpha Vantage API, enabling users to manage diverse portfolios, including REITs, ETFs, and stocks.',
            skills: 'Architected testing suites and CI/CD pipelines for Scala, Python, Spark, and Hadoop using ScalaTest, Mockito, pytest, unittest, Jenkins, and SonarQube, enhancing code coverage from 0 to 95% across four repositories (~35,000 lines of code).'
        },
        {
            title: 'Product Manager',
            company: 'ELO',
            period: '2024',
            description: 'Prepared for a product launch in August by conducting interviews and designing Figma mockups for a gaming controller app.',
            skills: ''
        },
        {
            title: 'Software Developer Intern',
            company: 'Citigroup',
            period: '2023',
            description: 'Programmed the UI/UX for a Depth Liquidity Adjustments grid with Angular, NgRx, RxJS, TypeScript, Sass, and MySQL, and integrated Playwright for end-to-end testing, eliminating the need for a TestComplete license (saving ~$5000/year).',
            skills: 'Collaborated across teams and traders from New York, London, and Shanghai to diagnose critical issues within our Electron application and explored urbanization’s correlation to GDP using Python and pandas, culminating in a Tableau dashboard.'
        },
        {
            title: 'Software Developer Intern',
            company: 'BDO',
            period: '2022',
            description: 'Implemented resource hierarchies, filters, and notifications with Angular, TypeScript, CSS, MySQL, ASP.NET Core, Entity Framework Core, C#, and Node.js, and managed Docker containers for Prometheus, Kibana, RabbitMQ, and Redis.',
            skills: 'Streamlined Jenkins and SonarQube into our DevOps workflow, uncovering 15+ bugs and 600+ code smells, and led the code refinement initiative, eliminating all bugs and security hotspots and reducing code smells and duplications by 65%.'
        },
        {
            title: 'Project Manager',
            company: 'CollegePro',
            period: '2021',
            description: 'Pioneered an enterprise-wide route optimization platform that leveraged geospatial analytics and machine learning algorithms.',
            skills: ''
        },
        {
            title: 'Research Assistant (SWE)',
            company: 'McMaster',
            period: '2021',
            description: 'Developed a full-stack Android application that captures built-in sensor data, such as illuminance, azimuth, pitch, and roll, using Kotlin, SQLite, and Jetpack for visible light communication at the Free-Space Optical Communication Algorithms Lab.',
            skills: ''
        },
        {
            title: 'Software Developer Intern',
            company: 'Llettonna',
            period: '2020',
            description: 'Created a REST API with Java, MySQL, and Postman, resolved 5+ bugs from a front-end codebase containing React, Redux, MUI, JavaScript, and Tailwind CSS, and researched potential migration paths to PostgreSQL, MongoDB, and AWS.',
            skills: ''
        },
        {
            title: 'Software Developer',
            company: 'Memofood',
            period: '2019/2020',
            description: 'Won the Best Overall Project award at Western University for coding a food-tracking app using Bootstrap and PostgreSQL.',
            skills: ''
        },
        {
            title: 'Head Altar Server',
            company: 'St. Pat’s',
            period: '2010/~',
            description: 'Earned the Serra International Bishop’s Altar Server medallion and invited Prime Minister Trudeau to serve 550+ meals/day.',
            skills: ''
        }
    ];
    return (
        <WorkContext.Provider value={jobs}>
            {children}
        </WorkContext.Provider>
    );
}