<template>
  <section id="service_section" class="py-5">
    <div class="container">
      <div class="sec_title text-center mb-5 animate-fade-in-up">
        <span class="skill_tag">Solutions</span>
        <h2 class="mt-2">Expert Services</h2>
        <p class="text-muted">Specialized engineering for modern intelligent applications.</p>
      </div>

      <div class="row g-4 mt-4">
        <div v-for="(service, index) in services" :key="index" class="col-12 col-md-6 col-lg-4 animate-fade-in-up" :style="{ animationDelay: (index * 0.1) + 's' }">
          <div class="glass-card service_card h-100 p-4">
            <div class="icon_wrapper mb-4">
              <i :class="service.icon"></i>
            </div>
            <h4>{{ service.title }}</h4>
            <p class="text-muted">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "AI & LLM Integration",
    desc: "Building intelligent agents, RAG systems, and custom chatbot solutions using OpenAI, LangChain, and Vector databases.",
    icon: "bx bx-bot"
  },
  {
    title: "Backend Development",
    desc: "Robust and scalable server-side architectures using Laravel, FastAPI, and Node.js with a focus on performance.",
    icon: "bx bx-server"
  },
  {
    title: "Full-stack Web Apps",
    desc: "Developing modern, reactive user interfaces with Nuxt.js and Vue.js integrated with high-performance backends.",
    icon: "bx bx-code-alt"
  },
  {
    title: "API Design & Optimization",
    desc: "Designing secure, high-speed RESTful and GraphQL APIs optimized for enterprise-level data handling.",
    icon: "bx bx-plug"
  },
  {
    title: "Database Management",
    desc: "Architecture and optimization for MySQL, MongoDB, and PostgreSQL, including Redis for high-speed caching.",
    icon: "bx bx-data"
  },
  {
    title: "DevOps & Cloud",
    desc: "Automating deployments with Docker and managing infrastructure on AWS and VPS environments.",
    icon: "bx bx-cloud"
  }
]
</script>

<style lang="scss" scoped>
.service_card {
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  .icon_wrapper {
    width: 60px;
    height: 60px;
    background: rgba(14, 165, 233, 0.1);
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border-radius: 12px;
    margin: 0 auto;
    transition: all 0.3s ease;
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  &:hover {
    .icon_wrapper {
      background: var(--accent-gradient);
      color: white;
      transform: rotateY(180deg);
    }
  }
}
</style>