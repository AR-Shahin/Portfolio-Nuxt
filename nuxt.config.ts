// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'netlify'
  },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'slide', mode: 'out-in' },
    head: {
      title: "AR Shahin | Software Engineer & AI Specialist",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: "description", content: "AR Shahin is a Software Engineer specializing in AI, LLMs, and high-performance backend systems. Expert in Laravel, FastAPI, and LangChain." },
        { name: "keywords", content: "AR Shahin, AI Engineer, Software Engineer, LLM Specialist, Laravel Developer, Python Developer, RAG, LangChain, Portfolio" },
        { name: "author", content: "AR Shahin" },

        // Open Graph (Facebook Sharing)
        { property: "og:title", content: "AR Shahin | Software Engineer & AI Specialist" },
        { property: "og:description", content: "Building the future with AI and robust backend architectures. Explore my projects in Gen AI, RAG, and Web Systems." },
        { property: "og:image", content: "https://shop.bandhubattery.com/storage/ars/portfolio_og.png" },
        { property: "og:url", content: "https://arshahin.me" },
        { property: "og:type", content: "website" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "AR Shahin | Software Engineer & AI Specialist" },
        { name: "twitter:description", content: "Building the future with AI and robust backend architectures." },
        { name: "twitter:image", content: "https://shop.bandhubattery.com/storage/ars/portfolio_og.png" }
      ],
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
          rel: "stylesheet"
        },
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
          rel: "stylesheet"
        },
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
          rel: "stylesheet"
        },
        {
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
          rel: "stylesheet"
        },
        { rel: "icon", type: "image/png", href: "https://shop.bandhubattery.com/storage/ars/favicon.png" }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
  css: [
    "@/assets/css/main.css",
    "@/assets/css/responsive.css",
  ],
  modules: ['@pinia/nuxt'],
});

