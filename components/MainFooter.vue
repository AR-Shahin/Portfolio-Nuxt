<template>
  <footer class="footer">
    <div class="container">
      <div class="row g-4 justify-content-between">
        <div class="col-lg-4">
          <h3 class="fw-bold mb-3">AR<span class="text-gradient">SHAHIN</span></h3>
          <p class="text-secondary small">Software Engineer & AI Specialist focused on building the future of intelligent systems.</p>
          <div class="d-flex gap-3 mt-4">
            <a href="https://github.com/AR-Shahin" target="_blank" class="text-secondary fs-5"><i class="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/arshahin/" target="_blank" class="text-secondary fs-5"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.youtube.com/@arshahin9803" target="_blank" class="text-secondary fs-5"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <div class="col-lg-2">
          <h6 class="small text-uppercase fw-bold mb-3">Links</h6>
          <ul class="list-unstyled small text-secondary">
            <li class="mb-2"><a href="#about_section" class="text-reset text-decoration-none">About</a></li>
            <li class="mb-2"><a href="#service_section" class="text-reset text-decoration-none">Capabilities</a></li>
            <li class="mb-2"><a href="#portfolio_section" class="text-reset text-decoration-none">Work</a></li>
          </ul>
        </div>
        
        <div class="col-lg-3">
          <h6 class="small text-uppercase fw-bold mb-3">Contact</h6>
          <p class="small text-secondary mb-1">mdshahinmije96@gmail.com</p>
          <p class="small text-secondary">+8801754100439</p>
          <p class="small text-secondary">Dhaka, Bangladesh</p>
        </div>
      </div>
      
      <div class="mt-5 pt-4 border-top border-secondary opacity-25 text-center">
        <p class="small text-secondary mb-0">&copy; {{ new Date().getFullYear() }} AR Shahin. Built with Nuxt 3.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--bg-base);
}
</style>