import { useState } from 'react';
import Work from './Work';
import Projects from './Projects';
import Skills from './Skills';
import WannaPlaySomeTunes from './WannaPlaySomeTunes';
import Header from './Header';

function Portfolio({ className }) {
  const [projectExpanded, setProjectExpanded] = useState(false);

  function handleProjectExpand(data) {
    setProjectExpanded(data);
  }

  const transitionClasses = "transition-all duration-500 ${!expanded ? 'delay-500' : ''} ease-in-out";
  const expandedClasses = "max-h-0 opacity-0 my-0";
  const collapsedClasses = "max-h-[2300px] opacity-100";
  const spacingClasses = "md:mb-8 mb-16";

  return (
    <main className={`${className} /* other classes */`}>
      <div className="portfolio">
        
        <div className={`${transitionClasses} ${projectExpanded ? expandedClasses : `${collapsedClasses} ${spacingClasses}`}`}>
          <Header />
        </div>
        <div className={`${transitionClasses} ${projectExpanded ? expandedClasses : `${collapsedClasses} ${spacingClasses}`}`}>
          <Work />
        </div>
        <div className='md:mb-8 mb-16'>
          <Projects sendExpandedStatToParent={handleProjectExpand} />
        </div>
        <div className={`${transitionClasses} ${projectExpanded ? expandedClasses : `${collapsedClasses} ${spacingClasses}`}`}>
          <Skills />
        </div>
        <div className={`${transitionClasses} ${projectExpanded ? expandedClasses : `${collapsedClasses} ${spacingClasses}`}`}>
          <WannaPlaySomeTunes />
        </div>
      </div>
    </main>
  );
}

export default Portfolio;