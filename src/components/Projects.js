import {useState} from 'react';

function Projects({sendExpandedStatToParent}) {
    const [expanded, setExpanded] = useState(false);

    const handleMoreClick = () => {
        setExpanded(!expanded);
        if (expanded) {
            const closeSound = new Audio(process.env.PUBLIC_URL + `/sounds/sfx/close.wav`);
            closeSound.play();
        } else {
            const openSound = new Audio(process.env.PUBLIC_URL + `/sounds/sfx/open.wav`);
            openSound.play();
        }
        sendExpandedStatToParent(!expanded);
    };

    const short_projects = [
        {
            name: 'ant-vu.github.io',
            description: 'Portfolio (feat. React, Three.js, JS, Tailwind CSS)',
            link: 'https://github.com/ant-vu/ant-vu.github.io'
        },
        {
            name: 'robot-animation',
            description: 'Robot Animation (feat. React Three Fiber, Next.js, TS)',
            link: 'https://github.com/ant-vu/robot-animation',
            more: 'https://ant-vu.github.io/robot-animation'
        },
        {
            name: 'blind-connect-five',
            description: 'Blind Connect Five (feat. JS, CSS, HTML)',
            link: 'https://github.com/ant-vu/blind-connect-five',
            more: 'https://ant-vu.github.io/blind-connect-five'
        },
        {
            name: 'color-link',
            description: 'Color Link (feat. JS, CSS, HTML)',
            link: 'https://github.com/ant-vu/color-link',
            more: 'https://ant-vu.github.io/color-link'
        },
        {
            name: 'habits-app',
            description: 'Habit Tracker (feat. Vue, Nuxt, Pinia, JS, Firebase)',
            link: 'https://github.com/ant-vu/habits-app',
            more: 'https://habits-app-71y.pages.dev'
        }
    ];

    const more_projects = [];

    const boldWord = (text) => {
        const words = text.split(' ');
        const boldWords = ['Tracker', 'Animation', 'Link', 'Connect', 'Five'];
        const italicWords = [''];
        return (
            <>
                {words.map((word, index) => (
                    <span key={index} style={{
                        fontWeight: (index === 0 || boldWords.includes(word)) ? 'bold' : 'normal',
                        fontStyle: italicWords.includes(word) ? 'italic' : 'normal'
                    }}>
            {word}{' '}
          </span>
                ))}
            </>
        );
    };

    return (
        <section className="projects">
            <div className="space-y-4">
                <h2 className='font-DMMono font-medium '>| Projects</h2>
                <div className='rounded border-dotted border-2 border-da_green p-4 space-y-4'>
                    {short_projects.map((project, index) => (
                        <div key={index} className="project-card space-y-4 ">
                            <p>{boldWord(project.description)}</p>
                            <div className="flex space-x-3">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative overflow-hidden transition-all bg-white hover:bg-da_green group rounded-md flex items-center justify-center w-[85px] h-[30px] border-current border-2 text-xs"
                                    >
                                        <span
                                            className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                                        <span
                                            className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                    Code
                    <div className="flex justify-end ml-3">
                      <img src={process.env.PUBLIC_URL + "/icons/arrow-top-right.svg"} alt="^"
                           className="w-4 h-4 bg-da_green border-da_green border-4"/>
                    </div>
                  </span>
                                    </a>
                                )}
                                {project.more && (
                                    <a
                                        href={project.more}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative overflow-hidden transition-all bg-white hover:bg-da_green group rounded-md flex items-center justify-center w-[85px] h-[30px] border-current border-2 text-xs"
                                    >
                                        <span
                                            className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                                        <span
                                            className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                      Live
                      <div className="flex justify-end ml-3">
                        <img src={process.env.PUBLIC_URL + "/icons/arrow-right.svg"} alt="^"
                             className="w-4 h-4 bg-da_green border-da_green border-4"/>
                      </div>
                    </span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className={`
              transition-all duration-500 ${expanded ? 'delay-500' : ''} ease-in-out
            ${expanded
                        ? 'opacity-100 max-h-[1000px]'
                        : 'opacity-0 max-h-0'}
            overflow-hidden
          `}
                    >
                        <div className="space-y-4">
                            {more_projects.map((project, index) => (
                                <div key={index} className="project-card space-y-4">
                                    <p>{boldWord(project.description)}</p>
                                    <div className='flex space-x-3'>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative overflow-hidden transition-all bg-white hover:bg-da_green group rounded-md flex items-center justify-center w-[85px] h-[30px] border-current border-2 text-xs"
                                            >
                                                <span
                                                    className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                                                <span
                                                    className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                    Code
                    <div className="flex justify-end ml-3">
                      <img src={process.env.PUBLIC_URL + "/icons/arrow-top-right.svg"} alt="^"
                           className="w-4 h-4 bg-da_green border-da_green border-4"/>
                    </div>
                  </span>
                                            </a>
                                        )}
                                        {project.more && (
                                            <a
                                                href={project.more}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative overflow-hidden transition-all bg-white hover:bg-da_green group rounded-md flex items-center justify-center w-[85px] h-[30px] border-current border-2 text-xs"
                                            >
                                                <span
                                                    className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                                                <span
                                                    className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                      Live
                      <div className="flex justify-end ml-3">
                        <img src={process.env.PUBLIC_URL + "/icons/arrow-right.svg"} alt="^"
                             className="w-4 h-4 bg-da_green border-da_green border-4"/>
                      </div>
                    </span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;