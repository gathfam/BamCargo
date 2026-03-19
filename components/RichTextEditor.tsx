"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import {
  Bold,
  Italic,
  Link as LinkIcon,
  Heading2,
  Heading3,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-primary font-semibold underline",
        },
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[200px] w-full outline-none prose dark:prose-invert max-w-none prose-relaxed px-3 py-3 text-base md:text-sm text-foreground selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground",
      },
    },
  });

  if (!editor) return null;

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL:", previousUrl);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  return (
    <div className="w-full min-w-0 flex flex-col rounded-md border border-input bg-transparent dark:bg-input/30 shadow-xs transition-[color,box-shadow] focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] overflow-hidden">
      <div className="flex flex-wrap gap-1 p-1 border-b border-input bg-transparent">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded-md transition-colors ${editor.isActive("bold") ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"}`}
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-md transition-colors ${editor.isActive("italic") ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"}`}
        >
          <Italic className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-border mx-1 self-center" />
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`p-2 rounded-md transition-colors ${editor.isActive("heading", { level: 2 }) ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"}`}
        >
          <Heading2 className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`p-2 rounded-md transition-colors ${editor.isActive("heading", { level: 3 }) ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"}`}
        >
          <Heading3 className="w-4 h-4" />
        </button>
      </div>
      <EditorContent editor={editor} className="focus:outline-none" />
    </div>
  );
}
