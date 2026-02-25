import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate, truncate } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block border border-gray-100 hover:border-black"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-[#f7f7f7] flex items-center justify-center border-b border-gray-100 group-hover:border-black">
        <span className="text-[11px] font-mono text-gray-200">
          {project.slidesHtml.length} slides
        </span>
      </div>

      {/* Meta */}
      <div className="px-5 py-5">
        <h3 className="text-[15px] font-bold truncate">{project.name}</h3>
        <p className="text-[13px] text-gray-300 mt-1.5 truncate leading-relaxed">
          {truncate(project.prompt, 55)}
        </p>
        <div className="flex items-center justify-between mt-5 pt-4 border-t hairline">
          <Badge variant={project.status}>{project.status}</Badge>
          <span className="text-[11px] text-gray-200">
            {formatDate(project.updatedAt)}
          </span>
        </div>
      </div>
    </Link>
  );
}
