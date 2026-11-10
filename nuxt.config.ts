export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  devtools: { enabled: false },
  typescript: { strict: true },
  css: ['~/assets/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'no' },
      title: 'Madeleine Bergvik · Frontend-utvikler',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Frontend-utvikler med over tre års erfaring i Vue, Nuxt og TypeScript. Portefølje med arbeid fra Seebrite og prosjekter fra studietiden.',
        },
        { name: 'theme-color', content: '#24587A' },
      ],
      script: [
        {
          innerHTML:
            "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}",
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ultra&display=swap',
        },
      ],
    },
  },
})
