<template>
    <div class="p-24 mx-16 card">
        {{ text[curent] }}
    </div>
</template>

<script>

import Diagnosis from "./Diagnosis/Start.vue"

export default {
    data() {
        return {
            text: [
                "Its year 2051. Whole world depends on huge technology called central brain. Artificial inteligence writen by you mostly in Rust.",
                "But for some reason, it contains parts writen in plain javascript. Code from age when there was only 6125421 frameworks and everybody was talking anout future in Rust. They were right actualy.",
                "1 minute ago, central brain got hacked by group of anonymous hackers, and you are the only one, that can fix it."
            ],
            curent: 0
        }
    },
    mounted() {
        let textChanging = setInterval(()=>{
            if (this.text.length == this.curent+1)
            {
                this.$parent.action = Diagnosis
                return clearInterval(textChanging)
            }
            
            this.curent++
        }, 10000)
    }
}

</script>
