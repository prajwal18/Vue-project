<script lang='ts'>
import { defineComponent, PropType } from "vue";
import about from "../types/about";

export default defineComponent({
    name: 'AboutPage',
    components: {},
    setup(){
        return {};
    },
    methods:{},
    props: {
        aboutData:{
            required: true,
            type: Object as PropType<about>
        }
    }
});
</script>

<template>
    <main class="flex justify-center">
        <div class="inner-container p-2">

            <!--Heading-->
            <div class="mt-4 md:mt-8">
                <h1 class="uppercase text-center text-white text-4xl md:text-6xl font-bold">{{aboutData.title}}</h1>
            </div>

            <!-- Main content -->
            <div class="mt-4 md: mt-8 w-full p-4 bg-white rounded flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-8">
                <img :src="aboutData.img" class="rounded w-full md:w-1/2" />
                <!--Description-->
                <div class="p-4 w-full mt-4 md:w-1/2">
                    <p>
                        {{aboutData.des1}}
                    </p>
                    <p class="text-lime-800 font-bold my-4">More about us</p>
                    <p class="my-4">
                        {{aboutData.des2}}
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
</style>