<template>
  <section class="hero_section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="hero_content animate-fade-in-up">
            <span class="skill_tag mb-3">Available for AI & Backend Projects</span>
            <h1 class="hero_title">
              Crafting Intelligent <br />
              Digital Experiences
            </h1>
            <p class="hero_subtitle">
              Hello, I'm <strong>AR Shahin</strong>. A Software Engineer & AI Specialist dedicated to building high-performance backend systems and innovative Gen AI solutions.
            </p>
            <div class="d-flex flex-wrap gap-3 mb-5">
              <a href="#portfolio_section" class="btn-primary-modern">View Projects</a>
              <a href="#contact_section" class="btn-outline-modern">Let's Talk</a>
            </div>
            <div class="hero_socials d-flex gap-4">
              <a href="https://github.com/AR-Shahin" target="_blank" class="social_link"><i class="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/arshahin/" target="_blank" class="social_link"><i class="fab fa-linkedin"></i></a>
              <a href="https://www.youtube.com/@arshahin9803" target="_blank" class="social_link"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-5 d-none d-lg-block">
          <div class="hero_image_container animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="glow_blob"></div>
            <img src="~assets/img/hero.png" alt="AR Shahin" class="img-fluid floating_img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.social_link {
  font-size: 1.5rem;
  color: var(--text-muted);
  transition: all 0.3s ease;
  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
}

.hero_image_container {
  position: relative;
  z-index: 1;
}

.glow_blob {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: var(--accent-gradient);
  filter: blur(80px);
  opacity: 0.15;
  z-index: -1;
  border-radius: 50%;
  animation: glow 8s infinite alternate;
}

.floating_img {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@media (max-width: 991px) {
  .hero_section {
    padding-top: 120px;
    text-align: center;
    justify-content: center;
  }
  .hero_socials {
    justify-content: center;
  }
}
</style>
