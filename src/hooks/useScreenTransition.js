import { useCallback, useEffect, useRef, useState } from 'react';

/* =============================================================
   useScreenTransition — the "page disappears, then reveals" engine
    DONE — read it, don't rewrite it.

   WHY THIS EXISTS
   In your Week 8 main.js you tried this with a scroll listener and
   a .hidden class. It couldn't work, for a sneaky reason worth
   knowing: `.hidden { display: none }` removed every section from
   the layout, so the page had no height left — and a page with no
   height can't be scrolled, so the scroll handler stopped firing.
   The feature was fighting its own trigger.

   THE FIX
   Don't tie it to scrolling. Tie it to the thing that actually
   means "go somewhere else": a nav click. Then it's three steps:

     1. animate the CURRENT screen out      (phase = 'out')
     2. wait for that animation to finish   (setTimeout)
     3. swap the content and animate IN     (phase = 'in')

   Step 2 is the part people forget. React would otherwise replace
   the content instantly and you'd never see the exit animation.
   ============================================================= */

/* Read once per call rather than caching it — someone can change
   this OS setting while the page is open. */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useScreenTransition(initialScreen, duration = 260) {
  const [screen, setScreen] = useState(initialScreen);
  const [phase, setPhase] = useState('in'); // 'in' while arriving, 'out' while leaving
  const timerRef = useRef(null);

  const goTo = useCallback(
    (next) => {
      if (next === screen) return; // already here, nothing to animate

      // Some people get motion sick, and some just don't want the
      // animation. Swap instantly and skip the whole dance.
      if (prefersReducedMotion()) {
        setScreen(next);
        setPhase('in');
        return;
      }

      setPhase('out'); // 1. current screen animates away

      // If they click a second nav item mid-animation, throw away the
      // first pending swap so the LAST click is the one that wins.
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setScreen(next); // 2. content swaps while nothing is visible
        setPhase('in'); //  3. new screen animates in
        window.scrollTo({ top: 0 });
      }, duration);
    },
    [screen, duration]
  );

  // If the component unmounts mid-transition, a pending timer would
  // try to set state on something that no longer exists. Clean it up.
  useEffect(() => () => clearTimeout(timerRef.current), []);

  return { screen, phase, goTo };
}
