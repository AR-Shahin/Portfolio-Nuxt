<template>
  <section id="service_section" class="section-padding bg-surface">
    <div class="container">
      <div class="row align-items-center mb-5 reveal">
        <div class="col-lg-6">
          <h2 class="section-title">Capabilities</h2>
        </div>
        <div class="col-lg-6">
          <p class="text-secondary mb-0">Specialized engineering for high-performance applications and intelligent automation systems.</p>
        </div>
      </div>

      <div class="row g-4 mt-2">
        <div v-for="(service, index) in services" :key="index" class="col-md-4 reveal" :style="{ animationDelay: (index * 0.1) + 's' }">
          <div class="capability-card">
            <div class="icon-simple mb-3">
              <i :class="service.icon"></i>
            </div>
            <h4 class="mb-3">{{ service.title }}</h4>
            <p class="text-secondary small mb-0">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { title: "AI & LLM Integration", desc: "Building RAG systems, intelligent agents, and custom chatbot solutions using OpenAI and LangChain.", icon: "bx bx-bot" },
  { title: "Backend Systems", desc: "Robust and scalable server-side architectures using Laravel, FastAPI, and Node.js.", icon: "bx bx-server" },
  { title: "Full-stack Apps", desc: "Developing modern, reactive user interfaces with Nuxt.js integrated with high-performance backends.", icon: "bx bx-code-alt" },
  { title: "API Architecture", desc: "Designing secure, high-speed RESTful and GraphQL APIs optimized for enterprise-level data.", icon: "bx bx-plug" },
  { title: "Database & Cache", desc: "Architecture and optimization for MySQL, MongoDB, and Redis for high-speed caching.", icon: "bx bx-data" },
  { title: "Cloud & DevOps", desc: "Automating deployments with Docker and managing infrastructure on AWS and VPS.", icon: "bx bx-cloud" }
]
</script>

<style lang="scss" scoped>
.capability-card {
  padding: 2rem;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  height: 100%;
  transition: all 0.3s ease;
  &:hover {
    border-color: var(--primary-color);
  }
}

.icon-simple {
  font-size: 2rem;
  color: var(--primary-color);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
}
</style>