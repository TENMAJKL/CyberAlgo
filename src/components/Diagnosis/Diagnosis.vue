<template>
    <div class="flex flex-col items-start p-24 card">
        <div class="mb-2 border-b-2 border-blue-400">
            GNU LibreDiagnosis
        </div> 
        <div
            v-for="test in failedTests"
            v-bind:key="test"
            class="text-red-600"
        >
            {{ test }} - Missing
        </div>
        <div v-if="isTesting">{{ tests[lastTest]["process"] }}</div>
        <div 
            v-else 
            class="flex flex-col items-start"
        >
            Testing done! Founded 4 missing functions! 
            <button v-on:click="openEditor" class="text-blue-500">Fix Problems</button>
        </div>
    </div>
</template>

<script>
import { tests } from "./tests.js"
import EditorIntro from "../Editor/Intro.vue"

export default {
    data() {
        return {
            tests: tests,
            lastTest: 0,
            failedTests: [],
            isTesting: true
        }
    },
    methods: {
        openEditor() {
            this.$parent.action = EditorIntro
        }
    },
    mounted() {
        setTimeout( () => {
            var checkingInterval = setInterval(() => {
                if (this.tests.length == this.lastTest+1)
                {
                    this.isTesting = false
                    return clearInterval(checkingInterval)
                }
                this.lastTest++
                var test
                if (!(test = this.tests[this.lastTest])["output"])
                    this.failedTests.push(test["process"])
            }, 250)
        }, 1000)
    }
}
</script>
