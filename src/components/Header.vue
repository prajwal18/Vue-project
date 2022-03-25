<script lang='ts'>
import { defineComponent, ref } from "vue";


export default defineComponent({
    name: 'HeaderPage',
    components: {},
    created() {
        if(window.innerWidth >= 640){this.navSmallScreen="block"; this.navExtra=""; this.listSmall=""}
        window.addEventListener("resize", this.onWindowResize);
    },
    unmounted() {
        window.removeEventListener("resize", this.onWindowResize);
    },
    setup(){
        const navSmallScreen = ref("hidden");
        const navExtra = ref("fixed w-full h-screen top-0 left-0 bg-black px-4");
        const listSmall = ref("flex-col");
        return {
            navSmallScreen, navExtra, listSmall
        };
    },
    methods:{
        onCloseBarClick(but:string):void{
            if(but === 'close'){
                if(window.innerWidth < 640){
                    this.navSmallScreen = "hidden";
                    this.navExtra = "";
                }
            } else if(but === 'bar'){
                this.navSmallScreen = "block";
                this.navExtra = "fixed w-full h-screen top-0 left-0 bg-black px-4";

            }
        },
        //This method will only change the display of nav
        onWindowResize(): void{
            if(window.innerWidth < 640){
                this.navSmallScreen = "hidden";
                this.navExtra = "";
            } else{
                this.navSmallScreen = "block";
                this.navExtra = "";
                this.listSmall = "";
            }
        }
    },
    props: {},
    computed: {
        allNavClass: function():string{
            return `${this.navSmallScreen} ${this.navExtra}`;
        }
    }
});
</script>

<template>
    <header class="w-full bg-black flex justify-center">
        <div class="inner-container flex gap-4 md:gap-12 items-center text-white">
            <div class="p-2 sm:p-6 bg-white">
                <img src="../../public/images/logo.svg" />
            </div>
            <nav :class="allNavClass">
                <!--Close icon in small screen -->
                <fa 
                    :icon="['fas', 'xmark']" 
                    class="text-xl cursor-pointer hover:text-lime-400 sm:hidden my-2"
                    @click="onCloseBarClick('close')"
                />
                <ul 
                    class="flex gap-2 sm:gap-4"
                    :class="listSmall"
                >
                    <li class="hover:text-lime-400">
                        <router-link to="/" @click="onCloseBarClick('close')">Home</router-link>
                    </li>
                    <li class="hover:text-lime-400">
                        <router-link to="/form" @click="onCloseBarClick('close')">Form</router-link>
                    </li>
                    <li class="hover:text-lime-400">
                        <router-link to="/practice" @click="onCloseBarClick('close')">Practice</router-link>
                    </li>
                    <li class="hover:text-lime-400">
                        <router-link to="/todo" @click="onCloseBarClick('close')">Todo List</router-link>
                    </li>
                    <li class="hover:text-lime-400">
                        <router-link to="/contact" @click="onCloseBarClick('close')">Contact</router-link>
                    </li>
                    <li class="hover:text-lime-400">
                        <router-link to="/about" @click="onCloseBarClick('close')">About</router-link>
                    </li>
                </ul>
            </nav>
            <!--The modal in small screen -->
            <fa 
                :icon="['fas', 'bars']" 
                class="text-xl cursor-pointer hover:text-lime-400 sm:hidden my-2"
                @click="onCloseBarClick('bar')"
            />
        </div>
    </header>
</template>

<style>
</style>