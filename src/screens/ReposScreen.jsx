import { profile } from '../data/profile.js';
import { useRepos } from '../hooks/useRepos.js';
import RepoCard from '../components/RepoCard.jsx';
import KeyButton from '../components/KeyButton.jsx';
import Reveal from '../components/Reveal.jsx';

/* =============================================================
   ReposScreen —  done (RepoCard is the part left for you).

   Your Week 8 initRepos() juggled a try, a catch, a finally, and a
   loading indicator you had to remember to hide in every path. It
   also re-attached a click listener to the retry button each time it
   failed — a real bug that's easy to miss.

   Here there's one `status` value that is exactly one of three
   things, and three branches that render it. There's no way to end
   up showing a spinner and an error at the same time, because status
   can't be two values at once.

   That's the lesson: model the state so the broken combinations are
   impossible to represent.
   ============================================================= */

export default function ReposScreen() {
  const { repos, status, error, retry } = useRepos(profile.githubUsername);

  return (
    <div className="wrap">
      <Reveal once>
        <div className="section-head">
          <span className="eyebrow">Live from the API</span>
          <h2>GitHub Repositories</h2>
          <p className="section-desc">
            My public GitHub repositories, loaded live from the GitHub API.
          </p>
        </div>
      </Reveal>

      <div className="grid">
        {status === 'loading' && <p className="state">Loading repositories…</p>}

        {status === 'error' && (
          <div className="state">
            <p style={{ marginBottom: '16px' }}>⚠️ {error}</p>
            {/* retry() just bumps a counter inside the hook, which
                re-runs the effect. No listeners to re-attach. */}
            <KeyButton variant="ghost" onClick={retry}>
              Try Again
            </KeyButton>
          </div>
        )}

        {status === 'ready' && repos.length === 0 && (
          <p className="state">No public repositories yet.</p>
        )}

        {status === 'ready' &&
          repos.map((repo, i) => (
            <Reveal key={repo.id} delay={Math.min(i, 5) * 70}>
              <RepoCard repo={repo} />
            </Reveal>
          ))}
      </div>
    </div>
  );
}
