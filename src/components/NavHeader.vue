<template>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <router-link :to="{ name: 'Home', params:{} }" class="text-content"><span class="navbar-brand">Quality Shoes</span></router-link>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="col-table-cell col-lg-2">
          <div id="cart">
            <a href="" class="mini-cart">
              <span class="icon-cart">
                <i class="fa-solid fa-cart-shopping" style="color: #353434"></i>
              </span>
              <span class="cart-total">Giỏ hàng:</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
</template>

<script></script>

<style scoped>
.navbar-brand {
  font-style: italic;
  font-size: 45px;
  font-weight: bolder;
  color: cadetblue;
}
.bg-light {
  background-color: #dee2e6 !important;
}
.mini-cart {
  text-decoration: none;
}
.cart-total {
  color: #353434;
}
.text-content{
  text-decoration: none;
}
</style>