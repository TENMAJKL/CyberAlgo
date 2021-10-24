<template>
   <div class="p-24 mx-16 card">
        Reinstalling...
        <div 
            class="pt-1 bg-green-500" 
            :style="{ width: progress + '%'}"
        >
        </div>
   </div>
</template>

<script>

import Success from "./Success.vue"

export default {
    data() {
        return {
            progress: 0
        }
    },
    mounted() {
        var progressInterval = setInterval(() => {
            this.progress++ 
            if (this.progress == 100)
            {
                this.$parent.action = Success 
                clearInterval(progressInterval)                
            }
        }, 50)
    }
}
</script> 
