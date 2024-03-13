<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="mt-8">
        <div class="title-login">SIGN IN</div>
        <div class="container mx-auto px-8">
            <form @submit.prevent="onSubmit">
                <div class="row">
                    <label class="flex flex-col" for="email">
                        <span class="font-semibold">Email Address</span><span class="require">*</span><br>
                        <input id="email" class="px-4 py-3 rounded-lg border-gray-100 mt-1" type="text" placeholder="example@gmail.com" v-model="email">
                    </label>
                </div>
                <div class="row">
                    <label class="flex flex-col" for="password">
                        <span class="font-semibold">Password</span><span class="require">*</span><br>
                        <input id="password" class="px-4 py-3 rounded-lg border-gray-100 mt-1" type="password" placeholder="Password..." v-model="password">
                    </label>
                </div>
                <div v-if="error" class="text-left">
                <span>This email or password is wrong</span>
            </div>
                <div class="row">
                    <button v-if="!isPending" type="submit" class="py-3 text-center w-full">
                        Sign In
                    </button>
                    <button v-else type="submit" class="py-3 text-center w-full" style="background-color: gray;" disabled>
                        Loading...
                    </button>
                </div>
            </form>

            

            <div class="w-full-login text-center mt-6">
                <span class="font-semibold">I'm a new member.</span>
                <span class="ml-1">
                    <router-link :to="{name: 'Register', params:{} }" class="text-content">Sign Up</router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useSignIn } from '@/combosables/useSignIn';
import { useRouter } from 'vue-router';

import { auth, db, storage } from "@/configs/firebase"
export default {
    setup(){
        const router = useRouter();

        const { error, isPending, signin } = useSignIn();
        const email = ref("");
        const password = ref("")

        async function onSubmit() {
            await signin (email.value, password.value)
            if(!error.value) router.push({name: 'Home', params:{}});
        }
            return {
                email,
                password,
                error,
                isPending,
                auth,
                db,
                storage,
                onSubmit,
            };
    },
};
</script>

<style scoped>
body{
    font-family: "Nunito Sans", sans-serif;
}
.font-semibold{
    font: 1em sans-serif;
}
.flex{
    text-align: center;
    padding-bottom: 20px;
}
.py-3{
    width: 50%;
}
.require{
    color: red;
}
.w-full{
    width: 30%;
    color: rgb(255, 255, 255);  
    background-color: rgb(233, 115, 72);
    margin-left: 395px;
    border: aliceblue;
}
.w-full:hover{
    background-color: rgb(248, 91, 33);
}
.ml-1{
    margin-left: 5px;
}
.text-content{
    text-decoration: none;
}
.title-login{
    font-weight: bold;
    font-family: math;
    font-size: 50px;
    text-align: center;
}
.text-left{
    color: #ff6b6b;
    text-align: center;
    margin-bottom: 15px;
}
</style>