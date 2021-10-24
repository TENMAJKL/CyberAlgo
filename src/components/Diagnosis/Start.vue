<template>
    <button 
        class="p-5 mb-5 border-2 border-blue-400 shadow"
        v-on:click="startDiagnosis"
    >
        Start system Diagnosis
    </button>
</template>

<script>

import Diagnosis from "./Diagnosis.vue"

export default {
    methods: {
        startDiagnosis() {
            this.$parent.action = Diagnosis
        }
    }
}
</script>
