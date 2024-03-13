<template>
<!-- As a heading -->
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <div class="navbar-contact">
      <span class="navbar-brand"> <i class="fa-solid fa-phone"></i> 0123456789 |</span>
      <span class="navbar-brand"> <i class="fa-solid fa-envelope"></i> abc@gmail.com</span>
    </div>
    <div class="navbar-info-user">
      <router-link :to="{name: 'Register', params:{} }" class="text-content"><span class="navbar-brand"><i class="fa-solid fa-registered"></i> Sign Up |</span></router-link>
      <router-link :to="{ name: 'Login', params:{} }" class="text-content"><span class="navbar-brand"><i class="fa-solid fa-user"></i> Login</span></router-link>
  </div>
  </div>
</nav>
</template>

<script></script>

<style scoped>
.navbar-brand{
    font-size: 25px;
}
.bg-light{
    background-color: #dee2e6!important;
}
.text-content{
  text-decoration: none;
}
</style>