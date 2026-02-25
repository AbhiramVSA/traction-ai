import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { ProjectDocument } from "@/types";

interface DocumentListProps {
  documents: ProjectDocument[];
  onSelect?: (doc: ProjectDocument) => void;
}

export function DocumentList({ documents, onSelect }: DocumentListProps) {
  return (
    <div className="divide-y divide-gray-100">
      {documents.map((doc) => (
        <button
          key={doc.id}
          onClick={() => onSelect?.(doc)}
          className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#fafafa]"
        >
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-bold truncate">{doc.title}</p>
            <p className="text-[11px] text-gray-200 mt-1">
              {formatDate(doc.updatedAt)}
            </p>
          </div>
          <Badge variant={doc.status} className="ml-4 flex-shrink-0">
            {doc.status}
          </Badge>
        </button>
      ))}

      {documents.length === 0 && (
        <div className="px-5 py-12 text-center">
          <p className="text-[13px] text-gray-200">
            No documents generated yet.
          </p>
        </div>
      )}
    </div>
  );
}
