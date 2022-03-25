/* eslint-disable @typescript-eslint/no-empty-function */
<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
    name: 'StateComp',
    components: {
    },
    setup(){
        return{}
    },
    methods:{
    },
    computed: {
        randomText: () => {
            return (Math.random()*15 > 8)? 'Greater than equal to 5': 'Less than 5';
        }
    }
});
</script>

<template>
    <div class="p-2 bg-white rounded">
        <h1 class="text-xl text-center">Using Computed</h1>
        <p>
            {{randomText}}
        </p>
    </div>
</template>

<style>
</style>


<!-- Notes on Options:state -->
<!-- Computed -->
<!-- A computed property is used to declaratively describe a value that depends on other values -->
