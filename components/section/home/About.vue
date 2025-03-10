<template>
   <section id="about_section">
     <div class="container">
       <div class="row">
         <div class="col-12 col-sm-6 col-md-6 align-self-center">
            <div class="myImage_slider">
               <div class="slider-wrapper">
                  <div class="slider">
                  <div class="slide" v-for="(image, index) in [...myImages, ...myImages]" :key="index">
                     <img :src="image.path" alt="" class="img-fluid" />
                     <div class="pos_content">{{ image.title }}</div>
                  </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-12 col-sm-6 col-md-6">
           <div class="heading">
             <h2 class="mb-0 pb-1">About Me</h2>
             <p class="m-0 p-0">My Introduction</p>
           </div>
           <div class="tab_buttons border-1 mt-3">
             <div class="row">
               <div class="col-12">
                 <nav>
                   <div class="nav nav-tabs" id="nav-tab" role="tablist">
                     <button class="nav-link abt_btn active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">About Me</button>
                     <button class="nav-link abt_btn" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Skills</button>
                     <button class="nav-link abt_btn" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                   </div>
                 </nav>
                 <div class="tab-content" id="nav-tabContent">
                   <div class="tab-pane about_me fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                
                    <div class="card mt-1">
                      <div class="card-body p-3 py-2">
                        <p class="mt-2">
                      I am a technology enthusiast with a Bachelor’s in Computer Science and Engineering (CGPA: 3.86) from South-East University. Over the past two years, I’ve gained substantial experience in Web Development, focusing on PHP, Laravel, Vue.js, Nuxt.js, Bootstrap, Tailwind CSS, JavaScript, Django, MongoDB, and Linux/Unix environments.
                    </p>
                      <p>
                        Currently, I work as a Software Engineer at SSL Wireless, developing chatbot applications and working on GEN AI and LLM-based projects focused on automation and AI integration.
                      </p>
                     <p class="mt-1">
                      While I have a background in web development, my primary focus now is Artificial Intelligence, with a partial focus on software development. In my free time, I create tech content for my YouTube channel and website. My passion for problem-solving and learning drives my continuous exploration of new technologies and methodologies.
                     </p>
                      </div>
                    </div>
                   </div>
                   <div class="tab-pane fade mt-1" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                     <div class="card">
                       <div class="card-body">
                         <div class="row">
                           <div class="col-12 col-md-3 text-left">
                            <div class="nav flex-column nav-pills">
                              <div class="row">
                                <div v-for="(category, index) in Object.keys(skills)" :key="category" class="col-md-12 col-4">
                                  <button 
                                    class="nav-link skill_btn text-left w-100" 
                                    :class="{ 'active': index === 0 }" 
                                    :id="`v-pills-${category}-tab`" 
                                    data-bs-toggle="pill" 
                                    :data-bs-target="`#v-pills-${category}`" 
                                    role="tab" 
                                    :aria-controls="`v-pills-${category}`" 
                                    :aria-selected="index === 0"
                                  >
                                    {{ category.charAt(0).toUpperCase() + category.slice(1) }}
                                  </button>
                                </div>
                              </div>
                            </div>
                           </div>
                           <div class="col-12 col-md-9" id="abt_skill">
                             <div class="tab-content" id="v-pills-tabContent">
                               <div v-for="(category, index) in Object.keys(skills)" :key="category" class="tab-pane fade" :class="{ 'show active': index === 0 }" :id="`v-pills-${category}`" role="tabpanel" :aria-labelledby="`v-pills-${category}-tab`">
                                 <ul>
                                   <li v-for="skill in skills[category]" :key="skill">
                                     <span class="mx-1">{{ skill }}</span>
                                   </li>
                                 </ul>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                     <div class="row">
                       <div class="col-12">
                         <div class="card border-0">
                           <div class="card-body p-3">
                             <table class="table table-bordered">
                               <tbody>
                                 <tr>
                                   <th>Phone</th>
                                   <td><span>+8801754100439</span></td>
                                 </tr>
                                 <tr>
                                   <th>Email</th>
                                   <td><a href="mailto:mdshahinmije96@gmail.com">mdshahinmije96@gmail.com</a></td>
                                 </tr>
                                 <tr>
                                   <th>Address</th>
                                   <td><span>Dhaka, Bangladesh</span></td>
                                 </tr>
                                 <tr>
                                   <th>Resume</th>
                                   <td><a href="#" class="btn btn-link">Resume Link</a></td>
                                 </tr>
                               </tbody>
                             </table>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
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
 import { reactive } from 'vue';
 const myImages = reactive([
   {"id": 1, "title":"AR Shahin", "path": "/img/my/img3.JPG"},
   {"id": 2, "title":"AR Shahin", "path": "/img/my/img4.JPG"},
   {"id": 3, "title":"AR Shahin", "path": "/img/my/img.png"},
   {"id": 4, "title":"AR Shahin", "path": "/img/my/img.jpg"},
 ]);
 const skills = reactive({
   frontend: ['BOOTSTRAP',  'Tailwind CSS','JAVASCRIPT', 'JQUERY', 'Vue JS', 'Nuxt JS',],
   backend: ['PHP', 'LARAVEL', 'Node JS', 'Express JS', 'FAST API', 'Django'],
   database: ['MYSQL', 'MONGODB', 'SQLite'],
   AI: ['OpenAI API','Opensource LLM', 'Hugging Face', 'RAG', "Vector DB"],
   others: ['Wordpress','Docker', 'Cpanel', 'VPS', 'AWS', 'JIRA','Linux'],
 });

 </script>
 
 <style scoped>
 .nav-link,  a{
    color: #0E1833!important;
}
 #about_section{
   background: #fff;
 }
 .skill_btn{
  background: #0E1833;
  padding: 5px;
  color:#fff!important;
  margin-bottom: 5px;
  border-radius: 3px;
 }

 .skill_btn.active{
  background: #DE4859;
  color: #fff !important;
 }
 .abt_btn{
  color: #182c61!important;
 }
 .about_me p{
  text-align: justify;
 }
 .myImage_slider .owl-dots {
   display: none;
 }
 .myImage_slider .single-slider-image {
   position: relative;
 }
 .myImage_slider .single-slider-image .pos_content {
   position: absolute;
   right: 0;
   bottom: 0;
   background: #6d214f;
   color: #fff;
   padding: 10px;
   border-top-left-radius: 5px;
 }
 #about_section ul li {
   display: inline-block;
 }
 #about_section ul li span {
   background: #9D4C36;
   display: inline-block;
   padding: 1px 13px;
   font-size: 14px;
   font-weight: 500;
   margin-top: 5px;
   border-radius: 5px;
   transition: 0.6s;
   color: #fff;
 }
 #about_section ul li span:hover {
   color: #111;
 }
 .myImage_slider {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.slider-wrapper {
  display: flex;
  width: 100%;
  cursor: grab;
  user-select: none;
}

.slider {
  display: flex;
  width: max-content;
  animation: scroll 10s linear infinite;
}

/* Smooth cyclic animation */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.slide {
  flex: 0 0 auto;
  width: 250px;
  height: 200px;
  margin-right: 10px;
  position: relative;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.pos_content {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}

/* Pause animation on hover */
.slider:hover {
  animation-play-state: paused;
}


 </style>
 