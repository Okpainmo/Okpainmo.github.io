import React from 'react';
import ProjectCard from '../ProjectCard';
import { opensourceProjects } from '@/app/data/projects';

function OpensourceProjects() {
  return (
    <div className="py-20 flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <div className="brand text-2xl font-bold mb-4 sm:mb-6 text-black dark:text-zinc-50">
          /projects/opensource
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
          A selection of my contributions to the open-source ecosystem, focusing
          on developer tools, core infrastructure, and blockchain visualization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opensourceProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default OpensourceProjects;
