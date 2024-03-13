<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container" v-if="user">
        <div class="row">
          <div class="profile-head">
            <div class="profile-img">
              <img class="profile-img-avt" src="../assets/img/avatar.png" alt="User's profile avatar">
            </div>
          </div>
          <div class="profile-text">
            <div class="profile-email">{{ user.email }}</div>
          </div>
        </div>
        <div class="row">
          <div class="profile-management">
            <div class="col-sm-2">

            </div>
            <div class="col-sm-10">
              <div class="profile-title">
                <h3 class="title-h3">General</h3>
              </div>
            </div>
          </div>
          <div class="profile-management">
            <!-- <div class="col-sm-2">

            </div> -->
            <div class="col-sm-8">
              <div class="profile-menu">
                <ul>
                  <li>
                    <router-link to="/" class="flex order py-3">
                      <div class="flex item-center text-left">
                        <i class="fa-solid fa-truck-fast"></i>
                        <h5 class="font-semibold ml-3">Order</h5>
                      </div>
                      <div class="text-rigt">
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'Logout' , params:{}}" class="logout py-3">
                      <div class="flex item-center text-left">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        <h5 class="font-semibold ml-3">Log Out</h5>
                      </div>
                      <div class="text-rigt">
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { useUser } from "@/combosables/useUser";
export default {
  setup(){
    const { user } = useUser();

    return{
      user
    }
  }
}
</script>


<style scoped>
.profile-head{
  display: flex;
  justify-content: center;
}
.profile-img{
  text-align: center;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
}
.profile-img-avt{
  width: 100%;
  height: auto;
  object-fit: cover;
}
.profile-text{
  text-align: center;
  color: gray;
}
.profile-management{
  display: flex;
  justify-content: center;
}
.title-h3{
  font-size: x-large;
  color: cadetblue;
}
ul{
  list-style: none;
  padding: 0;
}
.flex{
  display: flex;
  align-items: baseline;
  text-decoration: none;
  justify-content: space-between;
}
.order{
  color: gray;
}
.font-semibold{
  margin-left: 15px;
}
.logout{
  color: rgb(233, 115, 72);
  display: flex;
  align-items: baseline;
  text-decoration: none;
  justify-content: space-between;
}
</style>