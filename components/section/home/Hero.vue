<template>
  <div id="hero-section">
      <div class="hero-content">
          <div class="container">
              <div class="row">
                  <div class="col-12 col-sm-6 col-md-6 align-self-center">
                      <div class="hero-text">
                          <span class="intro" style="display: inline-block">Hello, I'm</span>
                          <h1 class="">Anisur Rahman Shahin</h1>
                          <div class="tagline">
                              <div class="cd-intro">
                                 <em style="color:#be2edd">Software Engineer</em>
                              </div> 
                          </div>
                          <div class="hero-social-media">
                              <ul>
                                  <li><a  target="_blank"><i class="fab fa-facebook"></i></a></li>
                                  <li><a target="_blank"><i class="fab fa-twitter"></i></a></li>
                                  <li><a target="_blank"><i class="fab fa-github"></i></a></li>
                                  <li><a target="_blank"><i class="fab fa-youtube"></i></a></li>
                                  <li><a  target="_blank"><i class="fab fa-linkedin"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-sm-6 col-md-6 text-center">
                      <img src="~assets/img/hero.png" alt="" class="img-fluid" style="animation-name: HERO_ANIMATION; animation-duration: 5s; animation-iteration-count: infinite; width:100%">
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
#hero-section {
padding: 100px 0 10px 0 !important;
.hero-text {
  text-align: left;
  .intro {
    font-size: 18px;
    font-weight: 400;
  }
  h1 {
    margin: 5px 0;
    font-weight: 600;
  }
}
}

.hero-social-media {
margin-top: 20px;
ul {
  display: flex;
  padding: 0;
  li {
    display: inline-block;
    margin-right: 10px;
    background: #55e6c1;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2d3436;
    border: 1.5px solid transparent;
    transition: 0.6s;
    a {
      color: #fff;
      font-size: 18px;
    }
    &:nth-child(1) {
      background: #3b5999;
    }
    &:nth-child(2) {
      background: #55acee;
    }
    &:nth-child(3) {
      background: #09b83e;
    }
    &:nth-child(4) {
      background: #cd201f;
    }
    &:nth-child(5) {
      background: #0077b5;
    }
    &:hover {
      border: 1.5px solid #f1c40f;
      margin-top: -5px;
    }
  }
}
}
</style>
