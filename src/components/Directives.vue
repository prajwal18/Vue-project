/* eslint-disable vue/multi-word-component-names */
<script lang='ts'>
import { defineComponent, ref } from "vue";
import VSoltComp from "./VSlotComp.vue";
import StateComp from "./StateComp.vue";
import WatchComp from "./WatchComp.vue";

export default defineComponent({
    name: 'DirectivesPage',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        VSoltComp,
        StateComp,
        WatchComp
    },
    setup(){
        const link = ref("https://www.wikipedia.org/");
        const name = ref("Wikepedia");
        const inputPlaceholder = ref("Some Text");
        const inputText = ref("Type in the input box to change the text");
        return { link, name, inputPlaceholder, inputText };
    },
    methods:{
        changeLink():void{
            if(this.name === "WikiLeaks"){
                this.link = "https://www.wikipedia.org/";
                this.name = "Wikepedia";
                return
            }
            this.link = "https://wikileaks.org/";
            this.name = "WikiLeaks"
        }
    },
});
</script>

<template>
    <main class="flex justify-center">
        <div class="inner-container p-2 text-center">
            <!-- Using V-bind -->
            <div class="my-2 p-2 bg-white rounded">
                <h3 class="font-bold text-xl text-stone-600 my-2">Using V-bind</h3>
                <a :href="link" target="_blank" class="text-blue-400 hover:text-sky-600 mx-2">{{name}}</a>
                <button @click="changeLink" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Change link</button>
            </div>

            <!-- Using V-model -->
            <div class="my-2 p-2 bg-white rounded">
                <h3 class="font-bold text-xl text-stone-600 my-2">Using V-model</h3>
                <p class="my-2">Type Something : </p>
                <p class="p-2">{{inputText}}</p>
                <input v-model="inputText" type="text" class="border-2 border-slate-300 p-1"/>
            </div>

            <!-- Using V-slot -->
            <VSlotComp>
                <v-solt>
                    <div class="bg-white p-2 my-2 rounded">
                        <h1 class="my-2 text-blue-400 text-xl">This Component used V-slots</h1>
                        <div class="my-2 p-2 bg-blue-500 rounded flex gap-2 justify-center flex-wrap">
                            <div v-for="i in 6" :key="i" class="p-2 bg-white rounded w-1/5">
                                A
                            </div>
                        </div> 
                    </div>
                </v-solt>
            </VSlotComp>

            <StateComp />

            <WatchComp />

        </div>
    </main>
</template>

<style>
</style>


<!-- Notes -->
<!-- Vue Slots let's us pass template content to child component -->
<!-- Vue Slots allows us to inject tempelate code to child component -->

<!-- to use multiple slots in a component we need to give it a name, by default it's name is default -->
<!-- In the parent component we should specify which slot we are targeting with v-slot  -->