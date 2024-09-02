<template>

    <button @click="likePost">
        Like Counter
    </button>
    
</template>

<script lang="ts" setup>

import { ref } from 'vue';

    interface Props {
        postId: String;
    }

    const props = defineProps<Props>();

    const likeCount = ref(0)

    const likePost = ()=>{
        console.log('+1 like');
    }
    
</script>

<style scoped>

    button {
        background-color: #5e51bc;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s;
    }

    button:hover {
        background-color: #4a3f9a;
    }

</style>