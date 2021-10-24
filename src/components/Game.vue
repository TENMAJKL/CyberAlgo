<template>
    <transition
        enter-active-class="transition ease-in-out duration-1000 transform"
        enter-class="opacity-0 translate-y-80"
        leave-class="opacity-0 -translate-y-80"
    >
        <component v-bind:is="action" />
    </transition>
</template>

<script>

import Intro from "./Intro.vue"

export default {
    data() {
        return {
            action: null
        }
    },
    methods: {
        stopMusic() {
            this.$parent.$refs.audio.pause()
            this.$refs.mute.remove()
        }
    },
    mounted() {
        this.action = Intro
    }
}
</script>
