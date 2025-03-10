<template>
    <section id="portfolio_section">
      <div class="container">
        <div class="row text-center mb-3">
          <div class="col-12">
            <div class="sec_title wow animate__animated animate__zoomIn">
              <h2 class="mb-0 pb-1">My Portfolio</h2>
              <p class="m-0 p-0">Few of my best projects!</p>
            </div>
          </div>
        </div>
        <div class="row gx-3">
          <div v-for="(project, index) in projects" :key="index" class=" col-12 col-sm-6 col-md-3 mb-3 wow animate__animated">
            <div class="service_box shadow">
              <div v-if="project.image" class="img_container">
                <img :src="project.image" :alt="project.name" class="img-fluid" />
                <h5 class="project_name">{{ project.name }}</h5>
                <div class="hover_overlay">
                  <div class="hover_links">
                    <nuxt-link :to="`/project/${project.slug}`">Details</nuxt-link>
                    <a :href="project.liveLink" target="_blank">Live Link</a>
                    <h5 class="project_name">{{ project.name }}</h5>
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
    const { PROJECTS } = useDummyData();
    const projects = ref([]);


    onMounted(()=>{
      projects.value = PROJECTS.filter((p) => p.is_front);
    })
   </script>
  
  <style lang="scss" scoped>
  .service_box {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 
    0 6px 6px rgba(0, 0, 0, 0.15); /* 3D Shadow Effect */
  }

  .service_box img {
    width: 100%;
    display: block;
    border-radius: 8px;
    opacity: 0.9;
    transition: opacity 0.3s ease-in-out;
    height: 190px;
    object-fit: cover;
  }
  
  .project_name {
    position: absolute;
    left: 5px;
    bottom: 0;
    background: #0E1833;
    color: #fff;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 16px;
  }
  
  .hover_overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0e1833be;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .hover_links {
    display: flex;
    gap: 10px;
  }
  
  .hover_links a {
    color: #fff;
    text-decoration: none;
    padding: 8px 12px;
    border: 1px solid #fff;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    transition: background 0.3s ease-in-out;
  }
  
  .hover_links a:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  
  .service_box:hover .hover_overlay {
    opacity: 1;
  }
  
  .service_box:hover img {
    opacity: 1;
  }
  
  #service_section {
    text-align: center;
    .img_box {
      width: 80px;
      margin: 0 auto;
      padding: 8px;
      border: 2px dotted #1b9cfc;
    }
    h4 {
      margin: 8px 0;
      font-weight: 600;
      color: #2c3a47;
    }
  }
  </style>
  