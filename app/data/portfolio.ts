import type { ContactLink, Job, SkillGroup, StudyProject, WorkCase, ShowcaseSlide } from '~/types/portfolio'

export const cvUrl = '/Madeleine-Bergvik-CV.pdf'

export const workCases: WorkCase[] = [
  {
    title: 'Min læring',
    summary: 'E-læring for butikkansatte, fra kurs til quiz.',
    points: [
      'Utviklet modulen der ansatte tar kurs med kapitler, quiz og video',
      'Fremdriften følger brukeren på web, mobil og nettbrett',
    ],
    tags: ['Vue 3', 'Pinia', 'Vuetify'],
  },
  {
    title: 'Adminløsningene',
    summary: 'Hadde ansvaret for adminløsningen kjedene bruker til å styre plattformen, og for kundeadministrasjonen der nye kunder settes opp.',
    points: [
      'Brukere, roller og rollesett, organisasjonshierarki og systemparametere',
      'Nye funksjoner, vedlikehold og oppgradering til Nuxt 4',
      'Kundeadministrasjon: innlogging, SMS-avsender og client secrets for hver kunde',
    ],
    tags: ['Nuxt 4', 'Vue 3', 'TypeScript', 'PrimeVue', 'AG Grid'],
  },
  {
    title: 'Sikkerhet og kvalitet',
    summary: 'Gjorde appen tryggere for innhold som brukere og administratorer skriver.',
    points: [
      'XSS-beskyttelse og sanering av brukerinnhold',
      'Passord og API-nøkler holdt utenfor koden som sendes til nettleseren',
      'Enhetstester med Vitest',
    ],
    tags: ['DOMPurify', 'Vitest', 'Code review'],
  },
  {
    title: 'Ukeplan, feed og page builder',
    summary: 'Funksjoner butikkene bruker hver dag, med et øye for detaljene.',
    points: [
      'Videreutviklet ukeplanen, sosial feed og page builder med widgets',
      'Fargetemaer for kjedene og animasjoner',
    ],
    tags: ['Vue 3', 'Vite', 'i18n'],
  },
]

export const studyProjects: StudyProject[] = [
  {
    slug: 'holidaze',
    title: 'Holidaze',
    kind: 'Eksamensprosjekt 2',
    description: 'Bookingside for hoteller, B&B og leiligheter i Stavanger.',
    image: '/projects/holidaze.png',
    liveUrl: 'https://dazzling-medovik-426cf6.netlify.app/',
    repoUrl: 'https://github.com/madeleinecmarie/project-exam-2-madeleine-bergvik',
    tags: [],
  },
  {
    slug: 'ili',
    title: '‘ili, skincare',
    kind: 'Semesterprosjekt',
    description: 'Nettbutikk for vegansk sminke som ikke er testet på dyr.',
    image: '/projects/ili.png',
    liveUrl: 'https://keen-kirch-bf42aa.netlify.app/',
    repoUrl: 'https://github.com/madeleinecmarie/madeleinebergvik-semesterproject',
    tags: [],
  },
  {
    slug: 'rick-morty',
    title: 'Rick & Morty',
    kind: 'JavaScript-rammeverk',
    description: 'Oppslagsside der jeg brukte GraphQL for å gi meg selv en ekstra utfordring.',
    image: '/projects/rick-morty.png',
    liveUrl: 'https://thunderous-sawine-e58f13.netlify.app/',
    repoUrl: 'https://github.com/madeleinecmarie/js-frameworks-ca-madeleinebergvik',
    tags: ['GraphQL'],
  },
  {
    slug: 'happytravel',
    title: 'HappyTravel',
    kind: 'Eksamensprosjekt 1',
    description: 'Minimalistisk reiseblogg med fokus på tekst og bilder.',
    image: '/projects/happytravel.png',
    liveUrl: 'https://compassionate-allen-d47a37.netlify.app/',
    repoUrl: 'https://github.com/madeleinecmarie/project-exam-1-madeleinebergvik',
    tags: [],
  },
  {
    slug: 'giving-tree',
    title: 'Giving Tree',
    kind: 'Interaksjonsdesign',
    description: 'Prosjekt fra første år der jeg lærte mye om UI og UX.',
    image: '/projects/giving-tree.png',
    liveUrl: 'https://elastic-nightingale-265b77.netlify.app/',
    repoUrl: 'https://github.com/madeleinecmarie/Interaction_Design_CA_Madeleine_Olofsson',
    tags: ['UI/UX'],
  },
  {
    slug: 'pokemon',
    title: 'Pokémon',
    kind: 'JavaScript 1',
    description: 'Lite prosjekt der jeg lærte å hente data fra et REST API.',
    image: '/projects/pokemon.png',
    liveUrl: 'https://cranky-benz-dc8db0.netlify.app/',
    repoUrl: 'https://github.com/madeleinecmarie/Madeleine-Olofsson-js1-ca',
    tags: ['REST API'],
  },
  {
    slug: 'old-portfolio',
    title: 'Første portefølje',
    kind: 'Første år',
    description: 'Porteføljen fra første år, inspirert av farger og minimalisme.',
    image: '/projects/old-portfolio.png',
    liveUrl: 'https://sharp-hermann-17c8a0.netlify.app/',
    repoUrl: 'https://github.com/madeleinecmarie/portfolio-1-madeleinebergvik',
    tags: [],
  },
]

export const skillGroups: SkillGroup[] = [
  { label: 'Språk og rammeverk', items: ['TypeScript', 'JavaScript', 'Vue 3', 'Nuxt', 'React', 'Next.js', 'HTML', 'CSS/SCSS'] },
  { label: 'UI-biblioteker', items: ['Vuetify', 'PrimeVue', 'AG Grid', 'Tailwind CSS', 'Bootstrap'] },
  { label: 'Kvalitet og sikkerhet', items: ['Vitest', 'ESLint', 'Prettier', 'Websikkerhet (XSS)', 'Code review'] },
  { label: 'Verktøy', items: ['Git', 'Azure DevOps', 'Vite', 'pnpm', 'Figma', 'Claude Code'] },
]

export const jobs: Job[] = [
  { place: 'Seebrite', role: 'Frontend-utvikler', period: '2023 – i dag' },
  { place: 'Swix', role: 'Butikkmedarbeider', period: '2023' },
  { place: 'Lee & Wrangler', role: 'Ekstrahjelp', period: '2020 – 2023' },
  { place: 'Stockfleths', role: 'Barista, assisterende avdelingsleder og avdelingsleder', period: '2015 – 2023' },
  { place: 'Bik Bok og Wayne’s Coffee', role: 'Butikk og café', period: '2013 – 2015' },
]

export const education: Job[] = [
  { place: 'Noroff', role: 'Høyere fagskoleutdanning i frontend-utvikling', period: '2020 – 2022' },
]

export const contactLinks: ContactLink[] = [
  { label: 'E-post', value: 'madeleinebergvik@gmail.com', href: 'mailto:madeleinebergvik@gmail.com' },
  { label: 'Telefon', value: '+47 463 17 018', href: 'tel:+4746317018' },
  { label: 'LinkedIn', value: 'Madeleine Bergvik', href: 'https://www.linkedin.com/in/madeleine-bergvik-276b6b20a' },
  { label: 'GitHub', value: 'madeleinecmarie', href: 'https://github.com/madeleinecmarie' },
]

export const weekPlanSlides: ShowcaseSlide[] = [
  {
    src: '/ukeplan/rediger.png',
    title: 'Planlegg uken',
    text: 'Legg oppgaver fra banken rett inn på dagene, sortert i kategorier.',
    width: 1916,
    height: 977,
  },
  {
    src: '/ukeplan/innstillinger.png',
    title: 'Filtrer på tags',
    text: 'Velg tags som åpnevakt eller kasseansvarlig, og hva som vises på kortene.',
    width: 1917,
    height: 985,
  },
  {
    src: '/ukeplan/dagen-i-boks.png',
    title: 'Dagen er i boks',
    text: 'Når alle dagens oppgaver er gjort, feirer maskoten med konfetti.',
    width: 1913,
    height: 986,
  },
]
