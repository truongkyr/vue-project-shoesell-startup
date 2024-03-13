<template>
  <div class="wrapper">
    <div class="header">
      <div class="top-bar">
        <nav-top-bar />
      </div>
      <div class="header-row">
        <nav-header />
      </div>
      <!-- <div class="nav-menu">
        <nav-menu />
      </div>
    </div>
    <div class="container">
      <div class="slider">
        <base-slider />
      </div>
      <div class="list-category">
        <list-category />
      </div> -->
    </div>
  </div>
  <router-view></router-view>
  <base-footer />
</template>


<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import NavTopBar from "./components/NavTopBar.vue";
import NavHeader from "./components/NavHeader.vue";
// import NavMenu from "./components/NavMenu.vue";
// import BaseSlider from "./components/BaseSlider.vue";
// import ListCategory from "./components/ListCategory.vue";
import BaseFooter from "./components/BaseFooter.vue";
// import Register from "./views/register.vue"
// import login from "./views/login.vue"
export default {
  setup() {
    const route = useRouter();
    return {
      layout: computed(() => route.meta.layout + "-layout"),
    };
  },
  name: "App",
  components: {
    NavTopBar,
    NavHeader,
    // NavMenu,
    // BaseSlider,
    // ListCategory,
    BaseFooter,
    // Register,
    // login,
  },
};
</script>

<style>
.wrapper {
  max-width: 100%;
  background: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.header {
  width: 100%;
  height: 210px;
}
.top-bar {
  max-width: 100%;
  height: 35px;
  background: #358dc0;
}
.header-row {
  max-width: 100%;
  height: 165px;
  position: relative;
  padding: 35px 0px;
}
.container {
  width: 100px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.slider {
  width: 100%;
  height: 500px;
  padding-top: 90px;
}
.list-category {
  width: 100%;
  height: auto;
}
</style>
