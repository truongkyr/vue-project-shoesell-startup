<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="nav-menu">
      <nav-menu />
    </div>
    <div class="base-slider">
      <base-slider />
    </div>
    <div class="list-cate">
      <list-category />
    </div>
    <!-- <div class="mt-6" v-if="user">{{ user.email }}</div> -->
  </div>
</template>

<script>
import BaseSlider from "@/components/BaseSlider.vue";
import ListCategory from "@/components/ListCategory.vue";
import NavMenu from "@/components/NavMenu.vue";
import { auth, db, storage } from "@/configs/firebase"

import { useUser } from "@/combosables/useUser";

export default ({
  components: {
    BaseSlider,
    NavMenu,
    ListCategory,
  },

  setup() {
    const { user } = useUser();

    const options = {
      rewind: true,
      gap: "1rem",
    };
    return {
      options,
      user,
      auth,
      db,
      storage,
    };
  },
});
</script>


<style scoped>
.splide__slide img {
  height: 400px;
  object-fit: cover;
  display: block;
  width: 100%;
}
.row {
  padding-top: 30px;
  text-align: center;
}
#content {
  min-height: 400px;
}
.title {
  font-style: oblique;
  font-weight: bold;
}
.product-grid {
  height: 320px;
  position: relative;
  text-align: center;
  vertical-align: top;
  padding: 7px;
  margin-top: 10px;
  margin-bottom: 15px;
  border: 1px solid transparent;
}
.col-sm-12 {
  width: 100%;
}
.product-grid:hover {
  border: 3px solid #eae9e9;
}
.product-grid .thumb img {
  object-fit: cover;
  height: 200px;
}
.pagination {
  margin-top: 10px;
  justify-content: center !important;
}
.page-link {
  color: #6e70e7;
}
.product-grid .thumb h5 a {
  font-size: 15px;
  line-height: 18px;
  text-decoration: none;
  color: #333;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.price {
  margin-bottom: 6px;
  color: rgb(233, 115, 72);
  font-weight: bold;
}
.btn-primary {
  color: rgb(233, 115, 72);
  background-color: #fff;
  border: 1.5px solid rgb(233, 115, 72);
}
.button-cart {
  left: calc(50% - 45px);
}
.row-product-category {
  display: flex;
  flex-wrap: wrap;
}
</style>