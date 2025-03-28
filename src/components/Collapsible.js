import React, {useEffect, useRef, useState} from 'react';
import {useWorkContext} from './WorkContext';

/**
 * A collapsible component that displays a list of jobs and allows toggling their descriptions.
 * @returns {JSX.Element} The rendered Collapsible component.
 */
const Collapsible = () => {
    const jobs = useWorkContext();

    const [openStates, setOpenStates] = useState(jobs.map(() => false));

    const contentRefs = useRef(jobs.map(() => React.createRef()));

    const toggle = (index) => {
        setOpenStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });

        const soundPath = openStates[index] ? process.env.PUBLIC_URL + '/sounds/sfx/close.wav' : process.env.PUBLIC_URL + '/sounds/sfx/open.wav';
        const audio = new Audio(soundPath);
        audio.play();
    };

    useEffect(() => {
        openStates.forEach((isOpen, index) => {
            const content = contentRefs.current[index].current;
            if (content) {
                if (isOpen) {
                    content.style.maxHeight = `${content.scrollHeight}px`;
                } else {
                    content.style.maxHeight = '0px';
                }
            }
        });
    }, [openStates]);

    return (
        <div>
            {jobs.map((job, index) => (
                <div key={index}>
                    <span
                        className={`relative overflow-hidden transition-all w-full block bg-transparent}`}
                    >
                        <span
                            className="absolute top-0 right-0 w-full h-full bg-da_green rounded translate-x-full ease-out duration-400 transition-all group-hover:translate-x-0"></span>
                        <div className="relative grid grid-cols-10 items-center text-sm p-1 border-b-2">
                            <h2 className="col-span-5 text-black transition-colors duration-400 ease-in-out flex justify-start ">{job.title}</h2>
                            <h2 className="col-span-3 text-black transition-colors duration-400 ease-in-out font-DMMono">{job.company}</h2>
                            <h2 className="col-span-1 text-black transition-colors duration-400 ease-in-out text-xs font-DMMono">{job.period}</h2>
                        </div>
                    </span>

                    <div
                        ref={contentRefs.current[index]}
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{maxHeight: '0px'}}
                    >
                        <div className="relative mt-1 border-b-2 border-dashed border-da_green rounded-md">
                            {job.image && <img src={job.image} alt="Job Image" className=""/>}
                            <h4 className='text-sm'>{job.description}</h4>
                            <h4 className='text-sm font-light my-5'>{job.skills}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Collapsible;