import { Link } from 'react-router-dom';
import { TRACKS } from '../data/projects.js';

export default function ProjectCard({ project }) {
  const track = TRACKS[project.track];

  return (
    <article className="card">
      <div className="card-top">
        <h3 className="card-title">{project.title}</h3>

        <span className="badge" data-track={project.track}>
          {track ? track.short : project.track}
        </span>
      </div>

      <p className="card-desc">{project.desc}</p>

      <ul className="chip-row" aria-label={`${project.title} tools`}>
        {project.tech.map((tool) => (
          <li className="chip" key={tool}>
            {tool}
          </li>
        ))}
      </ul>

      <div className="card-links">
        <Link className="card-link" to={`/projects/${project.slug}`}>
          View details
        </Link>

        {project.links?.live && (
          <a
            className="card-link"
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live site
          </a>
        )}

        {project.links?.repo && (
          <a
            className="card-link"
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        )}
      </div>

      {project.study && (
        <dl className="study">
          <div className="study-slot">
            <dt>The problem</dt>
            <dd>{project.study.problem}</dd>
          </div>

          <div className="study-slot">
            <dt>The process</dt>
            <dd>{project.study.process}</dd>
          </div>

          <div className="study-slot">
            <dt>The outcome</dt>
            <dd>{project.study.outcome}</dd>
          </div>

          <div className="study-slot">
            <dt>What I learned</dt>
            <dd>{project.study.took}</dd>
          </div>

          <div className="study-slot">
            <dt>Next step</dt>
            <dd>{project.study.next}</dd>
          </div>
        </dl>
      )}
    </article>
  );
}