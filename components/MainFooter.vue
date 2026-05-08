<template>
  <footer class="footer">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4">
          <div class="footer_brand mb-4">
            <h3 class="brand_text">AR <span class="text-primary">SHAHIN</span></h3>
            <p class="text-muted mt-3">
              Software Engineer & AI Specialist dedicated to building the future of intelligent web systems.
            </p>
          </div>
          <div class="social_links d-flex gap-3">
            <a href="https://github.com/AR-Shahin" target="_blank" class="social_btn"><i class="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/arshahin/" target="_blank" class="social_btn"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.youtube.com/@arshahin9803" target="_blank" class="social_btn"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <div class="col-lg-4 col-md-6">
          <h4 class="footer_title mb-4">Quick Links</h4>
          <ul class="footer_links list-unstyled">
            <li><a href="#about_section">About Me</a></li>
            <li><a href="#service_section">Expertise</a></li>
            <li><a href="#portfolio_section">Portfolio</a></li>
            <li><a href="https://tutspack.com/" target="_blank">Tech Blog</a></li>
          </ul>
        </div>
        
        <div class="col-lg-4 col-md-6">
          <h4 class="footer_title mb-4">Newsletter</h4>
          <p class="text-muted small mb-4">Subscribe to get the latest updates on AI and software engineering.</p>
          <div class="newsletter_form glass-card d-flex p-1">
            <input type="email" placeholder="Email address" class="form-control bg-transparent border-0 text-white" />
            <button class="btn-primary-modern btn-sm">Join</button>
          </div>
        </div>
      </div>
      
      <div class="footer_bottom mt-5 pt-4 text-center border-top border-secondary">
        <p class="text-muted small mb-0">
          &copy; {{ new Date().getFullYear() }} AR Shahin. All rights reserved. Built with Nuxt 3.
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--bg-darker);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--glass-border);
  }
}

.brand_text {
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
}

.footer_title {
  font-size: 1.1rem;
  font-weight: 700;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--primary-color);
  }
}

.footer_links li {
  margin-bottom: 12px;
  a {
    color: var(--text-muted);
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      color: var(--primary-color);
      padding-left: 5px;
    }
  }
}

.social_btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background: var(--accent-gradient);
    border-color: transparent;
    transform: translateY(-3px);
  }
}

.newsletter_form {
  border-radius: 10px;
  input:focus {
    box-shadow: none;
  }
}
</style>