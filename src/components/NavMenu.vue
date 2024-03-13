<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand"  aria-current="page" href="#"><i class="fa-solid fa-house"></i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sản phẩm
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#" style="text-align: left;">Sneaker</a></li>
              <li><a class="dropdown-item" href="#" style="text-align: left;">Giày tây</a></li>
              <li><a class="dropdown-item" href="#" style="text-align: left;">Sandal</a></li>
              <li><a class="dropdown-item" href="#" style="text-align: left;">Khác</a></li>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Thương hiệu
            </a>
            <div class="dropdown-menu menu-brands" aria-labelledby="navbarDropdown">
              <div class="column col-lg-2">
                <div class="font-brands-logo">
                  <a href="#" class="brands-logo"><img class="brands-logo-img" src="../assets/img/adidas.png" alt=""></a>
                  <a href="#" class="brands-name">Adidas</a>
                </div>
              </div>
              <div class="column col-lg-2">
                <div class="font-brands-logo">
                  <a href="#" class="brands-logo"><img class="brands-logo-img-newbalance" src="../assets/img/newbalance.png" alt=""></a>
                  <a href="#" class="brands-name">New Balance</a>
                </div>
              </div>
              <div class="column col-lg-2">
                <div class="font-brands-logo">
                  <a href="#" class="brands-logo"><img class="brands-logo-img-converse" src="../assets/img/converse.png" alt=""></a>
                  <a href="#" class="brands-name">Converse</a>
                </div>
              </div>
              <div class="column col-lg-2">
                <div class="font-brands-logo">
                  <a href="#" class="brands-logo"><img class="brands-logo-img-nike" src="../assets/img/nike.png" alt=""></a>
                  <a href="#" class="brands-name">Nike</a>
                </div>
              </div>
              <div class="column col-lg-2">
                <div class="font-brands-logo">
                  <a href="#" class="brands-logo"><img class="brands-logo-img-vans" src="../assets/img/vans.png" alt=""></a>
                  <a href="#" class="brands-name">Vans</a>
                </div>
              </div>
              <div class="column col-lg-2">
                <div class="font-brands-logo">
                  <a href="#" class="brands-logo"><img class="brands-logo-img-vans" src="../assets/img/asics.png" alt=""></a>
                  <a href="#" class="brands-name">Aiscs</a>
                </div>
              </div>
          </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cho nam</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cho nữ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cho trẻ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sale off</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navBar',
};
</script>

<style scoped>
.container{
  margin: 0 auto;
  padding: 0 15px;
}
.navbar{
  position: relative;
  border-top: 1px solid #d6d6d6;
  border-bottom: 3px solid #696969;
}
.navbar .nav-item{
  color: aliceblue;
  padding: 0 0;
  position: relative;
}
.navbar .nav-item a{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #555;
  font-size: 16px;
  text-align: center;
}
.navbar .nav-item a:hover {
  color: rgb(233, 115, 72);
}
.brands-name{
  text-align: center;
}
.dropdown-menu{
  display: none;
  position: absolute;
  background: #fff;
  z-index: 1;
  padding: 10px 0 0;
  border-top: 3px solid rgb(233, 115, 72);
  border-bottom: 0 none;
  border-left: 0 none;
  border-right: 0 none;
  font-size: 16px;
  margin-top: 0;
  margin-left: -20px;
  border-radius: 0%;
}
.dropdown-menu ul{
  position: relative;
  z-index: 500;
  left: 0;
  right: 0;
}
.nav-item:hover .dropdown-menu{
  display: block;
}
.column{
  display: inline-block;
  margin: 0 0 15px;
  padding: 0 15px;
}
.column ul{
  list-style: none;
  float: left;
  padding: 0 0;
}
.column li{
  line-height: 27px;
  padding-top: 0;
}
.column ul li a{
  text-decoration: none;
  white-space: nowrap;
  font-size: 13px !important;
  font-family: 'Open sans', sans-serif;
  text-transform: uppercase;
}
.brands-logo-img{
  width: 45px;
  object-fit: cover;
}
.brands-logo-img-newbalance{
  width: 93px;
}
.brands-logo-img-converse{
  width: 45px;
}
.brands-logo-img-nike{
  width: 77px;
}
.brands-logo-img-vans{
  width: 87px;
}
.menu-brands{
  width: 1000px;
  display: none;
  position: absolute;
  background: #fff;
  z-index: 1;
  padding: 10px 0 0;
  border-top: 3px solid rgb(233, 115, 72);
  border-bottom: 0 none;
  border-left: 0 none;
  border-right: 0 none;
  font-size: 16px;
  margin-top: 0;
  margin-left: -120px;
  border-radius: 0%;
}
.column a.dropdown-item{
  color: #3e7cb4;
  font-family: 'Open sans', sans-serif;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  padding: 4px 0;
}
.column a:hover{
  background: #fff !important;
}
.font-brands-logo{
  display: inline-grid;
}
.brands-name{
  text-decoration: none;
}
</style>

