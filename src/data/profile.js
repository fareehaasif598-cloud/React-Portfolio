

export const profile = {
  name: 'Fareeha Asif',
  role: 'Frontend Developer',
  tagline: 'I design interfaces, build them, and dig into the data behind them.',
  bio: `I'm a frontend developer with a background in psychology and a growing skill set in web development,
   UI/UX, and data. Through WEB101, I learned how to design interfaces, build responsive pages with HTML, CSS, JavaScript, and React, 
   and work with data using tools like Python and SQL.`,

  email: 'fareehaasif_598@hotmail.com',
  githubUsername: 'fareehaasif598-cloud',

  links: {
  github: 'https://github.com/fareehaasif598-cloud',
  linkedin: 'https://www.linkedin.com/in/fareeha-asif-a6b854243/',
  resume: `${import.meta.env.BASE_URL}fareeha-asif-resume.pdf`,
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
