import { useEffect, useRef, useState } from 'react';

/* =============================================================
   useReveal — the scroll half of "disappear and reveal"
    DONE — read it, don't rewrite it.

   The screen transition handles nav clicks. This handles scrolling:
   things fade up as they enter the viewport, and fade back out as
   they leave it.

   The old way was a scroll listener that ran on every single scroll
   event and did maths on scrollY. The browser has a purpose-built
   tool for this instead: IntersectionObserver. You hand it an
   element, it tells you when that element enters or leaves the
   screen. No scroll listener, no maths, and it doesn't run on the
   main thread, so it doesn't make scrolling feel sticky.
   ============================================================= */

export function useReveal({ threshold = 0.15, once = false } = {}) {
  const ref = useRef(null); // attach this to the DOM element you want watched
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Motion preference again — show everything, animate nothing.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);

        // once: true means "reveal and stay revealed" — stop watching.
        // once: false (the default) lets it fade out again on the way
        // past, which is the "disappear" half of the effect.
        if (entry.isIntersecting && once) observer.unobserve(el);
      },
      {
        threshold, // how much must be on screen before it counts (0.15 = 15%)
        rootMargin: '0px 0px -10% 0px', // trigger slightly before the true edge
      }
    );

    observer.observe(el);

    // Cleanup: without this you'd leak an observer every time the
    // component remounts — which, with screen switching, is often.
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, visible };
}
