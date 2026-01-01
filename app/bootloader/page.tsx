"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";

const OWNER = "luiie";
const REPO = "my-portfolio";
const BRANCH = "main";
const TEXTFILE = "README.md";
const CODEFILE = "next.config.ts";

export default function AndroidFrameworkPage() {
  const [textMd, setTextMd] = useState("");
  const [cCode, setCCode] = useState("");

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const [textMdRes, cCodeRes] = await Promise.all([
          fetch(
            `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${TEXTFILE}`
          ),
          fetch(
            `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${CODEFILE}`
          ),
        ]);

        setTextMd(await textMdRes.text());
        setCCode(await cCodeRes.text());
      } catch (err) {
        console.error("Failed to load files", err);
      }
    };

    fetchFiles();
  }, []);

  return (
    <main className="min-h-screen bg-black px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-12">

        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-green-400">
            Android Framework & Apps
          </h1>
          <p className="text-green-500/70">
            Loaded directly from GitHub repository
          </p>
        </header>

        {/* README.md (GitHub style 그대로) */}
        <section className="space-y-3">
          <h2 className="text-xl font-medium text-green-400">
            {TEXTFILE}
          </h2>

          <article className="markdown-body border border-green-500/40 rounded bg-black/60 p-4">
            {textMd ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {textMd}
              </ReactMarkdown>
            ) : (
              "Loading..."
            )}
          </article>
        </section>
        {/* Code file */}
        <section className="space-y-3">
          <h2 className="text-xl font-medium text-green-400">
            {CODEFILE}
          </h2>

          <article className="markdown-body border border-green-500/40 rounded bg-black/60 p-4 overflow-x-auto">
            <pre
              className="language-ts"
              dangerouslySetInnerHTML={{
                __html: cCode
                  ? Prism.highlight(
                      cCode,
                      Prism.languages.typescript,
                      "typescript"
                    )
                  : "Loading...",
              }}
            />
          </article>
        </section>
      </div>
    </main>
  );
}