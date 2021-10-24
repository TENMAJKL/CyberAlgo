<template>
    <div class="flex flex-col items-center justify-center h-screen text-white bg-gray-900">
        <component v-bind:is="action"/>
        <audio
            ref="audio"
            src="@/assets/audio/crypto.wav"
            preload
    ></audio>
    </div>
</template>

<script>

import Start from "./components/Start.vue"

export default {
    data() {
        return {
            action: null
        }
    },
    mounted() {
        this.action = Start
    }
}
</script>
