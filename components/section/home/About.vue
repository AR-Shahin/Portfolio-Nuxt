<template>
  <section id="about_section" class="section-padding">
    <div class="container container-slim">
      <div class="row g-5 align-items-start">
        <div class="col-lg-4 reveal">
          <div class="about-visual position-relative">
            <img src="/img/my/img.jpg" alt="AR Shahin" class="img-fluid rounded-4 shadow-sm grayscale" />
            <div class="experience-pill">4+ Years Exp</div>
          </div>
        </div>
        <div class="col-lg-8 reveal" style="animation-delay: 0.1s">
          <h2 class="section-title mb-4">About Me</h2>
          <p class="text-secondary lead mb-4">
            I am a Software Engineer based in Dhaka, specializing in high-performance backend systems and Generative AI. Currently at <strong>JB Connect Ltd</strong>, I bridge the gap between complex infrastructure and intelligent user experiences.
          </p>

          <div class="tech-core d-flex gap-4 mb-5 p-4 glass-card">
            <div class="core-item">
              <i class="bx bxl-python fs-2 mb-2 text-primary"></i>
              <div class="small fw-bold">Python</div>
            </div>
            <div class="core-item">
              <i class="bx bxl-php fs-2 mb-2 text-primary"></i>
              <div class="small fw-bold">PHP</div>
            </div>
            <div class="core-item">
              <i class="bx bxl-vuejs fs-2 mb-2 text-primary"></i>
              <div class="small fw-bold">Vue/Nuxt</div>
            </div>
            <div class="core-item">
              <i class="bx bxl-aws fs-2 mb-2 text-primary"></i>
              <div class="small fw-bold">AWS</div>
            </div>
            <div class="core-item">
              <i class="bx bx-brain fs-2 mb-2 text-primary"></i>
              <div class="small fw-bold">Gen AI</div>
            </div>
          </div>
          
          <div class="row g-4">
            <div v-for="skill in SKILLS" :key="skill.category" class="col-md-6">
              <h5 class="small text-uppercase text-gradient fw-bold mb-3">{{ skill.category }}</h5>
              <div class="d-flex flex-wrap gap-2">
                <span v-for="item in skill.items" :key="item" class="tag">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useDummyData } from '~/composables/useDummyData';
const { SKILLS } = useDummyData();
</script>

<style lang="scss" scoped>
.grayscale {
  filter: grayscale(1);
  transition: filter 0.5s ease;
  &:hover {
    filter: grayscale(0);
  }
}

.experience-pill {
  position: absolute;
  bottom: -15px;
  right: -15px;
  background: white;
  color: black;
  padding: 8px 20px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 0.8rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
}
</style>