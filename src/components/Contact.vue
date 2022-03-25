/* eslint-disable vue/multi-word-component-names */
<script lang='ts'>
import { defineComponent, PropType } from "vue";
import contact from "../types/contact";

export default defineComponent({
    name: 'ContactPage',
    components: {},
    setup(){
        return {};
    },
    methods:{},
    props: {
        contactData: {
            required: true,
            type: Object as PropType<contact>
        }
    }
});
</script>

<template>
    <main class="flex justify-center">

        <!-- inner-container -->
        <div class="inner-container">

            <div class="py-8 md:py-16 text-white back-img">
                <!--Contact-Us desc-->
                <div>
                    <h1 class="text-center text-4xl md:text-6xl font-bold">{{contactData.title}}</h1>
                </div>

                <!-- More Info -->
                <div>
                    <h2 class="font-sans mt-4 md:mt-6 text-2xl font-bolds text-center">{{contactData.subTitle}}</h2>
                    <p class="mx-auto mt-2 w-full md:w-1/2 px-4 text-center">
                        {{contactData.desc}}
                    </p>
                </div>

                <!-- Cards-->
                <div class="mx-auto w-full px-2 mt-8 md:mt-12 flex flex-wrap md:flex-nowrap gap-4 justify-center md:w-2/3">
                    <!-- Talk to sales -->
                    <div class="w-full md:w-1/2 text-black text-center py-8 px-6 bg-slate-50">
                        <!-- Phone Icon -->
                        <fa class="text-4xl" :icon="['fas', 'phone']" />
                        <h4 class="font-bold text-xl mt-4">{{contactData.sales.title}}</h4>
                        <p class="mt-4">
                            {{contactData.sales.desc}}
                        </p>
                        <p class="mt-4 text-emerald-700">{{contactData.sales.number}}</p>
                        <p class="mt-2 text-emerald-700">{{contactData.sales.allNums}}</p>
                        <a href="">
                            <fa class="mt-4 text-emerald-700" :icon="['fas', 'chevron-down']" />
                        </a>
                    </div>

                    <!-- Contact Customer Support -->
                    <div class="w-full md:w-1/2 text-black text-center py-8 px-6 bg-slate-50">
                        <!-- customer support Icon -->
                        <fa class="text-4xl" :icon="['fas', 'users']" />
                        <h4 class="font-bold text-xl mt-4">{{contactData.custService.title}}</h4>
                        <p class="mt-4">
                            {{contactData.custService.desc}}
                        </p>
                        <button class="mt-6 p-6 bg-orange-600 text-white rounded">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>

</template>

<style>
</style>