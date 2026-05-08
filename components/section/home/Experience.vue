<template>
  <section id="experience_section" class="section-padding">
    <div class="container container-slim">
      <div class="mb-5 reveal">
        <h2 class="section-title">Career Path</h2>
        <p class="text-secondary">Professional timeline and roles.</p>
      </div>

      <div class="experience-list">
        <div v-for="(exp, index) in EXPERIENCE" :key="index" class="exp-item reveal" :style="{ animationDelay: (index * 0.1) + 's' }">
          <div class="row">
            <div class="col-md-3">
              <span class="text-secondary small fw-bold">{{ exp.period }}</span>
            </div>
            <div class="col-md-9">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h4 class="mb-0">{{ exp.role }}</h4>
              </div>
              <h5 class="small text-gradient fw-bold mb-3">{{ exp.company }}</h5>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span v-if="index === 0" class="tag-xs">AWS</span>
                <span v-if="index === 0" class="tag-xs">Gen AI</span>
                <span v-if="index < 3" class="tag-xs">Backend</span>
              </div>
              <p class="text-secondary small">{{ exp.description }}</p>
            </div>
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
.exp-item {
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--border-color);
  &:last-child {
    border-bottom: none;
  }
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
}
</style>
