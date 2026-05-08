<template>
  <section id="about_section" class="py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <div class="about_image_stack animate-fade-in-up">
            <div class="glass-card main_img">
              <img src="/img/my/img.jpg" alt="AR Shahin" class="img-fluid rounded" />
            </div>
            <div class="experience_badge glass-card">
              <span class="number">4+</span>
              <span class="text">Years of <br />Experience</span>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="about_content ps-lg-5 animate-fade-in-up" style="animation-delay: 0.1s">
            <div class="sec_title mb-4">
              <span class="skill_tag">Discovery</span>
              <h2 class="mt-2">About Me</h2>
            </div>
            <p class="text-muted mb-4 lead">
              I am a Software Engineer based in Dhaka, Bangladesh, with a deep passion for <strong>Artificial Intelligence</strong> and robust <strong>Backend Architectures</strong>.
            </p>
            <div class="about_tabs">
              <div class="d-flex gap-3 mb-4 flex-wrap">
                <button 
                  v-for="tab in ['Bio', 'Skills', 'Education']" 
                  :key="tab"
                  @click="activeTab = tab"
                  class="btn-tab"
                  :class="{ 'active': activeTab === tab }"
                >
                  {{ tab }}
                </button>
              </div>

              <div v-if="activeTab === 'Bio'" class="tab_pane animate-fade-in-up">
                <p class="text-muted">
                  With a background in full-stack development, I currently specialize in <strong>Gen AI</strong> and <strong>LLM integration</strong>. My work at SSL Wireless involves building sophisticated chatbot applications and AI automation systems.
                </p>
                <p class="text-muted">
                  I hold a BSc in Computer Science & Engineering with a CGPA of 3.86. I'm also a content creator, sharing my knowledge through YouTube and my personal blog.
                </p>
              </div>

              <div v-if="activeTab === 'Skills'" class="tab_pane animate-fade-in-up">
                <div v-for="skillGroup in SKILLS" :key="skillGroup.category" class="mb-3">
                  <h5 class="skill_group_title small text-uppercase text-primary">{{ skillGroup.category }}</h5>
                  <div class="d-flex flex-wrap gap-2">
                    <span v-for="skill in skillGroup.items" :key="skill" class="skill_tag skill_tag_small">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>

              <div v-if="activeTab === 'Education'" class="tab_pane animate-fade-in-up">
                <div class="education_item glass-card p-3 mb-3">
                  <h5 class="mb-1">BSc in Computer Science & Engineering</h5>
                  <p class="text-primary mb-1">South-East University</p>
                  <p class="text-muted small mb-0">CGPA: 3.86 | 2018 - 2022</p>
                </div>
                <div class="education_item glass-card p-3">
                  <h5 class="mb-1">HSC (Science)</h5>
                  <p class="text-primary mb-1">Gazipur Cantonment Board College</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useDummyData } from '~/composables/useDummyData';

const { SKILLS } = useDummyData();
const activeTab = ref('Bio');
</script>

<style lang="scss" scoped>
.about_image_stack {
  position: relative;
  padding-right: 40px;
  padding-bottom: 40px;
}

.main_img {
  padding: 10px;
  img {
    filter: grayscale(20%);
    transition: all 0.5s ease;
    &:hover {
      filter: grayscale(0%);
    }
  }
}

.experience_badge {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1.5rem;
  background: var(--accent-gradient);
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  border-radius: 12px;
  box-shadow: 0 10px 20px -5px rgba(14, 165, 233, 0.4);

  .number {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1;
  }
  .text {
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1.2;
  }
}

.btn-tab {
  background: transparent;
  border: 1px solid var(--glass-border);
  color: var(--text-muted);
  padding: 8px 24px;
  border-radius: 100px;
  font-weight: 500;
  transition: all 0.3s ease;
  &:hover {
    border-color: var(--text-main);
    color: var(--text-main);
  }
  &.active {
    background: var(--accent-gradient);
    border-color: transparent;
    color: white;
    box-shadow: 0 4px 12px -2px rgba(14, 165, 233, 0.3);
  }
}

.skill_tag_small {
  font-size: 0.75rem;
  padding: 4px 12px;
  margin: 0;
}

.skill_group_title {
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
}
</style>