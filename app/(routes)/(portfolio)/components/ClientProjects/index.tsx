import React from 'react';
import ProjectCard from '../ProjectCard';
import { clientProjects } from '@/app/data/projects';

function ClientProjects() {
  return (
    <div className="py-20 flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <div className="brand text-2xl font-bold">
          /projects/client-projects
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
          High-impact solutions delivered for enterprise clients and startups,
          ranging from decentralized exchange interfaces to secure backend
          infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clientProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ClientProjects;
