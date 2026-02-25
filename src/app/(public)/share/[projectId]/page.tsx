import {
  getProjectById,
  getDocumentsByProjectId,
  getShareLink,
} from "@/lib/mock-data";
import { DeckViewer } from "@/components/deck/deck-viewer";
import { DocumentAccordion } from "./document-accordion";

interface Props {
  params: Promise<{ projectId: string }>;
}

export default async function SharePage({ params }: Props) {
  const { projectId } = await params;
  const project = getProjectById(projectId);
  const shareLink = getShareLink(projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-heading-lg font-black uppercase">
            Link not found
          </h1>
          <p className="text-body text-gray-300 mt-4">
            This pitch deck may have been removed or the link is invalid.
          </p>
        </div>
      </div>
    );
  }

  const documents = getDocumentsByProjectId(projectId);

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="h-[72px] flex items-center justify-between px-8 md:px-16 border-b hairline max-w-[1400px] mx-auto">
        <span className="swiss-label text-gray-300">Shared via Traction</span>
        {shareLink && (
          <span className="text-[11px] text-gray-200">
            {shareLink.viewCount} views
          </span>
        )}
      </header>

      {/* Cover */}
      <section className="py-24 lg:py-32 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-display-lg font-black uppercase tracking-tight leading-[0.9]">
            {project.name}
          </h1>
          <p className="text-body-lg text-gray-300 mt-8 max-w-2xl leading-relaxed">
            {project.prompt}
          </p>
          <hr className="border-black mt-16" />
        </div>
      </section>

      {/* Deck */}
      <section className="px-8 md:px-16 pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto">
          <p className="swiss-label text-gray-200 mb-8">Pitch Deck</p>
          <div
            className="border border-gray-100"
            style={{ aspectRatio: "16/9" }}
          >
            <DeckViewer slides={project.slidesHtml} readOnly />
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="px-8 md:px-16 pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto">
          <p className="swiss-label text-gray-200 mb-8">
            Supporting Documents
          </p>
          <DocumentAccordion documents={documents} />
        </div>
      </section>

      {/* Contact */}
      <section className="px-8 md:px-16 pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto border-t border-black pt-16">
          <h2 className="text-heading font-bold uppercase">
            Interested in this project?
          </h2>
          <p className="text-body text-gray-300 mt-4">
            Get in touch with the team to learn more.
          </p>
          <div className="mt-8">
            <p className="text-body font-bold">Alex Chen</p>
            <p className="text-body text-gray-200">alex@example.com</p>
          </div>
        </div>
      </section>

      {/* Footer — black */}
      <footer className="bg-black text-white px-8 md:px-16 py-12">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <span className="text-[11px] text-white/50">
            &copy; 2026 Traction
          </span>
          <span className="text-[11px] text-white/50">
            Generated with Traction
          </span>
        </div>
      </footer>
    </div>
  );
}
