import { useMemo, useState } from 'react';
import { projects, availableTracks } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';
import FilterBar from '../components/FilterBar.jsx';
import Reveal from '../components/Reveal.jsx';

/* =============================================================
   ProjectsScreen —  done. This is your useState lesson.

   Compare this to main.js in your Week 8 project. There you had:

       let activeFilter = 'all';
       let searchTerm = '';
       ...then renderProjects(getFilteredProjects()) after every change

   You had to remember to re-render. Every time. Miss one call and
   the screen silently disagrees with your data.

   Here you have two useState values and NO render calls at all. You
   change state, React re-renders. That's the entire trade: you give
   up direct control of the DOM and get correctness for free.

   Read the two lines below as a sentence:
       "filter is currently 'all'. To change it, call setFilter."
   ============================================================= */

export default function ProjectsScreen() {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  /* Your getFilteredProjects(), unchanged in spirit.

     useMemo means "only recalculate when filter or query actually
     change". With six projects it makes no measurable difference and
     you could delete it — it's here so you've seen it. Don't reach
     for it by default; reach for it when you've measured something
     slow. */
  const visible = useMemo(() => {
    const q = query.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesTrack = filter === 'all' || project.track === filter;

      const matchesSearch =
        q === '' ||
        project.title.toLowerCase().includes(q) ||
        project.desc.toLowerCase().includes(q) ||
        project.tech.join(' ').toLowerCase().includes(q);

      return matchesTrack && matchesSearch;
    });
  }, [filter, query]);

  return (
    <div className="wrap">
      <Reveal once>
        <div className="section-head">
          <span className="eyebrow">Select mode</span>
          <h2>Projects</h2>
          <p className="section-desc">
            Everything in one place — web builds, interface design, and data work. Filter it if you
            have a lane, or just scroll.
          </p>
        </div>
      </Reveal>

      <div className="controls">
        {/* FilterBar hides itself while every project is the same
            track, so this row stays clean until you add design or
            data work to projects.js. */}
        <FilterBar tracks={availableTracks} active={filter} onChange={setFilter} />

        <div className="search-field">
          <label htmlFor="project-search">Search projects</label>
          <input
            id="project-search"
            className="search-input"
            type="search"
            placeholder="Title, tool, or keyword…"
            value={query}
            /* This pairing — value={state} plus onChange={setState} —
               is called a controlled input. The state is the single
               source of truth and the input just displays it. */
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>

      {/* A live region: when the count changes, a screen reader
          announces it. Without this, a sighted user sees the grid
          shrink and a blind user gets total silence. */}
      <p className="result-count" aria-live="polite">
        Showing {visible.length} of {projects.length} projects
      </p>

      <div className="grid">
        {visible.length === 0 ? (
          <p className="state">No projects match that search. Try a different word.</p>
        ) : (
          visible.map((project, i) => (
            /* key={project.slug} — a stable id from your data, NOT the
               array index. With filtering, indexes shift around and
               React reuses the wrong card.

               delay staggers the row so cards arrive in sequence
               rather than all at once. Capped so a long list doesn't
               leave the last card waiting three seconds. */
            <Reveal key={project.slug} delay={Math.min(i, 5) * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))
        )}
      </div>
    </div>
  );
}
