<template>
  <section id="achievements_section" class="py-5">
    <div class="container">
      <div class="sec_title text-center mb-5 animate-fade-in-up">
        <span class="skill_tag">Milestones</span>
        <h2 class="mt-2 text-white">Honors & Achievements</h2>
        <p class="text-muted">Key highlights from my academic and professional journey.</p>
      </div>

      <div class="row g-4">
        <div 
          v-for="(ach, index) in ACHIEVEMENTS" 
          :key="index" 
          class="col-md-4 animate-fade-in-up"
          :style="{ animationDelay: (index * 0.1) + 's' }"
        >
          <div class="glass-card achievement_card h-100 p-4">
            <div class="icon_box mb-3">
              <i class="bx bxs-award"></i>
            </div>
            <h4 class="text-white mb-2">{{ ach.title }}</h4>
            <div class="d-flex justify-content-between mb-3">
              <span class="text-primary small fw-bold">{{ ach.organization }}</span>
              <span class="text-muted small">{{ ach.date }}</span>
            </div>
            <p class="text-muted small mb-0">{{ ach.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useDummyData } from '~/composables/useDummyData';
const { ACHIEVEMENTS } = useDummyData();
</script>

<style lang="scss" scoped>
.achievement_card {
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    .icon_box i {
      transform: scale(1.2);
      color: var(--secondary-color);
    }
  }
}

.icon_box {
  i {
    font-size: 2.5rem;
    color: var(--primary-color);
    transition: all 0.3s ease;
  }
}
</style>
