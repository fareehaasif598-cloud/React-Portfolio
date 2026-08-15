import { TRACKS } from '../data/projects.js';
import KeyButton from './KeyButton.jsx';

/* =============================================================
   FilterBar —  done. The "SELECT MODE" row.

   This is the component that answers your original question. Web,
   UI/UX and data science don't need three sections — they need one
   grid and this row of buttons.

   Two details worth copying:

   1. It hides itself when there's only one track (see the early
      return). A filter with one option isn't a filter, it's clutter.
      So the moment you add a design or data project, this appears on
      its own. Nothing for you to switch on.

   2. aria-pressed tells a screen reader "this button is currently
      on". The keycap CSS also keys off it, so the active track stays
      visually pressed into its slot. The look and the announcement
      come from the same source of truth.
   ============================================================= */

export default function FilterBar({ tracks, active, onChange }) {
  // One track (or none) means nothing to filter. Render nothing.
  if (tracks.length < 2) return null;

  const options = ['all', ...tracks];

  return (
    <div className="filter-bar" role="group" aria-label="Filter projects by discipline">
      {options.map((track) => (
        <KeyButton
          key={track}
          variant={active === track ? 'gold' : 'ghost'}
          aria-pressed={active === track}
          onClick={() => onChange(track)}
        >
          {track === 'all' ? 'All' : TRACKS[track].label}
        </KeyButton>
      ))}
    </div>
  );
}
