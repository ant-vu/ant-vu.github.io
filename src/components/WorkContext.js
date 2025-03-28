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
            company: 'Citi',
            period: '2024/~',
            description: '',
            skills: ''
        },
        {
            title: 'Product Manager',
            company: 'ELO',
            period: '2024',
            description: '',
            skills: ''
        },
        {
            title: 'Software Engineer',
            company: 'Citi',
            period: '2023',
            description: '',
            skills: ''
        },
        {
            title: 'Software Engineer',
            company: 'BDO',
            period: '2022',
            description: '',
            skills: ''
        },
        {
            title: 'Project Manager',
            company: 'College Pro',
            period: '2021',
            description: '',
            skills: ''
        },
        {
            title: 'Research Assistant',
            company: 'McMaster',
            period: '2021',
            description: '',
            skills: ''
        },
        {
            title: 'Software Engineer',
            company: 'Llettonna',
            period: '2020',
            description: '',
            skills: ''
        },
        {
            title: 'Software Engineer',
            company: 'Memofood',
            period: '2019/20',
            description: '',
            skills: ''
        }
    ];
    return (
        <WorkContext.Provider value={jobs}>
            {children}
        </WorkContext.Provider>
    );
}