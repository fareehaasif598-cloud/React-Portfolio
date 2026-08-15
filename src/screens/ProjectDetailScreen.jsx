import { Link, useParams } from 'react-router-dom';
import { projects, TRACKS } from '../data/projects.js';

export default function ProjectDetailScreen() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Missing project</span>
          <h2>Project not found</h2>
          <p className="section-desc">
            This project does not exist or the link has changed.
          </p>
          <Link className="card-link" to="/projects">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const track = TRACKS[project.track];

  return (
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow">
          {track ? track.label : project.track} project
        </span>
        <h2>{project.title}</h2>
        <p className="section-desc">{project.desc}</p>
      </div>

      <article className="card">
        <div className="card-top">
          <h3 className="card-title">Project Details</h3>
          <span className="badge" data-track={project.track}>
            {track ? track.short : project.track}
          </span>
        </div>

        <ul className="chip-row" aria-label={`${project.title} tools`}>
          {project.tech.map((tool) => (
            <li className="chip" key={tool}>
              {tool}
            </li>
          ))}
        </ul>

        {project.study ? (
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
        ) : (
          <p className="state">
            A full case study has not been added for this project yet.
          </p>
        )}

        <div className="card-links">
          <Link className="card-link" to="/projects">
            ← Back to projects
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
      </article>
    </div>
  );
}