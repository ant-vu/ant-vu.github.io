import React from 'react';

function Skills() {
    const skills = {
        Programming: ["Python, TypeScript, JavaScript, Scala, Java, C++, C, C#, Go, Rust, Assembly, CSS, HTML, R, SQL",],
        Tools: ["Angular, React, Next.js, Express, Node.js, MongoDB, Docker, Kubernetes, Google Cloud, Microsoft Azure",]
    };

    return (
        <section className="skills space-y-4">
            <h2 className='font-DMMono font-medium'>| Skills</h2>
            <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="flex flex-col md:flex-row md:gap-4">
                        <p className="font-bold text-sm md:text-sm  md:w-1/4">{category}</p>
                        <ul className="font-light text-sm md:text-sm md:w-3/4 mt-1 md:mt-0">
                            {skillList.map((skill, index) => (
                                <li key={index} className="mb-1">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;