import {
  getProjectById,
  getDocumentsByProjectId,
  getChatMessages,
  getSuggestions,
} from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { ChatPanel } from "@/components/chat/chat-panel";
import { SuggestionsPanel } from "./suggestions-panel";
import Link from "next/link";

interface Props {
  params: Promise<{ projectId: string }>;
}

export default async function FinalizePage({ params }: Props) {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-heading font-bold uppercase">Project not found</h1>
        <Link
          href="/dashboard"
          className="swiss-label text-gray-300 hover:text-black mt-6"
        >
          &larr;&nbsp;&nbsp;Back to dashboard
        </Link>
      </div>
    );
  }

  const documents = getDocumentsByProjectId(projectId);
  const messages = getChatMessages(projectId);
  const suggestions = getSuggestions(projectId);
  const slides = project.slidesHtml;

  return (
    <div className="max-w-[1100px] mx-auto px-8 lg:px-12 py-12 lg:py-16 space-y-20">
      {/* Header */}
      <header>
        <div className="flex items-center justify-between">
          <h1 className="text-heading-lg font-black uppercase tracking-tight">
            Finalization
          </h1>
          <button className="inline-flex items-center px-8 py-4 bg-black text-white text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-gray-400">
            Finalize &amp; Share&nbsp;&nbsp;&rarr;
          </button>
        </div>
        <Link
          href={`/projects/${projectId}`}
          className="text-[13px] text-gray-200 hover:text-black mt-3 inline-block"
        >
          &larr;&nbsp;&nbsp;Back to workspace
        </Link>
      </header>

      {/* Slides */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <p className="swiss-label text-gray-200 flex-shrink-0">Slides</p>
          <div className="flex-1 border-t hairline" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {slides.map((_, index) => (
            <Link
              key={index}
              href={`/projects/${projectId}`}
              className="block border border-gray-100 aspect-video bg-[#f7f7f7] flex items-center justify-center hover:border-black"
            >
              <span className="text-[13px] font-mono text-gray-200">
                {index + 1}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Documents + Suggestions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <p className="swiss-label text-gray-200 flex-shrink-0">
              Documents
            </p>
            <div className="flex-1 border-t hairline" />
          </div>
          {documents.length === 0 ? (
            <p className="text-[13px] text-gray-200">No documents yet.</p>
          ) : (
            <ul>
              {documents.map((doc) => (
                <li
                  key={doc.id}
                  className="flex items-center gap-4 py-4 border-b hairline last:border-b-0"
                >
                  <span className="w-5 text-center flex-shrink-0">
                    {doc.status === "ready" && (
                      <span className="text-black font-bold">&check;</span>
                    )}
                    {doc.status === "generating" && (
                      <span className="text-gray-200">&#10227;</span>
                    )}
                    {doc.status === "error" && (
                      <span className="text-red-600 font-bold">&cross;</span>
                    )}
                  </span>
                  <span className="text-[13px] flex-1">{doc.title}</span>
                  <Badge variant={doc.status}>{doc.status}</Badge>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <p className="swiss-label text-gray-200 flex-shrink-0">
              AI Suggestions
            </p>
            <div className="flex-1 border-t hairline" />
          </div>
          <SuggestionsPanel suggestions={suggestions} />
        </div>
      </section>

      {/* Export */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <p className="swiss-label text-gray-200 flex-shrink-0">Export</p>
          <div className="flex-1 border-t hairline" />
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 border border-black text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-black hover:text-white">
            .pptx
          </button>
          <button className="px-6 py-3 border border-black text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-black hover:text-white">
            .pdf
          </button>
          <button className="px-6 py-3 border border-black text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-black hover:text-white">
            .html
          </button>
          <button className="px-6 py-3 bg-black text-white text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-gray-400">
            Export All&nbsp;&nbsp;&rarr;
          </button>
        </div>
      </section>

      {/* Chat */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <p className="swiss-label text-gray-200 flex-shrink-0">
            Make Changes
          </p>
          <div className="flex-1 border-t hairline" />
        </div>
        <div className="h-80 overflow-hidden border border-gray-100">
          <ChatPanel initialMessages={messages} projectId={projectId} />
        </div>
      </section>
    </div>
  );
}
