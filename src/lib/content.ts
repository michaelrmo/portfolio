export interface Project {
  name: string;
  href: string;
  stack: string;
  description: string;
  contribution: string;
  note?: string;
}

export const profile = {
  name: 'Michael Moroz',
  email: 's2967259@ed.ac.uk',
  github: 'https://github.com/michaelrmo',
  linkedin: 'https://www.linkedin.com/in/michael-r-moroz',
  introduction: 'I’m studying Computer Science and Mathematics at the University of Edinburgh. I build web applications and simulations, and I’m currently working on multiplayer football and multi-agent reinforcement learning.'
};

export const projects: Project[] = [
  {
    name: 'Panenka',
    href: 'https://github.com/CooperMcCloskey/Panenka',
    stack: 'TypeScript, SvelteKit, Python, JAX',
    note: 'In progress',
    description: 'A browser-based multiplayer football game, with an environment for training multiple reinforcement learning agents using PPO.',
    contribution: 'I’m co-developing the game and have worked on WebSocket rooms, server-managed game state, and client prediction, reconciliation and interpolation to make online play responsive.'
  },
  {
    name: 'Stock Market Simulator',
    href: 'https://github.com/michaelrmo/stockmarketSim',
    stack: 'Python, SQLite, Alpaca API',
    description: 'An object-oriented trading simulator with buy and sell orders, portfolio valuation, and current trade prices from the Alpaca market-data API.',
    contribution: 'Holdings and transactions are stored in SQLite. I added balance and share-quantity checks, stock lookup, and sortable portfolio and transaction views.'
  },
  {
    name: 'Full-Stack Web Application',
    href: 'https://github.com/michaelrmo/dofeFullStack',
    stack: 'React, Node.js, Express, MongoDB',
    description: 'A web application with user accounts, authenticated API requests and a token-based purchase system, with Stripe payments and webhooks.',
    contribution: 'I also configured the hosting: Docker for process isolation, Nginx as a reverse proxy, and Cloudflare in front of the application.'
  }
];

export const experience = [
  {
    role: 'Founder & Leader, Computing Club',
    organisation: 'The High School of Glasgow',
    description: 'Founded and ran the school computing club, teaching Python and problem solving. Students’ results improved in the UK Bebras Coding Challenge.'
  },
  {
    role: 'Technical Support Volunteer',
    organisation: 'RCS Haven',
    description: 'Managed website and email infrastructure using WordPress and Cloudflare. I also supported event organisation and helped teach language lessons.'
  },
  {
    role: 'Team President',
    organisation: 'UK Space Design Competition',
    description: 'Led a team through engineering design problems under tight deadlines, allocating work and balancing constraints, risks and practical trade-offs.'
  }
];

export const education = [
  {
    institution: 'University of Edinburgh',
    period: '2026 – present',
    qualification: 'BSc (Hons) Computer Science and Mathematics',
    detail: 'Started September 2026.'
  },
  {
    institution: 'The High School of Glasgow',
    period: 'Completed 2026',
    qualification: '4 Advanced Highers at A1 · 5 Highers at A1 · 1 A Level at A*',
    detail: 'Awarded the Robin Easton Quaich for Outstanding Academic Achievement. Highest mark in the year for Advanced Higher Mechanics, Physics, Maths and Computing.'
  }
];

export const skills = [
  { label: 'Languages', items: 'Python, TypeScript, JavaScript, SQL, C, HTML/CSS' },
  { label: 'Frameworks & data', items: 'SvelteKit, React, Node.js, Express, Django, SQLite, MongoDB' },
  { label: 'Tools & infrastructure', items: 'Git, Docker, Nginx, Cloudflare, REST APIs, WebSockets' }
];
