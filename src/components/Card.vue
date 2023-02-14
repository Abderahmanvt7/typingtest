<script setup lang="ts">
defineProps(["w", "h", "bg", "style"]);
</script>

<template>
    <div
        class="card"
        :style="[{ width: w, height: h, backgroundColor: bg }, style]"
    >
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    background-color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 0px #ccccccbd;
    display: block;
}
</style>
