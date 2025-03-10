// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'netlify'
  },
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    head: {
      title: "AR Shahin - AI & Software Engineer",
      meta: [
        { name: "description", content: "AR Shahin is an AI & Software Engineer specializing in AI, chatbots, and web development." },
        { name: "keywords", content: "AI, Software Engineer, Chatbots, Web Development, AR Shahin" },
        { name: "author", content: "AR Shahin" },

        // Open Graph (Facebook Sharing)
        { property: "og:title", content: "AR Shahin - AI & Software Engineer" },
        { property: "og:description", content: "Explore AI projects, software engineering insights, and web development tutorials by AR Shahin." },
        { property: "og:image", content: "https://www.freeiconspng.com/uploads/work-on-laptop-icon-10.jpg" },
        { property: "og:url", content: "https://yourwebsite.com" },
        { property: "og:type", content: "website" },

        // Twitter Card (For better Twitter sharing)
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "AR Shahin - AI & Software Engineer" },
        { name: "twitter:description", content: "Explore AI projects, software engineering insights, and web development tutorials by AR Shahin." },
        { name: "twitter:image", content: "https://www.freeiconspng.com/uploads/work-on-laptop-icon-10.jpg" }
      ],
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500&display=swap",
          rel: "stylesheet"
        },
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css",
          rel: "stylesheet"
        },
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
          rel: "stylesheet"
        },
        {
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
          rel: "stylesheet"
        },
        { rel: "icon", type: "image/png", href: "https://www.freeiconspng.com/uploads/work-on-laptop-icon-10.jpg" }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        }
      ]
    }
  },
  css: [
    "@/assets/css/main.css",
    "@/assets/css/responsive.css",
  ],
  plugins: [],
  modules: ['@pinia/nuxt'],
});
