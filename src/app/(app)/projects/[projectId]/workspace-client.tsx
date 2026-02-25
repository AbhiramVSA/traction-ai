"use client";

import { useState, useCallback } from "react";
import type {
  Project,
  ProjectDocument,
  ChatMessage as ChatMessageType,
  Feedback as FeedbackType,
} from "@/types";
import { DeckViewer } from "@/components/deck/deck-viewer";
import { SlideStrip } from "@/components/deck/slide-strip";
import { Tabs } from "@/components/ui/tabs";
import { DocumentList } from "@/components/documents/document-list";
import { DocumentViewer } from "@/components/documents/document-viewer";
import { ChatPanel } from "@/components/chat/chat-panel";
import { FeedbackPanel } from "@/components/feedback/feedback-panel";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const WORKSPACE_TABS = [
  { id: "documents", label: "Documents" },
  { id: "chat", label: "AI Chat" },
  { id: "review", label: "Review" },
];

interface WorkspaceClientProps {
  project: Project;
  documents: ProjectDocument[];
  initialMessages: ChatMessageType[];
  feedback: FeedbackType[];
}

export function WorkspaceClient({
  project,
  documents,
  initialMessages,
  feedback,
}: WorkspaceClientProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedDoc, setSelectedDoc] = useState<ProjectDocument | null>(null);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handleDocSelect = useCallback((doc: ProjectDocument) => {
    setSelectedDoc(doc);
  }, []);

  const handleDocClose = useCallback(() => {
    setSelectedDoc(null);
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Workspace header */}
      <div className="flex items-center justify-between px-8 h-[56px] border-b hairline bg-white flex-shrink-0">
        <div className="flex items-center gap-4">
          <h1 className="text-[15px] font-bold truncate">{project.name}</h1>
          <Badge variant={project.status}>{project.status}</Badge>
        </div>
        <Link
          href={`/projects/${project.id}/finalize`}
          className="swiss-label text-gray-300 hover:text-black"
        >
          Finalize&nbsp;&rarr;
        </Link>
      </div>

      {/* Main workspace */}
      <div className="flex flex-1 min-h-0">
        {/* Left: Deck (70%) */}
        <div className="flex flex-col w-full lg:w-[70%] border-r hairline">
          <div className="flex-1 min-h-0">
            <DeckViewer
              slides={project.slidesHtml}
              onSlideChange={handleSlideChange}
            />
          </div>
          <SlideStrip
            slideCount={project.slidesHtml.length}
            activeIndex={currentSlide}
            onSelect={handleSlideChange}
          />
        </div>

        {/* Right: Tabs (30%) */}
        <div className="hidden lg:flex lg:flex-col lg:w-[30%]">
          <Tabs tabs={WORKSPACE_TABS} defaultTab="documents">
            {(activeTab) => {
              if (activeTab === "documents") {
                return (
                  <DocumentList
                    documents={documents}
                    onSelect={handleDocSelect}
                  />
                );
              }
              if (activeTab === "chat") {
                return (
                  <ChatPanel
                    initialMessages={initialMessages}
                    projectId={project.id}
                  />
                );
              }
              if (activeTab === "review") {
                return <FeedbackPanel initialFeedback={feedback} />;
              }
              return null;
            }}
          </Tabs>
        </div>
      </div>

      <DocumentViewer
        document={selectedDoc}
        open={selectedDoc !== null}
        onClose={handleDocClose}
      />
    </div>
  );
}
