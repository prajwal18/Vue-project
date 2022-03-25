<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: 'VSlotComp',
    components: {},
    setup(){
        const input = ref(0);
        const valOut = ref(0);
        const conv = ref('km');
        const title = ref('Convert Meters to Kilometers');
        return {input, valOut, conv, title};
    },
    methods:{
        switchOperation(){
            if(this.conv === 'km'){
                this.conv = 'm';
                this.title = 'Convert Kilometers to Meters'
                return;
            }
            this.conv = 'km';
            this.title = 'Convert Meters to Kilometers'
        },
        calculateFunc(val:number):void{
            switch(this.conv){
                case 'km': {
                    this.valOut = val/1000;
                    break;
                }
                case 'm': {
                    this.valOut = val*1000;
                    break;
                }
            }
        }
    },
    watch: {
        input : function(val){
            this.calculateFunc(val)
        },
        conv: function(){
            this.calculateFunc(this.input)
        }
    }
});
</script>

<template>
    <div class="bg-white p-2 my-2 rounded">
        <p class="my-2 text-center text-xl">Enter a number (Using Watch)</p>
        <p class="my-2">{{title}}</p>
        <input :v-if="val === 'km'" v-model="input" type="number" class="border-2 border-slate-300 p-1"/>
        <p class="my-2">{{title.substring(8)}} : {{valOut}}</p>
        <button @click="switchOperation" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Switch</button>
    </div>
</template>

<style scoped></style>
















