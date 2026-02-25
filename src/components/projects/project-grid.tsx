import Link from "next/link";
import type { Project } from "@/types";
import { ProjectCard } from "./project-card";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div>
      {/* Section label + hairline */}
      <div className="flex items-center gap-4 mb-10">
        <p className="swiss-label text-gray-200 flex-shrink-0">
          Recent Projects
        </p>
        <div className="flex-1 border-t hairline" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* New Pitch card */}
        <Link
          href="/dashboard"
          className="group flex flex-col items-center justify-center aspect-[4/3] border border-dashed border-gray-100 hover:border-black"
        >
          <span className="text-[32px] font-light text-gray-100 group-hover:text-black">
            +
          </span>
          <span className="swiss-label text-gray-200 mt-4 group-hover:text-black">
            New Pitch
          </span>
        </Link>

        {/* Project cards */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty state */}
      {projects.length === 0 && (
        <div className="text-center py-24">
          <p className="text-heading-sm font-bold uppercase">No projects yet</p>
          <p className="text-body-sm text-gray-300 mt-3">
            Use the prompt above to create your first pitch deck.
          </p>
        </div>
      )}
    </div>
  );
}
