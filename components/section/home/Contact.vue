<template>
  <section id="contact_section" class="py-5">
    <div class="container">
      <div class="sec_title text-center mb-5 animate-fade-in-up">
        <span class="skill_tag">Connect</span>
        <h2 class="mt-2 text-white">Get In Touch</h2>
        <p class="text-muted">Have a project in mind? Let's build something amazing together.</p>
      </div>

      <div class="row g-5">
        <div class="col-lg-5 animate-fade-in-up">
          <div class="contact_info_grid">
            <div class="glass-card p-4 mb-4 d-flex align-items-center gap-4">
              <div class="contact_icon bg-primary-subtle text-primary">
                <i class="bx bx-envelope"></i>
              </div>
              <div>
                <h5 class="mb-1">Email</h5>
                <p class="text-muted mb-0 small">mdshahinmije96@gmail.com</p>
              </div>
            </div>
            
            <div class="glass-card p-4 mb-4 d-flex align-items-center gap-4">
              <div class="contact_icon bg-primary-subtle text-primary">
                <i class="bx bx-phone"></i>
              </div>
              <div>
                <h5 class="mb-1">Phone</h5>
                <p class="text-muted mb-0 small">+8801754100439</p>
              </div>
            </div>

            <div class="glass-card p-4 d-flex align-items-center gap-4">
              <div class="contact_icon bg-primary-subtle text-primary">
                <i class="bx bx-map"></i>
              </div>
              <div>
                <h5 class="mb-1">Location</h5>
                <p class="text-muted mb-0 small">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-7 animate-fade-in-up" style="animation-delay: 0.1s">
          <div class="glass-card p-4 p-md-5">
            <form @submit.prevent class="contact_form">
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control bg-transparent text-white border-secondary" id="name" placeholder="Name" />
                    <label for="name" class="text-muted">Your Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control bg-transparent text-white border-secondary" id="email" placeholder="Email" />
                    <label for="email" class="text-muted">Your Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control bg-transparent text-white border-secondary" id="subject" placeholder="Subject" />
                    <label for="subject" class="text-muted">Subject</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <textarea class="form-control bg-transparent text-white border-secondary" placeholder="Message" id="message" style="height: 150px"></textarea>
                    <label for="message" class="text-muted">Your Message</label>
                  </div>
                </div>
                <div class="col-12 text-end">
                  <button type="submit" class="btn-primary-modern w-100 py-3">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact_icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.form-control {
  &:focus {
    background: transparent;
    border-color: var(--primary-color);
    box-shadow: none;
    color: white;
  }
}

form label {
  transition: all 0.3s ease;
}

.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label {
  color: var(--primary-color);
}
</style>
