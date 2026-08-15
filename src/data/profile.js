/* =============================================================
   YOUR DETAILS FAREEHA — THIS FILE IS YOURS
   Nothing here is code you have to understand. It's just facts
   about you. Every component reads from this file, so changing a
   value here changes it everywhere on the site.
   ============================================================= */

export const profile = {
  name: 'Fareeha Asif',

  /* TODO: your positioning sentence.
     We talked about dropping "aspiring" — you finished the bootcamp,
     you're a developer. Say what you DO, not what you hope to be.
     Aim for one sentence that covers all three disciplines. */
  role: 'Frontend Developer',
  tagline: 'I design interfaces, build them, and dig into the data behind them.',

  /* TODO: rewrite this in your own voice. 2–3 sentences max.
     Mention the bootcamp, but lead with what you can DO. */
  bio: `I build clean, responsive websites and interactive web apps.
        I came out of the WEB101 bootcamp comfortable across the whole
        pipeline — designing the interface, building it in HTML, CSS and
        JavaScript, and working with the data behind it in Python and SQL.`,

  email: 'fareehaasif_598@hotmail.com',
  githubUsername: 'fareehaasif598-cloud',

  links: {
    github: 'https://github.com/fareehaasif598-cloud',
    /* TODO: add your LinkedIn — your old site didn't have one,
       and it's the first thing a recruiter looks for. */
    linkedin: '',
    /* TODO: drop a PDF in the /public folder and point at it,
       e.g. '/fareeha-asif-resume.pdf' */
    resume: '',
  },

  /* Skills grouped by discipline. This grouping is doing real work —
     it tells the three-discipline story before anyone scrolls.
     TODO: add/remove to match what you'd actually be happy
     being asked about in an interview. */
  skills: [
    { track: 'web', label: 'Web', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Git'] },
    { track: 'design', label: 'Design', items: ['Figma', 'Wireframing', 'Accessibility'] },
    { track: 'data', label: 'Data', items: ['Python', 'SQL', 'pandas'] },
  ],
};
