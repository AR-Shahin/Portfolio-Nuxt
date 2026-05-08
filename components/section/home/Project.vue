<template>
  <section id="portfolio_section" class="py-5">
    <div class="container">
      <div class="sec_title text-center mb-5 animate-fade-in-up">
        <span class="skill_tag">My Work</span>
        <h2 class="mt-2">Featured Projects</h2>
        <p class="text-muted">A collection of AI, Backend, and Full-stack applications.</p>
      </div>

      <div class="row g-4">
        <div 
          v-for="(project, index) in projects" 
          :key="index" 
          class="col-12 col-md-6 col-lg-4 animate-fade-in-up"
          :style="{ animationDelay: (index * 0.1) + 's' }"
        >
          <div class="glass-card project_card">
            <div class="project_img_wrapper">
              <img :src="project.image" :alt="project.name" loading="lazy" />
              <div class="project_overlay">
                <nuxt-link :to="`/project/${project.slug}`" class="btn-primary-modern btn-sm">Details</nuxt-link>
                <a v-if="project.liveLink !== '#'" :href="project.liveLink" target="_blank" class="btn-outline-modern btn-sm ms-2">Live Demo</a>
              </div>
            </div>
            <div class="project_content">
              <div class="project_category">{{ project.category }}</div>
              <h3 class="project_name">{{ project.name }}</h3>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span v-for="tech in project.technologies.slice(0, 3)" :key="tech" class="tech_pill">{{ tech }}</span>
              </div>
              <p class="project_desc text-muted small">{{ project.description.substring(0, 100) }}...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useDummyData } from '~/composables/useDummyData';

const { PROJECTS } = useDummyData();
const projects = ref([]);

onMounted(() => {
  projects.value = PROJECTS.filter((p) => p.is_front);
});
</script>

<style lang="scss" scoped>
.project_overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(2, 6, 23, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
}

.project_card:hover .project_overlay {
  opacity: 1;
}

.tech_pill {
  font-size: 0.7rem;
  padding: 2px 8px;
  background: rgba(14, 165, 233, 0.1);
  color: var(--primary-color);
  border-radius: 4px;
  border: 1px solid rgba(14, 165, 233, 0.2);
}

.project_desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>