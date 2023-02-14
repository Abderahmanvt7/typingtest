<script setup lang="ts"></script>

<template>
    <span class="close-icon"></span>
</template>

<style scoped>
.close-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid dodgerblue;
    border-radius: 50%;
    position: relative;
    margin: 3px;
}
.close-icon::before {
    content: "";
    width: 70%;
    height: 10%;
    background-color: dodgerblue;
    position: absolute;
    rotate: 42deg;
    translate: -6px 7px;
}
.close-icon::after {
    content: "";
    width: 70%;
    height: 10%;
    background-color: dodgerblue;
    position: absolute;
    translate: -6px 7px;
    rotate: 135deg;
}
</style>
