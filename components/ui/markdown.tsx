"use client";

import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord as codeTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";
import type { Components } from "react-markdown";
import type { CodeComponent } from "react-markdown/lib/ast-to-react";

interface MarkdownProps {
  content: string;
  className?: string;
}

export function Markdown({ content, className }: MarkdownProps) {
  const components: Components = {
    h1: ({ node, ...props }) => (
      <h1
        className="font-serif text-3xl md:text-4xl font-bold mt-8 mb-4"
        {...props}
      />
    ),
    h2: ({ node, ...props }) => (
      <h2
        className="font-serif text-2xl md:text-3xl font-bold mt-8 mb-4"
        {...props}
      />
    ),
    h3: ({ node, ...props }) => (
      <h3
        className="font-serif text-xl md:text-2xl font-bold mt-6 mb-3"
        {...props}
      />
    ),
    h4: ({ node, ...props }) => (
      <h4
        className="font-serif text-lg md:text-xl font-bold mt-6 mb-3"
        {...props}
      />
    ),
    p: ({ node, ...props }) => (
      <p className="my-4 leading-relaxed" {...props} />
    ),
    a: ({ node, ...props }) => (
      <a
        className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        {...props}
      />
    ),
    ul: ({ node, ...props }) => (
      <ul className="list-disc pl-6 my-4 space-y-2" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />
    ),
    li: ({ node, ...props }) => (
      <li className="leading-relaxed" {...props} />
    ),
    blockquote: ({ node, ...props }) => (
      <blockquote
        className="border-l-4 border-primary pl-4 italic my-4"
        {...props}
      />
    ),
    img: ({ node, alt, src, ...props }) => (
      <div className="my-8 overflow-hidden rounded-lg">
        <Image
          src={src || ""}
          alt={alt || ""}
          width={800}
          height={450}
          className="w-full h-auto"
        />
      </div>
    ),
    // ✅ FIXED typing for code component
    code: (({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");

      return !inline && match ? (
        <SyntaxHighlighter
          style={codeTheme}
          language={match[1]}
          PreTag="div"
          className="rounded-md my-6 overflow-hidden"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code
          className="bg-muted px-1 py-0.5 rounded text-sm"
          {...props}
        >
          {children}
        </code>
      );
    }) as CodeComponent,
    hr: ({ node, ...props }) => (
      <hr className="my-8 border-border" {...props} />
    ),
    table: ({ node, ...props }) => (
      <div className="overflow-x-auto my-6">
        <table
          className="w-full border-collapse text-sm"
          {...props}
        />
      </div>
    ),
    th: ({ node, ...props }) => (
      <th
        className="border border-border bg-muted px-4 py-2 text-left font-bold"
        {...props}
      />
    ),
    td: ({ node, ...props }) => (
      <td className="border border-border px-4 py-2" {...props} />
    ),
  };

  return (
    <ReactMarkdown
      className={cn("prose dark:prose-invert max-w-none", className)}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
}
