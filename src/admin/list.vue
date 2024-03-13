<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row">
      <div class="products-list">
        <div class="list-title">
          <span>Products Managenment</span>
        </div>
        <div class="list-add">
        <router-link :to="{ name: 'AdminCreate' , params:{} }" style="text-decoration: none;"> Add products </router-link>
        </div>
      </div>
      <div class="card-deck mb-3 text-center">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Products name</th>
              <th scope="col">Price</th>
              <th scope="col">Brands</th>
              <th scope="col">Image</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>ULTRABOOST LIGHT TRIPLE WHITE</td>
              <td>1.000.000đ</td>
              <td>Adidas</td>
              <td>Null</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                NEW BALANCE 2002R PROTECTION PACK LIGHT ARCTIC GREY PURPLE
              </td>
              <td>1.200.000đ</td>
              <td>New Balance</td>
              <td>Null</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>CONVERSE CHUCK 70 PLUS TRANCE FORM ASH STONE</td>
              <td>950.000đ</td>
              <td>Converse</td>
              <td>Null</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>



<script>
export default {};
</script>


<style scoped>
.list-title{
  margin-bottom: 15px;
  font-size: xx-large;
  text-align: center;
}
.list-add{
  text-align: center;
  margin-bottom: 15px;
}
</style>