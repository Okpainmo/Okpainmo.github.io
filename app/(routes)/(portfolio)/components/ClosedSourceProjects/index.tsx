import React from 'react';
import ProjectCard from '../ProjectCard';
import { closedSourceProjects } from '@/app/data/projects';

function ClosedSourceProjects() {
  return (
    <div className="py-20 flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <div className="brand text-2xl font-bold text-black dark:text-zinc-50">
          /projects/closed-source
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
          High-impact closed-source solutions I've helped design and build.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {closedSourceProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ClosedSourceProjects;
