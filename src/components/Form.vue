/* eslint-disable vue/multi-word-component-names */
<script lang='ts'>
import { defineComponent, PropType } from "vue";
import form from "../types/form";

export default defineComponent({
    name: 'FormPage',
    components: {},
    setup(){
        return {};
    },
    methods: {},
    props: {
        formData: {
            required: true,
            type: Object as PropType<form>
        }
    }
});
</script>

<template>
    <main class="w-full flex flex-wrap justify-center">
        <div class="inner-container flex flex-wrap my-4 gap-8 px-4 lg:my-16 lg:px-20 lg:gap-12 justify-center">
            <!--Contains the description-->
            <section class="w-full lg:w-1/2 flex items-center justify-center desc-section">
                <div class="w-full text-white">
                    <h1 class="text-5xl text-white font-bold">
                        {{formData.title}}
                    </h1>
    
                    <p class="mt-4 sm:mt-8 text-lg">
                        {{formData.desc}}
                    </p>
                </div>
            </section>


            <!-- The form section -->
            <section class="w-full lg:w-1/2 form-section">
                <div class="w-full rounded p-2 text-center bg-purple-500 text-white custom-shadow">
                    <h2 class="font-bold">
                        {{formData.offer}}
                    </h2>
                </div>

                <form id="form" class="w-full mt-4 bg-white p-6 rounded flex gap-4 flex-col">
                    <div>
                        <input class="w-full py-1 px-4 border-2 rounded" type="text" placeholder="First Name"/>
                        <!-- Only displays when error-->
                        <div class="hidden px-4 my-2 flex justify-between text-red-500">
                            <p class="opacity-80">First Name cannot be empty</p>
                            <img src="images/icon-error.svg" alt="error icon" />
                        </div>
                    </div>
                    <div>
                        <input class="w-full py-1 px-4 border-2 rounded" type="text" placeholder="Last Name"/>
                        <!-- Only displays when error-->
                        <div class="hidden px-4 my-2 flex justify-between text-red-500">
                            <p class="opacity-80">Last Name cannot be empty</p>
                            <img src="images/icon-error.svg" alt="error icon" />
                        </div>
                    </div>
                    <div>
                        <input id="email" class="w-full py-1 px-4 border-2 rounded" type="email" placeholder="Email Address" />
                        <!-- Only displays when error-->
                        <div class="hidden px-4 my-2 flex justify-between text-red-500">
                            <p class="opacity-80">Looks like this is not an email</p>
                            <img src="images/icon-error.svg" alt="error icon" />
                        </div>
                    </div>
                    <div>
                        <input class="w-full py-1 px-4 border-2 rounded" type="password" placeholder="Password" />
                        <!-- Only displays when error-->
                        <div class="hidden px-4 my-2 flex justify-between text-red-500">
                            <p class="opacity-80">Password cannot be empty</p>
                            <img src="images/icon-error.svg" alt="error icon" />
                        </div>
                    </div>

                    <button class="w-full p-2 bg-lime-700 text-white font-bold rounded custom-shadow hover:bg-lime-500">
                        {{formData.butText}}
                    </button>

                    <p class="text-stone-500 text-xs text-center">
                        {{formData.policy.primary}}
                        <a href="#" class="font-bold text-red-500">{{formData.policy.secondary}}</a>
                    </p>
                </form>
            </section>
        </div>
    </main>
</template>

<style>
</style>