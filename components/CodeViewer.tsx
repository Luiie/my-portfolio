interface Props {
  repo: string;
  path: string;
}

export default function CodeViewer({ repo, path }: Props) {
  const url = `https://github.com/${repo}/tree/main/${path}`;

  return (
    <div className="border border-slate-800 rounded-lg p-4">
      <p className="text-slate-400 mb-2">
        Source code and documentation
      </p>
      <a
        href={url}
        target="_blank"
        className="text-sky-400 underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}