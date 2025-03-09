<template>
    <section id="service_section">
      <div class="container">
        <div class="row text-center mb-3">
          <div class="col-12">
            <div class="sec_title wow animate__animated animate__zoomIn">
              <h2 class="mb-0 pb-1">My Project</h2>
              <p class="m-0 p-0">Few of my best projects!</p>
            </div>
          </div>
        </div>
        <div class="row gx-3">
          <div v-for="(project, index) in projects" :key="index" class=" col-12 col-sm-6 col-md-4 mb-3 wow animate__animated">
            <div class="service_box shadow">
              <div v-if="project.image" class="img_container">
                <img :src="project.image" :alt="project.name" class="img-fluid" />
                <h5 class="project_name">{{ project.name }}</h5>
                <div class="hover_overlay">
                  <div class="hover_links">
                    <a :href="project.viewLink" target="_blank">Details</a>
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
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            name: "Project Name",
            image: "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
            viewLink: "#",
            liveLink: "#",
            animation: "animate__lightSpeedInLeft",
          },
          {
            name: "Web Development",
            image : "https://media.istockphoto.com/id/1385970223/photo/great-idea-of-a-marketing-strategy-plan-at-a-creative-office.jpg?s=1024x1024&w=is&k=20&c=SSsdBZXp94FFIDnC2zF0E28Xv_mtBFg76-IPv5Czdxk=",
            bgColor: "rgba(254, 164, 127, 0.33)",
            description: "Professional and affordable web design service. I design websites with your customer in mind using the latest technology & modern design trends.",
            animation: "animate__pulse",
          },
          {
            name: "WordPress Customization",
            image : "https://media.istockphoto.com/id/1077175614/photo/sharing-ideas-concepts-with-papernote-writing-strategy-on-wall-glass-office-business-marketing.jpg?s=1024x1024&w=is&k=20&c=P1MmY4qAodLWU1p_IaB8Qr2NRT5SxeG-JC_OlvVkLk0=",
            description: "Professional and affordable web design service. I design websites with your customer in mind using the latest technology & modern design trends.",
            animation: "animate__lightSpeedInRight",
          },
        ],
      };
    },
  };
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
    height: 220px;
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
  