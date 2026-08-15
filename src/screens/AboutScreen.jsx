import { profile } from '../data/profile.js';
import KeyButton from '../components/KeyButton.jsx';
import Reveal from '../components/Reveal.jsx';

/* =============================================================
   AboutScreen —  MOSTLY YOURS

   The layout is done. What's missing is your voice. Everything this
   screen shows comes from src/data/profile.js, so most of your work
   happens in that file, not this one.

   One thing to notice: <h1>. There is exactly one on the whole site
   and it lives here. It's the page's title — not a font size. If you
   want big text somewhere else, use CSS, not another <h1>.
   ============================================================= */

export default function AboutScreen({ onNavigate }) {
  return (
    <div className="wrap">
      <Reveal once>
        <span className="eyebrow">{profile.role}</span>
        <h1 className="hero-heading">
          Hi, I'm <span className="accent">{profile.name}</span>.
        </h1>
        <p className="hero-sub">{profile.tagline}</p>
      </Reveal>

      <Reveal once delay={120}>
        <p className="hero-sub" style={{ marginTop: '18px' }}>
          {profile.bio}
        </p>
      </Reveal>

      <Reveal once delay={220}>
        <div className="hero-actions">
          <KeyButton onClick={() => onNavigate('projects')}>View Projects</KeyButton>
          <KeyButton as="a" variant="ghost" href={`mailto:${profile.email}`}>
            Contact Me
          </KeyButton>
        </div>
      </Reveal>

      {/* -----------------------------------------------------------
          SKILLS, grouped by discipline.

          This grouping is doing the work you asked about. Before
          anyone scrolls or clicks a filter, three headed columns
          already say "web, design, data". The chips aren't
          decoration — they're the argument.

           TODO: edit the `skills` array in data/profile.js. Only
          list things you'd be happy to be asked about in an
          interview. A short honest list beats a long padded one.
          ----------------------------------------------------------- */}
      <div className="skill-groups">
        {profile.skills.map((group, i) => (
          <Reveal key={group.track} delay={i * 90}>
            <div className="skill-group">
              <h3>{group.label}</h3>
              <ul className="chip-row">
                {group.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* -----------------------------------------------------------
           TODO — optional, once the rest is done.
          A short "how I work" paragraph goes really well here: three
          or four sentences on how you approach a project. It's the
          closest thing a portfolio has to a cover letter, and almost
          no junior portfolio has one.
          ----------------------------------------------------------- */}
    </div>
  );
}
