import React from 'react';
import Link from 'next/link';
import { HiArrowUpRight, HiOutlineGlobeAlt } from 'react-icons/hi2';
import { FaGithub } from 'react-icons/fa';
import { Project } from '@/app/data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const Icon = project.icon;

  return (
    <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-700/50 rounded-2xl p-6 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow group">
      {/* Icon at the top */}
      <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl w-fit">
        <Icon className="text-2xl text-black dark:text-white" />
      </div>

      {/* Project Title and Story Link */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-black dark:text-white poppins">
          {project.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
          {project.description}
        </p>
        <Link
          href={project.storyLink}
          className="flex items-center gap-1 text-sm font-semibold text-black dark:text-white hover:underline group/story"
        >
          Read project story
          <HiArrowUpRight className="text-xs group-hover/story:translate-x-0.5 group-hover/story:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500">
          Built With
        </span>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500">
          Focus
        </span>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-zinc-500 dark:text-zinc-400 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Links Section */}
      <div className="flex gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            title="View GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            title="Live Demo"
          >
            <HiOutlineGlobeAlt className="text-xl" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
