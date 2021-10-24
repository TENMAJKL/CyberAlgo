<template>
   <div class="w-11/12 h-screen my-48 grid grid-rows-3 grid-flow-col gap-4">
        <!-- Tasks -->
        <div class="flex flex-col items-start p-2 card row-span-3">
            Tasks
            <button 
                v-for="(task, index) in tasks" 
                v-bind:key="index" 
                v-on:click="move(task.name)" 
                class="flex items-center"
                :class="{ 'text-blue-500': index == curentTask}"
            >
                {{ task["name"] }}
                <div 
                    v-if="task.output == true" 
                    class="text-green-500"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                    </svg>
                </div>
            </button>
        </div>
        <!-- Editor -->
        <div class="flex flex-col p-2 card row-span-2 col-span-3">
            <div class="flex items-center justify-between">
                Editor
                <div class="flex">
                    <button v-on:click="debug">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bug" viewBox="0 0 16 16">
                          <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z"/>
                        </svg>
                    </button>
                    <input 
                        type="number" 
                        class="bg-gray-900 outline-none"
                        ref="inputNumber"
                        value="0"
                    >
                    <button v-on:click="push">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <textarea 
                ref="code" 
                class="bg-gray-900 outline-none resize-none h-5/6" 
                @keyup="enlarge" 
                v-model="tasks[curentTask].code" 
                v-bind:style="{fontSize: tasks[curentTask].fontSize + 'pt'}"
            >
            </textarea>
        </div>
        <!-- Console -->
        <div class="p-2 card col-span-3">
            Console
            <div 
                v-for="(output, index) in console" 
                v-bind:key="index"
            >
                {{ output }}
            </div>
        </div>
    </div>
</template>

<script>

import { algorithms } from "../../kernel/algorithms.js"
import { isCorect } from "../../kernel/tester.js"

import Solved from "../Ending/Solved.vue"
import Error from "../Ending/Error.vue"

export default {
    data() {
        return {
            tasks: algorithms,
            curentTask: 0,
            console: [],
            finished: 0,
        }
    },
    methods: {
        enlarge() {
            this.tasks[this.curentTask].fontSize+= 0.1
        },
        debug() {
            var fn = Function("number", this.tasks[this.curentTask].code)
            this.console.push(fn(Math.abs(this.$refs.inputNumber.value)))
        },
        push() {
            var result = isCorect(Function("number", this.tasks[this.curentTask].code), this.curentTask)
            if (result)
            {
                this.tasks[this.curentTask].output = true
                this.finished++
                if (this.finished == 4)
                    this.$parent.action = Solved 
                return
            } 
            this.output = "error"
            this.$parent.action = Error
        },
        move(target) {
            var moveTo = this.tasks.find((iterator) => {
                return iterator.name == target
            })
            this.curentTask = this.tasks.indexOf(moveTo)
            this.$refs.code.style = `font-size: ${this.tasks[this.curentTask].fontSize}pt`
        }
    }
}

</script>
