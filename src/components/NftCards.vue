<script lang="ts">
import { defineComponent, PropType } from 'vue';
import nftCard from "../types/nftCard";
export default defineComponent({
    props: {
        nft: {
            required: true,
            type: Object as PropType<nftCard>
        }
    }
})
</script>

<template>
    <div class="nft-card p-4 bg-slate-800 rounded">
        <div class="card-image w-full aspect-square overflow-hidden rounded">
            <img :src="nft.img" />
        </div>
        <h3 class="mt-4 font-bold text-slate-200 text-xl">{{nft.title}}</h3>
        <p class="mt-2 text-slate-500">{{nft.des}}</p>

        <!--Price and time-->
        <div class="mt-4 flex justify-between gap-2">
            <div class="flex justify-center gap-2 items-center text-teal-300">
                <fa :icon="['fab', 'ethereum']" />
                <p class="font-bold">0.041ETH</p>
            </div>
            <div class="flex justify-center gap-2 items-center text-slate-400">
                <fa icon="clock" />
                <p>3 days left</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>