<script lang='ts'>
import { defineComponent } from "vue";


export default defineComponent({
    name: 'HeaderPage',
    components: {},
    setup(){
        return {};
    },
    methods:{},
    props: {}
});
</script>

<template>
    <header class="w-full bg-black flex justify-center">
        <div class="inner-container flex gap-4 md:gap-12 items-center text-white">
            <div class="p-2 sm:p-6 bg-white">
                <img src="../../public/images/logo.svg" />
            </div>
            <nav>
                <ul class="flex gap-2 sm:gap-4">
                    <li class="hover:text-lime-400">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="hover:text-lime-400">
                        <router-link to="/form">Form</router-link>
                    </li>
                    <li class="hover:text-lime-400">
                        <router-link to="/contact">Contact</router-link>
                    </li>
                    <li class="hover:text-lime-400">
                        <router-link to="/about">About</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style>
</style>