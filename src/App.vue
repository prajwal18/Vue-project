<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "./components/Header.vue";
import data from "./AllData";
//Interface for main data
import allData from "./types/allDataType";

export default defineComponent({
  name: "App",
  components: {
    Header: Header,
  },
  setup() {
    const alldata = ref<allData>(data);
    return {
      alldata
    };
  },

  methods: {
  },
});
</script>

<template>
<Header />
<router-view 
  :nftData="alldata.nftData"
  :formData="alldata.formData"
  :contactData="alldata.contactData"
  :aboutData="alldata.aboutData"
/>
</template>

<style>
</style>
