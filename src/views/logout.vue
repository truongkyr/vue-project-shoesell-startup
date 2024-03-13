<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
      <div class="row">Is Logout</div>
    </div>
</template>


<script>
import { useRouter } from "vue-router";
import { useLogout } from "../combosables/useLogout"


export default {
  setup(){
    const router = useRouter();
    const { error, logout } = useLogout();

    async function onLogout(){
      await logout();
      if(!error.value) router.push({name: 'Login' , params:{}})
    }
    
    onLogout();

    return{
      
    };
  },
}
</script>