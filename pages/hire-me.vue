<template>
  <div class="hire-me-container">
    <h1 class="page-title">Hire Me</h1>
    
    <section class="services-section">
      <h2>Services I Offer</h2>
      <div class="services-grid">
        <div class="service-card">
          <h3>Web Development</h3>
          <p>Full-stack development with Vue.js/Nuxt.js and other modern technologies.</p>
        </div>
        <div class="service-card">
          <h3>UI/UX Design</h3>
          <p>Creating intuitive and beautiful user interfaces and experiences.</p>
        </div>
        <div class="service-card">
          <h3>Consulting</h3>
          <p>Technical advice and architecture planning for your projects.</p>
        </div>
      </div>
    </section>
    
    <section class="contact-section">
      <h2>Get In Touch</h2>
      <p>I'm currently available for freelance work. If you have a project that needs my expertise, please reach out!</p>
      
      <div class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" v-model="form.name" type="text" placeholder="Your Name">
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" placeholder="your.email@example.com">
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" placeholder="Tell me about your project..."></textarea>
        </div>
        
        <button class="submit-btn" @click="submitForm">Send Message</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Page meta
useHead({
  title: 'Hire Me - Professional Services',
  meta: [
    { name: 'description', content: 'Hire me for professional web development, UI/UX design, and consulting services.' }
  ]
})

// Form data
const form = ref({
  name: '',
  email: '',
  message: ''
})

// Form submission handler
const submitForm = () => {
  // This would typically connect to a backend service
  console.log('Form submitted:', form.value)
  // Here you would add code to send the form data to your backend
  // For example: await $fetch('/api/contact', { method: 'POST', body: form.value })
  
  alert('Thank you! Your message has been sent.')
  // Reset form
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped>
.hire-me-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #444;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.service-card {
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.service-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #333;
}

.contact-form {
  max-width: 600px;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.submit-btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>

