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
                     <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">About Me</button>
                     <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Skills</button>
                     <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                   </div>
                 </nav>
                 <div class="tab-content" id="nav-tabContent">
                   <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                     <p class="mt-2">Hello. I'm Shahin. I'm a tech enthusiast guy. Personally, I’m optimistic and always in a hurry kinda person. I'm a freelance web developer. I study CSE at South-East University.</p>
                     <p class="mt-1">I started my career as a Web Designer. After one year of consistently working in this field, it helped me a lot in gaining vast knowledge about business, marketing, and user experience too. I've tried a few more things to understand customer satisfaction, business engagement & marketing including e-commerce, portfolio, blogging, YouTube, etc.</p>
                   </div>
                   <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                     <div class="card">
                       <div class="card-body">
                         <div class="row">
                           <div class="col-12 col-md-3 text-left">
                             <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                               <button v-for="(category, index) in Object.keys(skills)" :key="category" class="nav-link text-left" :class="{ 'active': index === 0 }" :id="`v-pills-${category}-tab`" data-bs-toggle="pill" :data-bs-target="`#v-pills-${category}`" role="tab" :aria-controls="`v-pills-${category}`" :aria-selected="index === 0">
                                 {{ category.charAt(0).toUpperCase() + category.slice(1) }}
                               </button>
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
   frontend: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'JQUERY', 'Vue', 'Nuxt', 'Tailwind CSS'],
   backend: ['PHP', 'LARAVEL', 'Node JS', 'Express JS', 'FAST API', 'Django'],
   database: ['MYSQL', 'MONGODB', 'SQLite'],
   server: ['Cpanel', 'VPS', 'AWS'],
   others: ['Wordpress', 'GITHUB', 'GITLAB', 'JIRA'],
 });

 </script>
 
 <style scoped>
 #about_section{
   background: #CFF5DE;
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
   background: #f8efba;
   display: inline-block;
   padding: 5px;
   font-size: 14px;
   font-weight: 500;
   margin-top: 5px;
   border-radius: 2px;
   transition: 0.6s;
   color: #182c61;
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
 