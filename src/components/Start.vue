<template>
    <button 
        v-on:click="start" 
        class="btn"
    >
        Start game
    </button> 
</template>

<script>

import Game from "./Game.vue"

export default {
    methods: {
        start() {
            this.$parent.$refs.audio.play()
            this.$parent.action = Game
        }
    }
}
</script>
