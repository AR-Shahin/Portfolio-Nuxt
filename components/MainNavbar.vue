<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <div class="logo_glow"></div>
        <span class="brand_text">AR <span class="text-primary">SHAHIN</span></span>
      </router-link>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="#about_section">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#service_section">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio_section">Portfolio</a>
          </li>
          <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
            <a href="mailto:mdshahinmije96@gmail.com" class="btn-primary-modern btn-sm">Hire Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.navbar {
  transition: all 0.4s ease;
  padding: 1.5rem 0;
  
  &.scrolled {
    padding: 0.8rem 0;
    background: rgba(2, 6, 23, 0.9) !important;
    border-bottom: 1px solid var(--glass-border);
  }
}

.brand_text {
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -1px;
  color: white;
  position: relative;
  z-index: 2;
}

.logo_glow {
  position: absolute;
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  filter: blur(20px);
  opacity: 0.3;
  z-index: 1;
}

.navbar-toggler {
  border: none;
  padding: 0;
  &:focus {
    box-shadow: none;
  }
}

@media (max-width: 991px) {
  .navbar-collapse {
    background: var(--bg-darker);
    margin-top: 1rem;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--glass-border);
  }
}
</style>