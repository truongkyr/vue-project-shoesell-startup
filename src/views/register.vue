<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <div class="title-register">SIGN UP</div>
            <form @submit.prevent="onSubmit">
                <div class="row">
                    <label class="flex flex-col" for="fullName">
                        <span class="font-semibold">Full Name</span><span class="require">*</span><br>
                        <input id="fullName" class="px-4 py-3 rounded-lg border-gray-100 mt-1" type="text" placeholder="FullName..." v-model="fullName">
                    </label>
                </div>
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
                <div class="row">
                    <button v-if="!isPending" type="submit" class="py-3 text-center w-full">
                        Sign up
                    </button>
                    <button v-else type="submit" class="py-3 text-center w-full" style="background-color: gray;" disabled>
                        Loading...
                    </button>
                </div>
            </form>

            <div v-if="error" class="text-left">
                <span>The email address is already in use by another account</span>
            </div>

            <div class="w-full-login text-center mt-6">
                <span class="font-semibold">I'm already a member.</span>
                <span class="ml-1">
                    <router-link :to="{ name: 'Login', params:{} }" class="text-content">Sign In</router-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useSignUp } from "@/combosables/useSignUp";
import { auth, db, storage } from "@/configs/firebase"

export default {
    setup(){
        const { error, isPending, signup } = useSignUp();

        const fullName = ref("");
        const email = ref("");
        const password = ref("");
        async function onSubmit() {
            await signup(email.value, password.value, fullName.value);
        }
            return {
                fullName,
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
.title-register{
    font-weight: bold;
    font-family: math;
    font-size: 50px;
    text-align: center;
}
.text-left{
    color: #ff6b6b;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 15px;
}
</style>