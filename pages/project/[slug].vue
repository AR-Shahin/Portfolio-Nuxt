<template>
  <div class="project_detail_page py-5">
    <div class="container mt-5 pt-5" v-if="project">
      <nuxt-link to="/" class="btn-outline-modern btn-sm mb-4">
        <i class="bx bx-left-arrow-alt"></i> Back to Portfolio
      </nuxt-link>
      
      <div class="row g-5">
        <div class="col-lg-7 animate-fade-in-up">
          <div class="glass-card p-2 mb-4">
            <img :src="project.image" :alt="project.name" class="img-fluid rounded w-100 shadow-lg" />
          </div>
          
          <div v-if="project.extra_images && project.extra_images.length" class="row g-3 mt-2">
            <div v-for="(img, idx) in project.extra_images" :key="idx" class="col-6">
              <div class="glass-card p-1">
                <img :src="img" :alt="`${project.name} screenshot ${idx + 1}`" class="img-fluid rounded w-100" />
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-5 animate-fade-in-up" style="animation-delay: 0.1s">
          <div class="project_info">
            <span class="skill_tag">{{ project.category }}</span>
            <h1 class="mt-2 mb-4">{{ project.name }}</h1>
            
            <div class="mb-4">
              <h5 class="section_subtitle">The Challenge</h5>
              <p class="text-muted">{{ project.description }}</p>
            </div>

            <div class="mb-4">
              <h5 class="section_subtitle">Key Features</h5>
              <ul class="feature_list list-unstyled">
                <li v-for="feature in project.features" :key="feature" class="mb-2">
                  <i class="bx bx-check-circle text-primary me-2"></i> {{ feature }}
                </li>
              </ul>
            </div>

            <div class="mb-5">
              <h5 class="section_subtitle">Stack Used</h5>
              <div class="d-flex flex-wrap gap-2">
                <span v-for="tech in project.technologies" :key="tech" class="skill_tag skill_tag_small">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="action_buttons d-flex gap-3">
              <a v-if="project.liveLink !== '#'" :href="project.liveLink" target="_blank" class="btn-primary-modern w-100 text-center">Live Preview</a>
              <a href="https://github.com/AR-Shahin" target="_blank" class="btn-outline-modern w-100 text-center">Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="container text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-3 text-muted">Loading project details...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useDummyData } from '~/composables/useDummyData';

const { PROJECTS } = useDummyData();
const project = ref(null);
const route = useRoute();

onMounted(() => {
  const foundProject = PROJECTS.find((p) => p.slug === route.params.slug);
  if (foundProject) {
    project.value = foundProject;
  }
});
</script>

<style lang="scss" scoped>
.project_detail_page {
  min-height: 100vh;
  background-color: var(--bg-darker);
}

.section_subtitle {
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.feature_list {
  li {
    color: var(--text-muted);
    font-size: 0.95rem;
  }
}

.skill_tag_small {
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.8rem;
}
</style>