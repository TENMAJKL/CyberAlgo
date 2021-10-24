<template>
    <div class="flex flex-col items-start p-24 mx-16 card">
        You have to write 4 programs in special editor called rim, all of them need to be written in javascript. 
        This editor increments productivity by enlarging your code size every time you write character. 
        You can test your code anytime, but once you push it, it will check, whenever is the program correct, if you push wrong code to production, whole system will break.
        <button 
            v-on:click="openEditor" 
            class="text-blue-500"
        >
            Open Editor
        </button>
    </div>
</template>

<script>
import Editor from "./Editor.vue"

export default {
    methods: {
        openEditor() {
            this.$parent.action = Editor 
        }
    }
}

</script>
