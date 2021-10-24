<template>
    <div>
        Error - 
        Next time don't push to production.
        <div 
            class="absolute top-0 left-0 w-screen h-screen bg-red-600 opacity-40" 
            :class="{ hidden: !visible }"
        >
        </div>
        <transition
            enter-active-class="transition duration-1000 ease-in-out"
            enter-class="opacity-0"
        >
            <div class="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black" v-if="alertCount == 15">
                <button 
                    class="btn"
                    v-on:click="reload"
                >
                    Play again
                </button>
            </div>        
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            alertCount: 0
        }
    },
    methods: {
        reload() {
            window.location = "/"
        }
    },
    mounted() {
        var alertInterval = setInterval(() => { 
            this.alertCount++
            if (this.alertCount == 15)
                clearInterval(alertInterval)
            this.visible = !this.visible 
        }, 1000)
    }
}
</script>
