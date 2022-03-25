/* eslint-disable vue/multi-word-component-names */
<script lang='ts'>
import { defineComponent, PropType } from "vue";
import nftCard from "../types/nftCard";
import NftCards from "./NftCards.vue";

export default defineComponent({
    name: 'HomePage',
    components: {
        NftCards
    },
    setup(){
        return {};
    },
    methods: {},
    props: {
        nftData: {
            required: true,
            type: Array as PropType<nftCard[]>
        }
    }
});
</script>


<template>
    <main class="flex justify-center">
        <!-- inner-container -->
        <div class="inner-container">

            <!-- Main heading-->
            <div class="my-8">
                <h1 class="font-bold text-white text-3xl sm:text-4xl text-center">NFT Preview Section</h1>
            </div>

            <!--Contains all nft cards -->
            <div class="flex flex-wrap justify-center p-4 gap-4">



                <!--Individual Cards -->
                <NftCards :nft="nft" v-for="nft in nftData" :key="nft.id" />



            </div>
            <!-- nft cards container done -->
        </div>
    </main>
</template>

<style>
</style>