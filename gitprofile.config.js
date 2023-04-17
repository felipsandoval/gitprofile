// gitprofile.config.js

const config = {
  github: {
    username: 'felipsandoval', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'felipesandovalsibada',
    twitter: 'felipetuitea',
    mastodon: '',
    facebook: '',
    instagram: 'felipsandoval',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'felipesandoval1111@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python3',
    'PHP',
    'JavaScript',
    'MySQL',
    'Git',
    'CSS',
    'SCSS',
    'ADA',
    'WebGL',
    'Node.js'
  ],
  experiences: [
    {
      company: 'Axians',
      position: 'Application Developer',
      from: 'October 2022',
      to: 'Present',
      companyLink: 'https://axians.com',
    },
    {
      company: 'Axians',
      position: 'Video Technical Support Specialist',
      from: 'May 2019',
      to: 'Present',
      companyLink: 'https://axians.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Universidad Rey Juan Carlos',
      degree: 'BSc degree in Audiovisual Systems & Multimedia Engineering',
      from: '2015',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Duplicate Scripts: CLONE AND ABSTRACTION ANALYSIS ON SCRATCH PROJECTS',
      description:
        'Given the JSON file within Scratch file formats (.SB3), the goal is to choose and collect the relevant attributes of each Sprite, process this information with a clustering algorithm, and give statistical and informative feedback on both intra-sprite and project-level duplicity.',
      imageUrl: '',
      link: 'https://github.com/felipsandoval/duplicatescripts-scratch',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'pastel',
      'wireframe',
      'black',
      'luxury',
      'autumn',
      'business',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with GitProfile and ❤️ from Felipe`,
};

export default config;
