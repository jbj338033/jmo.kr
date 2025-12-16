import type { MDXComponents } from "mdx/types";

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
    ),
    p: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
    a: ({ href, children }) => (
      <a href={href} className="text-primary underline">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
        {children}
      </pre>
    ),
  };
}
