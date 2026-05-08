<template>
  <section id="portfolio_section" class="section-padding">
    <div class="container">
      <div class="text-center mb-5 reveal">
        <h2 class="section-title">Selected Projects</h2>
        <p class="text-secondary">A curated list of my technical contributions.</p>
      </div>

      <div class="portfolio-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-item reveal" :style="{ animationDelay: (index * 0.1) + 's' }">
          <img :src="project.image" :alt="project.name" class="project-image" />
          <div class="project-details">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <span class="small text-gradient fw-bold">{{ project.category }}</span>
                <h4 class="mt-1 mb-0" style="font-size: 1.1rem">{{ project.name }}</h4>
              </div>
              <nuxt-link :to="`/project/${project.slug}`" class="arrow-btn-sm">
                <i class="bx bx-right-arrow-alt"></i>
              </nuxt-link>
            </div>
            <div class="d-flex flex-wrap gap-1 mt-2">
              <span v-for="tech in project.technologies.slice(0, 4)" :key="tech" class="tag-xs">{{ tech }}</span>
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
.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.arrow-btn {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.5rem;
  &:hover {
    background: var(--primary-color);
    transform: rotate(-45deg);
  }
}
</style>