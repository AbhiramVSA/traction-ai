import { PromptInput } from "@/components/chat/prompt-input";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projects } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="px-8 lg:px-12 py-12 lg:py-16 max-w-[1100px]">
      {/* Header */}
      <div className="animate-fade-up">
        <h1 className="text-heading-lg font-black uppercase tracking-tight">
          Dashboard
        </h1>
        <p className="text-body text-gray-300 mt-3 max-w-[440px] leading-relaxed">
          Create a new pitch or continue where you left off.
        </p>
      </div>

      {/* Prompt input */}
      <div className="mt-12 animate-fade-up delay-1">
        <p className="swiss-label text-gray-200 mb-4">New Project</p>
        <PromptInput />
      </div>

      {/* Projects */}
      <div className="mt-20 animate-fade-up delay-2">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
