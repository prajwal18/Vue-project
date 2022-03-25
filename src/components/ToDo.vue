<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    name: 'ToDo',
    components: {},
    setup(){
        const newItem = ref('');
        const searchTerm = ref('');
        const itemList = ref<string[]>([]);
        return{
            newItem, itemList, searchTerm,
        }
    },
    methods: {
        addItemToList():void{
            if(this.newItem !== '' && !(this.itemList.includes(this.newItem))){
                this.itemList.push(this.newItem);
            } else{
                alert(`The task: ${this.newItem} \nAlredy exists on list.`);
            }
            this.newItem = '';
        },
        removeItem(itemI:string):void{
            if(confirm(`The Task: ${itemI} will get deleted`)){
                this.itemList = this.itemList.filter((item) => item !== itemI);
            }
        }
    },
    computed: {
        searchList: function(): string[]{
            const ll = this.itemList.filter( item => item.includes(this.searchTerm));
            console.log(ll);
            return ll;
        }
    },
    watch: {
        searchTerm: function(){
            console.log(this.searchList)
        }
    }
});
</script>


<template>
    <main class="flex justify-center">
        <div class="inner-container p-2">
            <!-- Title -->
            <h1 class="my-8 text-4xl text-center font-bold text-stone-800">
                To Do List
            </h1>

            <!-- Search and Add Box -->
            <div class="p-2 bg-white rounded mt-4 mx-auto w-full flex flex-wrap gap-2 search-box">
                <div class="flex gap-2 w-full">
                    <input 
                        type="text" 
                        v-model="newItem"
                        v-on:keyup.enter="addItemToList" 
                        class="border-2 border-slate-300 p-1 w-full w-2/3" 
                        placeholder="Add a New Task"
                    />
                    <button 
                        @click="addItemToList" 
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full w-1/3"
                    >
                        Add
                    </button>
                </div>
                <input 
                    type="text" 
                    v-model="searchTerm" 
                    class="border-2 border-slate-300 p-1 w-full" 
                    placeholder="Search for item" 
                />
            </div>

            <!-- Task List Items Box -->
            <div class="p-2 bg-white rounded my-4 mx-auto w-full flex flex-wrap gap-2 items-box">
                <div 
                    class="w-4/5 p-2 bg-stone-700 text-white rounded mx-auto flex gap-2 justify-between items-center" 
                    v-for="(item, index) in searchList" 
                    :key="index"
                >
                    <p>{{item}}</p>
                    <button 
                        @click="removeItem(item)" 
                        class="bg-lime-400 p-2 rounded text-center text-white font-bold hover:bg-lime-700"
                    >
                        remove
                    </button>
                </div>
            </div>

        </div>
    </main>
</template>


<style scoped>
.search-box,
.items-box{
    max-width: 700px;
}
</style>