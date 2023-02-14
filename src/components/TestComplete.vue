<script setup lang="ts">
defineProps([
    "timerType",
    "typingSpeed",
    "typingOccuracy",
    "onBack",
    "onRetake",
]);
</script>

<template>
    <div class="container">
        <div class="line-1">Typing Test Complete!</div>
        <div class="line-2">
            You typed the {{ timerType }} Minute Typing Test.
        </div>
        <h3>
            Your speed was
            <span>{{ typingSpeed }} <span class="wpm">WPM</span></span> with
            <span> {{ typingOccuracy }}% </span> accuracy!
        </h3>
        <div class="buttons">
            <button class="btn-back" @click="onBack">Back</button>
            <button class="btn-retake" @click="onRetake">Retake</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
}
div.line-1 {
    font-size: 30px;
    font-weight: 600;
}
div.line-2 {
    font-size: 29px;
    font-weight: 500;
}
h3 > span {
    color: dodgerblue;
}
span.wpm {
    font-size: 10px;
}
.buttons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
button {
    border: none;
    background-color: dodgerblue;
    color: #fff;
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}
button:focus {
    scale: 1.02;
    box-shadow: 1px 1px 11px -2px dodgerblue;
    outline: 2px solid #fff;
}
</style>
