import { useCallback, useEffect, useState } from 'react';

/* =============================================================
   useRepos — your Week 7 GitHub fetch, moved into React
    DONE — but this is the one worth studying closely, because it
   shows the difference between vanilla JS and React thinking.

   YOUR OLD VERSION (api.js + initRepos in main.js) said:
     "fetch the repos, then reach into the page and set innerHTML"

   THE REACT VERSION says:
     "fetch the repos, then put them in state"
     ...and the component re-renders itself. You never touch the DOM.

   That's the whole mental shift: you change data, React changes the
   page. You will never call document.getElementById again.
   ============================================================= */

export function useRepos(username, perPage = 6) {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
  const [error, setError] = useState(null);

  // Bumping this number is how "Try Again" re-runs the effect below.
  const [attempt, setAttempt] = useState(0);
  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  useEffect(() => {
    // No username yet? Don't fire a request for /users/undefined/repos.
    if (!username) return;

    const controller = new AbortController();

    async function load() {
      setStatus('loading');
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}`,
          { signal: controller.signal }
        );

        // Same check as your Week 7 version: fetch does NOT throw on
        // a 404. It resolves happily with ok === false. You have to
        // check it yourself.
        if (!response.ok) {
          throw new Error('Could not load repositories. Please try again later.');
        }

        setRepos(await response.json());
        setStatus('ready');
      } catch (err) {
        // An aborted request isn't a real failure — it means the
        // component went away or we retried. Don't show an error.
        if (err.name === 'AbortError') return;
        setError(err.message);
        setStatus('error');
      }
    }

    load();

    // THE IMPORTANT BIT. This runs when the component unmounts, or
    // before the effect runs again. It cancels the in-flight request.
    // Without it, switching screens mid-fetch tries to set state on a
    // component that's already gone.
    return () => controller.abort();
  }, [username, perPage, attempt]);

  return { repos, status, error, retry };
}
