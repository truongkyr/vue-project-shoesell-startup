<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row">
      <div class="form-title">
        <span>Products Information</span>
      </div>
      <div class="from-back">
        <router-link :to="{name:'Admin', params:{}}" style="text-decoration: none;">Back</router-link>
      </div>
      <form @submit.prevent="save()">
      <div class="form-group">
        <div class="col-sm-3">
          <span class="from-text">Products Name:</span>
        </div>
        <div class="col-sm-9">
          <input type="text" class="from-group-inp"
            v-model="product.name"
            @blur="validate()"
            v-bind:class="{ 'is-invalid': errors.name}" />
            <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-3">
          <span class="from-text">Brands:</span>
        </div>
        <div class="col-sm-9">
          <select class="from-group-select" 
            v-model="product.brands"
            @blur="validate()"
            v-bind:class="{ 'is-invalid': errors.brands}
            ">
            <option>Adidas</option>
            <option>Nike</option>
            <option>New balance</option>
            <option>Converse</option>
            <option>Ascis</option>
            <option>Giày tây</option>
            <option>Sandal</option>
            <option>Cho trẻ</option>
          </select>
          <div class="invalid-feedback" v-if="errors.brands">{{ errors.brands }}</div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-3">
          <span class="from-text">Price:</span>
        </div>
        <div class="col-sm-9">
          <input type="text" class="from-group-inp" 
            v-model="product.price"
            @blur="validate()"
            v-bind:class="{ 'is-invalid': errors.price}"
            />
            <div class="invalid-feedback" v-if="errors.price">{{ errors.price }}</div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-3">
          <span class="from-text">Images:</span>
        </div>
        <div class="col-sm-9">
          <input type="file" class="from-group-inp" @change="handleFileInput" />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-3">
          <span class="from-text">Description:</span>
        </div>
        <div class="col-sm-9">
          <input type="text" class="from-group-inp" style="height: 100px;" v-model="product.description"/>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-4">
          
        </div>
        <div class="col-sm-8" style="text-align: left;">
          <button type="submit" class="btn btn-primary">Save</button>
          <button type="submit" class="btn btn-danger">Cancel</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsFrom',
  data(){
    return{
      errors: {
        name:'',
        brands: '',
        price: '',
        description: '',
      },
      product: {
        name:'',
        brands: '',
        price: '',
        image:'',
        description: '',
      }
    }
  },
  methods: {
    validate(){
      let isValid = true
      this.errors = {
        name:'',
        brands: '',
        price: '',
        description: '',
      }


      if(!this.product.name){
        this.errors.name = 'Product name is required'
        isValid = false
      }
      if(!this.product.brands){
        this.errors.brands = 'Product brands is required'
        isValid = false
      }
      if(!this.product.price){
        this.errors.price = 'Product price is required'
        isValid = false
      }else if(!this.isNumber(this.product.price)){
        this.errors.price = "Price must be number"
        isValid = false
      }
      return isValid

    },
    isNumber(value){
      return /^\d*$/.test(value);
    },
    handleFileInput(event){
      const file = event.target.file[0];
      this.product.image = file
    },
    save(){
      console.log(this.validate())
    },
  },
};
</script>

<style scoped>
.form-title {
  font-family: sans-serif;
  text-align: center;
  font-size: xx-large;
}
.form-group {
  margin-top: 15px;
  display: flex;
  text-align: center;
}
.from-group-inp {
  width: 80%;
}
.from-text {
  font-size: 20px;
}
.from-choose{
  text-align: center;
  width: 40%;
  height: 30px;
}
.btn-danger{
  margin-left: 10px;
}
.from-back{
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
}
.from-group-select{
  text-align: center;
  width: 80%;
}
.is-invalid{
  border-color: rgb(231, 91, 91);
}
</style>