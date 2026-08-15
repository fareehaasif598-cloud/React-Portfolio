/* =============================================================
   PROJECT DATA   FAREEHA — THIS FILE IS YOURS

   This is the file that answers your question about mixing web
   dev, UI/UX and data science. Look at the `track` field. That
   one string is the whole feature — the filter buttons, the
   badges on the cards, and the grouping all read from it.

   You are not building three portfolios. You are building one
   array with a `track` on each item.
   ============================================================= */

/* The three tracks. The label is what shows on the filter buttons. */
export const TRACKS = {
  web: { label: 'Web', short: 'WEB' },
  design: { label: 'Design', short: 'UI/UX' },
  data: { label: 'Data', short: 'DATA' },
};

/* -------------------------------------------------------------
   Each project needs:
     slug   — a unique id, lowercase-with-dashes
     title  — the project name
     track  — 'web' | 'design' | 'data'      <-- the important one
     tech   — array of tools, shown as tags on the card
     desc   — ONE sentence, plain language, no jargon
     links  — { live, repo } — leave a value out if you don't have it
     study  — the five-slot case study (see the TODO below)
   ------------------------------------------------------------- */
export const projects = [
  {
    slug: 'portfolio-v1',
    title: 'Portfolio v1',
    track: 'web',
    week: 1,
    tech: ['HTML'],
    desc: 'A personal portfolio page built with semantic HTML, sections, links, images, and basic page structure.',
    links: {},
    study: null,
  },
  {
    slug: 'styled-profile-page',
    title: 'Styled Profile Page',
    track: 'web',
    week: 2,
    tech: ['CSS'],
    desc: 'A styled version of my profile page using custom fonts, colors, spacing, borders, shadows, and hover effects.',
    links: {},
    study: null,
  },
  {
    slug: 'responsive-portfolio',
    title: 'Responsive Portfolio',
    track: 'web',
    week: 4,
    tech: ['CSS', 'Responsive'],
    desc: 'A responsive portfolio update using media queries, flexible layouts, and mobile-friendly styling.',
    links: {},
    study: null,
  },
  {
    slug: 'interactive-quiz-app',
    title: 'Interactive Quiz App',
    track: 'web',
    week: 5,
    tech: ['JavaScript', 'DOM'],
    desc: 'An interactive quiz app with click events, scoring, and a results screen, built with plain JavaScript.',
    links: {},

    /* ⭐ This is the ONE project with a finished case study, so you can
       see the shape. Copy this structure onto the others.
       Same five questions, same order, every project — that is what
       makes a Figma case study and a Python notebook feel like one site. */
    study: {
      problem: 'Studying from a static list of notes is passive — you can read it ten times and still not know what you have actually retained.',
      process: 'Sketched the question/answer/result flow on paper first, then built it as three states in one page so there was no navigation to get lost in.',
      outcome: 'A working quiz that scores you as you go and shows a results screen at the end.',
      took: 'JavaScript arrays, functions, DOM updates and click events. The scoring broke at first because I was comparing the button element instead of its value.',
      next: 'Save results to localStorage so you can see whether your score is improving over time.',
    },
  },
  {
    slug: 'interactive-portfolio',
    title: 'Interactive Portfolio',
    track: 'web',
    week: 6,
    tech: ['JavaScript', 'Filtering'],
    desc: 'A portfolio project where I used JavaScript to render project cards from data and add filtering and live search.',
    links: {},
    study: null,
  },
  {
    slug: 'github-api-portfolio',
    title: 'GitHub API Portfolio',
    track: 'web',
    week: 7,
    tech: ['JavaScript', 'Fetch', 'API'],
    desc: 'A portfolio update where I used the GitHub API to load my real repositories and display them on the page.',
    links: {},
    study: null,
  },

    {
    slug: 'krusty-krab-redesign',
    title: 'Krusty Krab Website Redesign',
    track: 'design',
    tech: ['Figma', 'Wireframes', 'UI/UX'],
    desc: 'A restaurant website redesign focused on making the layout feel welcoming, easy to use, and responsive across screen sizes.',
    links: {},
    study: null,
  },
  {
    slug: 'personal-finance-dashboard',
    title: 'Personal Finance Dashboard',
    track: 'data',
    tech: ['SQL', 'Power BI', 'Data Analysis'],
    desc: 'A data project that explores income, expenses, budgets, and spending patterns using SQL queries and dashboard visuals.',
    links: {},
    study: null,
  },

  /* ===========================================================
     TODO — YOUR OTHER TWO TRACKS

     Right now every project above is track: 'web'. That's why the
     site currently shows no filter buttons — FilterBar hides itself
     until you have more than one track. Nothing is broken; there is
     just nothing to filter yet.

     Add your UI/UX and data science work below and the filter
     appears on its own. Uncomment one of these and fill it in:

  {
    slug: 'study-buddy-app',
    title: 'Study Buddy — App Concept',
    track: 'design',
    tech: ['Figma', 'Wireframes', 'User Flows'],
    desc: 'A study-planning app concept, from user interviews through to a clickable prototype.',
    links: { live: 'https://figma.com/proto/...' },
    study: {
      problem: '...',
      process: '...',   // for design: research, wireframes, iterations
      outcome: '...',
      took: '...',
      next: '...',
    },
  },
  {
    slug: 'spotify-listening-habits',
    title: 'Spotify Listening Habits',
    track: 'data',
    tech: ['Python', 'pandas', 'Matplotlib'],
    desc: 'An analysis of a year of my own streaming history to find out what actually drives a repeat listen.',
    links: { repo: 'https://github.com/...' },
    study: {
      problem: '...',
      process: '...',   // for data: the question, the cleaning, the method
      outcome: '...',   // the FINDING, not the notebook
      took: '...',
      next: '...',
    },
  },

     A note worth remembering: the case study matters more than the
     code. Five projects with a written `study` beat twelve without.
     =========================================================== */
];

/* -------------------------------------------------------------
   Which tracks actually have projects in them?

   This is why you don't get empty filter buttons. Instead of
   hard-coding ['web', 'design', 'data'], we look at your real data
   and only offer the tracks you've actually filled.

   Read it inside out:
     projects.map(p => p.track)  -> ['web', 'web', 'web', ...]
     new Set(...)                -> removes duplicates
     [...]                       -> back into an array
   ------------------------------------------------------------- */
export const availableTracks = [...new Set(projects.map((p) => p.track))];
