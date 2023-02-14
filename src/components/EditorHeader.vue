<script setup lang="ts">
import { reactive } from "vue";
import CloseIcon from "./CloseIcon.vue";

defineProps(["timer", "onTestClosed"]);
</script>

<template>
    <div class="editor-header">
        <span>
            <span>
                {{
                    timer.munites.toString().length == 1
                        ? "0" + timer.munites
                        : timer.munites
                }} </span
            >:
            <span>
                {{
                    timer.seconds.toString().length == 1
                        ? "0" + timer.seconds
                        : timer.seconds
                }}
            </span>
        </span>
        <button tabindex="1" class="btn-close" @click="onTestClosed">
            <CloseIcon />
            close
        </button>
    </div>
</template>

<style scoped>
.editor-header {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    font-size: 20px;
    font-family: sans-serif;
    color: dodgerblue;
}
.btn-close {
    font: inherit;
    color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-close:focus {
    scale: 1.02;
    box-shadow: 1px 1px 11px -2px dodgerblue;
    outline: 2px solid #fff;
}
</style>
