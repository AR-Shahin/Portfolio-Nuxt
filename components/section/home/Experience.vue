<template>
  <section id="experience_section" class="py-5 bg-darker">
    <div class="container">
      <div class="sec_title text-center mb-5 animate-fade-in-up">
        <span class="skill_tag">Journey</span>
        <h2 class="mt-2 text-white">Professional Experience</h2>
        <p class="text-muted">My career path and the companies I've helped grow.</p>
      </div>

      <div class="timeline mt-5">
        <div 
          v-for="(exp, index) in EXPERIENCE" 
          :key="index" 
          class="timeline_item animate-fade-in-up"
          :style="{ animationDelay: (index * 0.1) + 's' }"
        >
          <div class="timeline_content glass-card p-4">
            <div class="d-flex justify-content-between align-items-start mb-3 flex-wrap">
              <div>
                <h4 class="mb-1 text-primary">{{ exp.role }}</h4>
                <h5 class="small text-white">{{ exp.company }}</h5>
              </div>
              <span class="badge bg-primary-subtle text-primary rounded-pill px-3">{{ exp.period }}</span>
            </div>
            <p class="text-muted small mb-3">{{ exp.description }}</p>
            <ul class="points_list list-unstyled small text-muted">
              <li v-for="point in exp.points" :key="point" class="mb-2">
                <i class="bx bx-check-circle text-primary me-2"></i> {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useDummyData } from '~/composables/useDummyData';
const { EXPERIENCE } = useDummyData();
</script>

<style lang="scss" scoped>
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 2px;
    background: var(--glass-border);
  }
}

.timeline_item {
  position: relative;
  padding-left: 60px;
  margin-bottom: 40px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 11px;
    width: 20px;
    height: 20px;
    background: var(--accent-gradient);
    border-radius: 50%;
    z-index: 2;
    box-shadow: 0 0 10px var(--primary-color);
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.timeline_content {
  transition: all 0.3s ease;
  &:hover {
    border-color: var(--primary-color);
  }
}

@media (max-width: 767px) {
  .timeline_item {
    padding-left: 40px;
    &::before {
      left: 11px;
    }
  }
  .timeline::before {
    left: 20px;
  }
}
</style>
