export default function RepoCard({ repo }) {
  return (
    <article className="card">
      <div className="card-top">
        <h3 className="card-title">{repo.name}</h3>
        <span className="repo-stars">⭐ {repo.stargazers_count}</span>
      </div>

      <p className="card-desc">
        {repo.description ?? 'No description provided.'}
      </p>

      {repo.language && <span className="chip">{repo.language}</span>}

      <a
        className="card-link"
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View repository
      </a>
    </article>
  );
}