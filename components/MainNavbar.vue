<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <router-link class="navbar-brand d-flex align-items-center gap-2" to="/">
        <img src="~/assets/img/logo.png" alt="AR Shahin Logo" style="height: 30px;" />
      </router-link>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item"><a class="nav-link" href="#about_section">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#service_section">Capabilities</a></li>
          <li class="nav-item"><a class="nav-link" href="#portfolio_section">Work</a></li>
          <li class="nav-item ms-lg-4 mt-3 mt-lg-0">
            <a href="mailto:mdshahinmije96@gmail.com" class="btn-elegant btn-sm px-4 py-2">Email Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-brand {
  font-size: 1.25rem;
  letter-spacing: -1px;
}

.btn-elegant.btn-sm {
  font-size: 0.85rem;
}
</style>